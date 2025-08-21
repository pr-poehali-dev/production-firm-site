import React from "react";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative text-white py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-blue-900/70 z-10"></div>
      <div className="absolute inset-0 bg-black/30 z-20"></div>
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/files/24d481a7-869a-4f86-9dab-8ce869cf7f35.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="container mx-auto px-4 text-center relative z-30">
        <div className="relative mb-8">
          <img 
            src="https://cdn.poehali.dev/files/2e5fe645-05d4-4850-88d8-aaf74d65ca90.png" 
            alt="Предприятие ОКА" 
            className="h-96 mx-auto drop-shadow-lg animate-fade-in"
          />
        </div>
        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-95 leading-relaxed drop-shadow-md">
          Разработка и изготовление нестандартных элементов трубопроводов для
          атомных станций, военной промышленности, нефтяной, газовой и
          химической отраслей
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Nuclear Power Plants */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="/img/749f01e5-245f-45b3-a1a3-d7dbd2f922f9.jpg" 
                alt="Атомные электростанции - основной заказчик ПФ ОКА" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700 ease-out animate-slideInLeft"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Badge className="mb-3 bg-blue-600 text-white">АЭС</Badge>
                <h4 className="text-2xl font-bold text-white drop-shadow mb-2">
                  Атомная энергетика
                </h4>
                <p className="text-blue-100 text-sm">
                  Поставки критически важной арматуры для АЭС по всей России и странам СНГ
                </p>
              </div>
            </div>
          </div>

          {/* Manufacturing Equipment */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="/img/2f9e8d33-f240-4733-af02-d96db9a62cf4.jpg" 
                alt="Производственные станки с ЧПУ на заводе ПФ ОКА" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700 ease-out animate-slideInLeft"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Badge className="mb-3 bg-green-600 text-white">Производство</Badge>
                <h4 className="text-2xl font-bold text-white drop-shadow mb-2">
                  Современные технологии
                </h4>
                <p className="text-green-100 text-sm">
                  Высокоточное оборудование с ЧПУ и передовые производственные процессы
                </p>
              </div>
            </div>
          </div>

          {/* Industrial Products */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="/img/f07c2f11-363d-4590-9dfb-97e33ab371d0.jpg" 
                alt="Промышленная арматура и трубопроводная продукция ПФ ОКА" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700 ease-out animate-slideInLeft"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Badge className="mb-3 bg-purple-600 text-white">Продукция</Badge>
                <h4 className="text-2xl font-bold text-white drop-shadow mb-2">
                  Промышленная арматура
                </h4>
                <p className="text-purple-100 text-sm">
                  Широкий спектр высококачественных изделий для критически важных систем
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;