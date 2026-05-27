import { Phone, Mail } from "lucide-react";

export function Header() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-1">
            <h1 className="text-blue-900">WEST COAST DRUG TESTING INC DBA</h1>
            <h1 className="text-blue-900">BAKERSFIELD DRUG TESTING</h1>
            <p className="text-sm text-yellow-600 font-semibold">On Call 24/7</p>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-gray-700 hover:text-yellow-600 transition-colors"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-gray-700 hover:text-yellow-600 transition-colors"
            >
              About
            </a>
            <a 
              href="#faq" 
              onClick={(e) => handleNavClick(e, 'faq')}
              className="text-gray-700 hover:text-yellow-600 transition-colors"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-gray-700 hover:text-yellow-600 transition-colors"
            >
              Contact
            </a>
            <a 
              href="tel:661-321-0439" 
              className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(661) 321-0439</span>
            </a>
          </div>

          <div className="md:hidden">
            <a 
              href="tel:661-321-0439" 
              className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-3 py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}