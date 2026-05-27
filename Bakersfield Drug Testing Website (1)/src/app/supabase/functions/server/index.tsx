import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-18582924/health", (c) => {
  return c.json({ status: "ok" });
});

// Send chat message via email
app.post("/make-server-18582924/send-chat-message", async (c) => {
  try {
    const { message, userEmail, userName } = await c.req.json();
    
    if (!message || !message.trim()) {
      return c.json({ error: "Message is required" }, 400);
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable is not set");
      return c.json({ error: "Email service not configured" }, 500);
    }

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Bakersfield Drug Testing <onboarding@resend.dev>",
        to: ["khaalsa870@gmail.com"],
        subject: "New Chat Message from Bakersfield Drug Testing Website",
        html: `
          <h2>New Chat Message from Website</h2>
          <p><strong>PLEASE FORWARD THIS TO: garyridgeway@bakersfielddrugtesting.com</strong></p>
          <hr>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          ${userEmail ? `<p><strong>User Email:</strong> ${userEmail}</p>` : ''}
          ${userName ? `<p><strong>User Name:</strong> ${userName}</p>` : ''}
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          <hr>
          <p><em>Note: To receive emails directly at garyridgeway@bakersfielddrugtesting.com, verify your domain at resend.com/domains</em></p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Error sending email via Resend:", errorData);
      return c.json({ error: "Failed to send email", details: errorData }, 500);
    }

    const emailData = await emailResponse.json();
    console.log("Email sent successfully:", emailData);

    // Store message in KV store for backup
    const messageId = `chat_message_${Date.now()}`;
    await kv.set(messageId, {
      message,
      userEmail,
      userName,
      timestamp: new Date().toISOString(),
      emailSent: true,
    });

    return c.json({ 
      success: true, 
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error in send-chat-message endpoint:", error);
    return c.json({ error: "Internal server error", details: error.message }, 500);
  }
});

Deno.serve(app.fetch);