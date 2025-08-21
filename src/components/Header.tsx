import React from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/5 backdrop-blur-sm shadow-sm border-b border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
      </div>
      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/a3990dbc-3b26-4517-9596-4282f0bdf140.png" 
              alt="ПФ ОКА логотип" 
              className="h-14 w-14 object-contain"
            />
            <h1 className="text-3xl font-bold text-white">ПФ ОКА</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#news"
              className="text-white hover:text-blue-300 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
            >
              Новости
            </a>
            <a
              href="#products"
              className="text-white hover:text-blue-300 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
            >
              Продукция
            </a>
            <a
              href="#production"
              className="text-white hover:text-blue-300 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
            >
              Производство
            </a>
            <a
              href="#laboratory"
              className="text-white hover:text-blue-300 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
            >
              Лаборатория
            </a>
            <a
              href="#quality"
              className="text-white hover:text-blue-300 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
            >
              Качество
            </a>
            <a
              href="#services"
              className="text-white hover:text-blue-300 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
            >
              Услуги
            </a>
            <a
              href="#geography"
              className="text-white hover:text-blue-300 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
            >
              География
            </a>
            <a
              href="#contacts"
              className="text-white hover:text-blue-300 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
            >
              Контакты
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <a 
              href="https://vk.com/pfoka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-110 px-3 py-2 hover:bg-white/10 rounded-full font-bold text-sm"
            >
              ВК
            </a>
            <a 
              href="https://t.me/pfoka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-110 p-2 hover:bg-white/10 rounded-full"
            >
              <Icon name="Send" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;