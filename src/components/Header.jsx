import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ['about', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled 
        ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <nav className="py-6">
          <ul className="flex justify-center items-center space-x-12">
            {[
              { href: '#about', label: 'About' },
              { href: '#projects', label: 'Projects' },
              { href: '#contact', label: 'Contact' }
            ].map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`relative px-2 py-1 text-lg font-medium transition-all duration-300
                    ${activeSection === href.slice(1)
                      ? 'text-[#333333]'
                      : 'text-gray-700 hover:text-[#333333]'
                    }
                    group
                  `}
                >
                  {label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#333333] transform origin-left transition-all duration-300
                    ${activeSection === href.slice(1)
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                    }
                  `}></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
