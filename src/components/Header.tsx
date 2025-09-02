import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'О компании' },
    { id: 'products', label: 'Продукция' },
    { id: 'contact', label: 'Контакты' }
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/a3990dbc-3b26-4517-9596-4282f0bdf140.png" 
              alt="НИИ Космические Технологии" 
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold text-foreground">НИИ КТ</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <a 
                href="https://vk.com/pfoka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
              >
                <img 
                  src="https://cdn.poehali.dev/files/2fe12838-4d5b-487e-8085-4f579e360be4.png" 
                  alt="ВКонтакте" 
                  className="h-4 w-4 object-contain"
                />
              </a>
              <a 
                href="https://t.me/pfoka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
              >
                <Icon name="Send" className="h-4 w-4" />
              </a>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors py-2 px-4 rounded-md hover:bg-muted"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 px-4 pt-2 border-t border-border mt-4">
                <a 
                  href="https://vk.com/pfoka" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <img 
                    src="https://cdn.poehali.dev/files/2fe12838-4d5b-487e-8085-4f579e360be4.png" 
                    alt="ВКонтакте" 
                    className="h-4 w-4 object-contain"
                  />
                </a>
                <a 
                  href="https://t.me/pfoka" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="Send" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;