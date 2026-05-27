import { useState } from "react";
import { Calendar, Clock } from "lucide-react";

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you! Your appointment request has been received. We will contact you shortly.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const services = [
    "Pre-Employment Testing",
    "Random Testing",
    "DOT Testing",
    "Post-Accident Testing",
    "Reasonable Suspicion",
    "Individual Testing"
  ];

  const timeSlots = [
    "8:00 AM - 8:30 AM",
    "8:30 AM - 9:00 AM",
    "9:00 AM - 9:30 AM",
    "9:30 AM - 10:00 AM",
    "10:00 AM - 10:30 AM",
    "10:30 AM - 11:00 AM",
    "11:00 AM - 11:30 AM",
    "11:30 AM - 12:00 PM",
    "12:00 PM - 12:30 PM",
    "12:30 PM - 1:00 PM",
    "1:00 PM - 1:30 PM",
    "1:30 PM - 2:00 PM",
    "2:00 PM - 2:30 PM",
    "2:30 PM - 3:00 PM",
    "3:00 PM - 3:30 PM",
    "3:30 PM - 4:00 PM",
    "4:00 PM - 4:30 PM",
    "4:30 PM - 5:00 PM"
  ];

  return (
    <section id="appointment" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8">
          <h2 className="text-white mb-4">REQUEST AN APPOINTMENT</h2>
          <p className="text-xl text-blue-100 mb-2">
            Walk-ins and same day appointments are welcome!
          </p>
          <p className="text-blue-200">
            Please call to inquire about weekend and after-hour appointments.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name and Last Name */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block mb-2">
                First Name<span className="text-yellow-400">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white/50 focus:border-yellow-400 outline-none px-0 py-2 text-white placeholder-blue-300 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2">
                Last Name<span className="text-yellow-400">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white/50 focus:border-yellow-400 outline-none px-0 py-2 text-white placeholder-blue-300 transition-colors"
              />
            </div>
          </div>

          {/* Phone and Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block mb-2">
                Phone<span className="text-yellow-400">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white/50 focus:border-yellow-400 outline-none px-0 py-2 text-white placeholder-blue-300 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email<span className="text-yellow-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white/50 focus:border-yellow-400 outline-none px-0 py-2 text-white placeholder-blue-300 transition-colors"
              />
            </div>
          </div>

          {/* Desired Service */}
          <div>
            <label htmlFor="service" className="block mb-2">
              Desired Service (optional)
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-blue-800/50 border-b-2 border-white/50 focus:border-yellow-400 outline-none px-0 py-2 text-white transition-colors"
            >
              <option value="" className="bg-blue-900">Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service} className="bg-blue-900">
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Desired Date and Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block mb-2">
                Desired Date<span className="text-yellow-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white/50 focus:border-yellow-400 outline-none px-0 py-2 text-white placeholder-blue-300 transition-colors"
                />
                <Calendar className="absolute right-0 top-2 w-5 h-5 text-blue-300 pointer-events-none" />
              </div>
            </div>
            <div>
              <label htmlFor="time" className="block mb-2">
                Desired Time<span className="text-yellow-400">*</span>
              </label>
              <div className="relative">
                <select
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-blue-800/50 border-b-2 border-white/50 focus:border-yellow-400 outline-none px-0 py-2 text-white transition-colors appearance-none"
                >
                  <option value="" className="bg-blue-900">Select a time</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot} className="bg-blue-900">
                      {slot}
                    </option>
                  ))}
                </select>
                <Clock className="absolute right-0 top-2 w-5 h-5 text-blue-300 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-2">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white/50 focus:border-yellow-400 outline-none px-0 py-2 text-white placeholder-blue-300 transition-colors resize-none"
            ></textarea>
          </div>

          <p className="text-sm text-blue-200">
            <span className="text-yellow-400">*</span> indicates required field
          </p>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 w-5 h-5 rounded border-white/50 bg-transparent focus:ring-yellow-400 focus:ring-2"
            />
            <label htmlFor="consent" className="text-sm text-blue-100">
              By checking this box, I consent to receive text messages related to appointments, general 
              inquiries, and conversations from Bakersfield Drug Testing. You can reply "STOP" at any 
              time to opt out. Message and data rates may apply. Message frequency may vary, text HELP 
              to (661) 321-0439 for assistance.
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 px-12 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}