import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

// Laboratory Gallery Component
const LabGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);
  
  const images = [
    {
      src: "https://cdn.poehali.dev/files/f420695e-53f5-4af4-969f-868a504c3837.JPG",
      title: "Неразрушающий контроль",
      description: "Методы контроля без повреждения изделий",
      equipment: [
        "Ультразвуковой контроль",
        "Магнитопорошковый контроль",
        "Капиллярный контроль",
        "Радиографический контроль"
      ]
    },
    {
      src: "https://cdn.poehali.dev/files/af8d1976-eaaf-4b6a-92fc-bcb7a38c9746.JPG",
      title: "Разрушающий контроль",
      description: "Механические испытания материалов",
      equipment: [
        "Испытания на растяжение",
        "Испытания на ударную вязкость",
        "Определение твердости",
        "Металлографические исследования"
      ]
    },
    {
      src: "https://cdn.poehali.dev/files/e0d4a538-7ba8-4f9c-a0a0-f58f156c4595.JPG",
      title: "Прайс",
      description: "Стоимость услуг лаборатории",
      equipment: [
        "Скачать прайс-лист",
        "Индивидуальные расценки",
        "Система скидок",
        "Консультации специалистов"
      ]
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full">
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src={images[currentImage].src}
          alt={images[currentImage].title}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform"
          key={currentImage}
        />
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Navigation buttons */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-300 group"
        >
          <Icon name="ChevronLeft" className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-300 group"
        >
          <Icon name="ChevronRight" className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        </button>
        
        {/* Image indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImage 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
        
        {/* Static text overlay on photo */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-8">
          <div className="text-center">
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-white text-lg font-medium">
                Проведение полного цикла испытаний основного материала и готовой продукции.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image info */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Main control types */}
        <div className="grid md:grid-cols-2 gap-8">
          {images.slice(0, 2).map((image, index) => (
            <div 
              key={index}
              className="relative text-center"
            >
              <h3 className="text-lg font-medium text-white mb-4 uppercase tracking-wide">
                {image.title}
              </h3>
              
              {/* Always visible list */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-xl">
                <div className="text-left space-y-2">
                  {image.equipment?.map((item, idx) => (
                    <div key={idx} className="text-sm text-blue-200 space-y-1">
                      <span>• {item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Price button in bottom right corner */}
        <div className="flex justify-end mt-6">
          <div 
            className={`text-center p-3 rounded-lg transition-all duration-300 cursor-pointer bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-400/30 hover:from-green-600/30 hover:to-blue-600/30 max-w-xs ${
              currentImage === 2 ? 'ring-2 ring-green-400/50' : ''
            }`}
            onClick={() => setCurrentImage(2)}
          >
            <h4 className="text-white font-semibold mb-1">{images[2].title}</h4>
            <p className="text-green-300 text-sm">{images[2].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainSections = () => {
  return (
    <>
      {/* Products Section */}
      <section
        id="products"
        className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Продукция</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Полный спектр трубопроводной арматуры для критически важных
              объектов
            </p>
          </div>
          <div className="space-y-8">
            {/* АЭС */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-white/20">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img 
                    src="/img/f88074f2-8e76-4cbe-af88-7bf909da0362.jpg" 
                    alt="Арматура для АЭС" 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <Icon name="Zap" className="h-10 w-10 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Арматура для АЭС</h3>
                  </div>
                  <p className="text-blue-100 mb-6">
                    Специализированная трубопроводная арматура для атомных электростанций с повышенной радиационной стойкостью
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-white">Характеристики:</h4>
                      <ul className="text-sm text-blue-200 space-y-1">
                        <li>• Радиационная стойкость</li>
                        <li>• Температуры: -60°C до +350°C</li>
                        <li>• Давление до 16 МПа</li>
                        <li>• Класс безопасности 1-4</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-white">Применение:</h4>
                      <ul className="text-sm text-blue-200 space-y-1">
                        <li>• Реакторные установки</li>
                        <li>• Аварийное охлаждение</li>
                        <li>• Парогенераторы</li>
                        <li>• Очистка теплоносителя</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="bg-blue-600 text-white">ГОСТ 356-80</Badge>
                    <Badge variant="secondary" className="bg-blue-600 text-white">ОПБ-88/97</Badge>
                    <Badge variant="default" className="bg-green-600 text-white">Высокая надёжность</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Военная */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-white/20">
              <div className="flex flex-col md:flex-row-reverse">
                <div className="md:w-1/2">
                  <img 
                    src="/img/e658f2ac-7b41-41d7-afd7-026f19912895.jpg" 
                    alt="Военная арматура" 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <Icon name="Wrench" className="h-10 w-10 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Военная арматура</h3>
                  </div>
                  <p className="text-blue-100 mb-6">
                    Высокотехнологичная арматура для оборонно-промышленного комплекса с повышенной стойкостью к экстремальным условиям
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-white">Характеристики:</h4>
                      <ul className="text-sm text-blue-200 space-y-1">
                        <li>• Экстремальные условия</li>
                        <li>• Антикоррозийные покрытия</li>
                        <li>• Повышенная герметичность</li>
                        <li>• Агрессивные среды</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-white">Применение:</h4>
                      <ul className="text-sm text-blue-200 space-y-1">
                        <li>• Системы жизнеобеспечения</li>
                        <li>• Топливные магистрали</li>
                        <li>• Гидравлические системы</li>
                        <li>• Специальные установки</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="bg-blue-600 text-white">ГОСТ Р 52720</Badge>
                    <Badge variant="secondary" className="bg-blue-600 text-white">Гриф секретности</Badge>
                    <Badge variant="default" className="bg-red-600 text-white">Секретность</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Нефтегаз */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-white/20">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img 
                    src="/img/dfacf4ad-0e07-4716-aef5-48445543a993.jpg" 
                    alt="Нефтегазовая арматура" 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <Icon name="Fuel" className="h-10 w-10 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Нефтегазовая арматура</h3>
                  </div>
                  <p className="text-blue-100 mb-6">
                    Промышленная арматура для нефтяной и газовой отрасли с высокой стойкостью к нефтепродуктам и экстремальным давлениям
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-white">Характеристики:</h4>
                      <ul className="text-sm text-blue-200 space-y-1">
                        <li>• Давление до 40 МПа</li>
                        <li>• Температуры: -60°C до +450°C</li>
                        <li>• Стойкость к нефтепродуктам</li>
                        <li>• Антикоррозийная защита</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-white">Применение:</h4>
                      <ul className="text-sm text-blue-200 space-y-1">
                        <li>• Магистральные трубопроводы</li>
                        <li>• Нефтеперерабатывающие заводы</li>
                        <li>• Газоперекачивающие станции</li>
                        <li>• Морские платформы</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="bg-blue-600 text-white">API 6D</Badge>
                    <Badge variant="secondary" className="bg-blue-600 text-white">ГОСТ 9544</Badge>
                    <Badge variant="default" className="bg-orange-600 text-white">Износостойкость</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Химическая */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-white/20">
              <div className="flex flex-col md:flex-row-reverse">
                <div className="md:w-1/2">
                  <img 
                    src="/img/29f7f330-5527-4873-88e3-4c16527458cf.jpg" 
                    alt="Химическая арматура" 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <Icon name="Beaker" className="h-10 w-10 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Химическая арматура</h3>
                  </div>
                  <p className="text-blue-100 mb-6">
                    Специализированная арматура для химической промышленности с высокой стойкостью к химически активным средам
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-white">Характеристики:</h4>
                      <ul className="text-sm text-blue-200 space-y-1">
                        <li>• Химическая стойкость</li>
                        <li>• Специальные уплотнения</li>
                        <li>• Давление до 25 МПа</li>
                        <li>• Температуры: -40°C до +400°C</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-white">Применение:</h4>
                      <ul className="text-sm text-blue-200 space-y-1">
                        <li>• Химические заводы</li>
                        <li>• Производство удобрений</li>
                        <li>• Фармацевтическая промышленность</li>
                        <li>• Системы водоподготовки</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="bg-blue-600 text-white">ГОСТ 12815</Badge>
                    <Badge variant="secondary" className="bg-blue-600 text-white">DIN 3840</Badge>
                    <Badge variant="default" className="bg-purple-600 text-white">Коррозионная стойкость</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section id="production" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-sm">
              Производство
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Современное высокотехнологичное производство с полным циклом изготовления промышленной арматуры
            </p>
          </div>

          {/* Main production facility showcase */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20">
              <div className="relative h-96">
                <img 
                  src="/img/e53d8208-db8c-4d3e-96ba-310ead3a0f00.jpg" 
                  alt="Производственный цех с современным оборудованием" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Высокотехнологичное производство
                    </h3>
                    <p className="text-blue-100">
                      Современные производственные линии с ЧПУ оборудованием и автоматизированными системами контроля качества
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Production capabilities grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Manufacturing Equipment */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-white/20">
                <div className="relative h-64">
                  <img 
                    src="/img/f162b2a9-a1a4-4e96-a1a0-407bb97096c1.jpg" 
                    alt="Промышленное оборудование и станки" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2 bg-blue-600 text-white">Оборудование</Badge>
                    <h4 className="text-xl font-bold text-white drop-shadow">
                      Станочный парк и механообработка
                    </h4>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-white">Оборудование:</h5>
                      <ul className="text-sm text-blue-200 space-y-1">
                        <li>• Токарные станки с ЧПУ</li>
                        <li>• Фрезерные центры</li>
                        <li>• Шлифовальные станки</li>
                        <li>• Координатно-расточные</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-white">Возможности:</h5>
                      <ul className="text-sm text-blue-200 space-y-1">
                        <li>• Точность до 0.01 мм</li>
                        <li>• Детали до 5000 мм</li>
                        <li>• Серийное производство</li>
                        <li>• Единичные изделия</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Finished Products */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-white/20">
                <div className="relative h-64">
                  <img 
                    src="/img/bb2853d6-4857-4186-96c8-a5c15791a915.jpg" 
                    alt="Готовая продукция - промышленная арматура" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2 bg-green-600 text-white">Продукция</Badge>
                    <h4 className="text-xl font-bold text-white drop-shadow">
                      Готовая промышленная арматура
                    </h4>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-white">Номенклатура:</h5>
                      <ul className="text-sm text-blue-200 space-y-1">
                        <li>• Задвижки клиновые</li>
                        <li>• Вентили запорные</li>
                        <li>• Краны шаровые</li>
                        <li>• Обратные клапаны</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-white">Материалы:</h5>
                      <ul className="text-sm text-blue-200 space-y-1">
                        <li>• Углеродистая сталь</li>
                        <li>• Нержавеющая сталь</li>
                        <li>• Легированные стали</li>
                        <li>• Специальные сплавы</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Production process steps */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Производственный процесс
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl">
                  <Icon name="FileText" className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Проектирование</h4>
                <p className="text-sm text-blue-200">
                  Разработка технической документации и 3D-моделирование
                </p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl">
                  <Icon name="Cog" className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Изготовление</h4>
                <p className="text-sm text-blue-200">
                  Механическая обработка на станках с ЧПУ и специальном оборудовании
                </p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl">
                  <Icon name="Search" className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Контроль</h4>
                <p className="text-sm text-blue-200">
                  Многоступенчатый контроль качества и испытания готовой продукции
                </p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl">
                  <Icon name="Package" className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Упаковка</h4>
                <p className="text-sm text-blue-200">
                  Специальная упаковка и подготовка к отгрузке с сопроводительной документацией
                </p>
              </div>
            </div>
          </div>

          {/* Production statistics */}
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" className="h-6 w-6 text-blue-300" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">20+</h4>
              <p className="text-blue-200">лет производственного опыта</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" className="h-6 w-6 text-green-300" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">50+</h4>
              <p className="text-blue-200">единиц современного оборудования</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="h-6 w-6 text-purple-300" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">150+</h4>
              <p className="text-blue-200">квалифицированных специалистов</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="h-6 w-6 text-orange-300" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">5000+</h4>
              <p className="text-blue-200">изделий в год</p>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Section */}
      <section id="laboratory" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-sm">
              Центральная Заводская Лаборатория
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Современная научно-исследовательская лаборатория с высокоточным оборудованием для комплексных испытаний
            </p>
          </div>
        </div>

        {/* Full width gallery */}
        <div className="w-full">
          <LabGallery />
        </div>

        <div className="container mx-auto px-4 relative z-10">

        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Качество</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Строгий контроль качества на всех этапах производства
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Сертификаты и стандарты
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-400" />
                  <span className="text-white">ISO 9001:2015</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-400" />
                  <span className="text-white">ГОСТ Р 52720-2007</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-400" />
                  <span className="text-white">РД 26-07-23-99</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-400" />
                  <span className="text-white">ASME B16.34</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">
                Контроль качества
              </h4>
              <p className="text-blue-100 mb-6">
                Каждое изделие проходит многоступенчатый контроль качества,
                включая:
              </p>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>• Входной контроль материалов</li>
                <li>• Промежуточный контроль производства</li>
                <li>• Финальные испытания готовой продукции</li>
                <li>• Оформление сертификатов соответствия</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Услуги</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Полный цикл услуг от проектирования до поставки
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow transform hover:scale-105 duration-300 bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <CardHeader>
                <Icon name="PenTool" className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Проектирование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  Разработка технических решений под конкретные задачи клиента
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow transform hover:scale-105 duration-300 bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <CardHeader>
                <Icon name="Cog" className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Производство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  Изготовление арматуры любой сложности на современном
                  оборудовании
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow transform hover:scale-105 duration-300 bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <CardHeader>
                <Icon name="TestTube" className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Испытания</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  Комплексные испытания металлов и материалов на прочность, коррозийную стойкость и износостойкость
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section id="geography" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
        
        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
              География поставок
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Наша продукция работает на промышленных объектах по всей России и странах СНГ
            </p>
          </div>

          {/* Main stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Globe" className="h-8 w-8 text-blue-300" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">85+</h3>
              <p className="text-blue-200">регионов России</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="MapPin" className="h-8 w-8 text-green-300" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">12</h3>
              <p className="text-blue-200">стран СНГ</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Building2" className="h-8 w-8 text-purple-300" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
              <p className="text-blue-200">промышленных объектов</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Truck" className="h-8 w-8 text-orange-300" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
              <p className="text-blue-200">логистическая поддержка</p>
            </div>
          </div>

          {/* Geography Map */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Карта поставок
            </h3>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/files/77c3c656-488d-4f5e-af76-704452e38164.png" 
                alt="Карта поставок ПФ ОКА - атомные станции и промышленные объекты" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-blue-100 text-lg max-w-4xl mx-auto">
                Наша продукция установлена на ключевых промышленных объектах России и СНГ: 
                атомных электростанциях, нефтеперерабатывающих заводах, химических комбинатах и предприятиях энергетики
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Карьера</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Мы ищем талантливых специалистов, готовых развиваться вместе с нами. 
              Предлагаем стабильную работу, конкурентную зарплату и возможности профессионального роста.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group border border-white/20">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                <Icon name="TrendingUp" className="h-8 w-8 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Карьерный рост</h3>
              <p className="text-blue-200 text-sm">Четкие перспективы развития и продвижения</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group border border-white/20">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
                <Icon name="DollarSign" className="h-8 w-8 text-green-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Достойная оплата</h3>
              <p className="text-blue-200 text-sm">Конкурентная зарплата и премии</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group border border-white/20">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors">
                <Icon name="GraduationCap" className="h-8 w-8 text-purple-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Обучение</h3>
              <p className="text-blue-200 text-sm">Повышение квалификации за счет компании</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group border border-white/20">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/30 transition-colors">
                <Icon name="Shield" className="h-8 w-8 text-orange-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Социальный пакет</h3>
              <p className="text-blue-200 text-sm">ДМС, отпуск, льготы сотрудникам</p>
            </div>
          </div>

          {/* Current Openings */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white text-center mb-8">Открытые вакансии</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-blue-500 bg-white/10 backdrop-blur-sm border border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Icon name="Users" className="h-6 w-6 text-blue-400" />
                    <span>Менеджер по продажам</span>
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    Отдел продаж • Полная занятость • Опыт от 2 лет
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100 mb-4">
                    Поиск новых клиентов, ведение переговоров, увеличение объема продаж
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-400 font-semibold">80-120 тыс. руб.</span>
                    <Button variant="outline" size="sm" className="text-white border-white/30 hover:bg-white/10 bg-transparent">
                      Откликнуться
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-green-500 bg-white/10 backdrop-blur-sm border border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Icon name="Calculator" className="h-6 w-6 text-green-400" />
                    <span>Главный бухгалтер</span>
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    Финансовый отдел • Полная занятость • Опыт от 5 лет
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100 mb-4">
                    Ведение учета, подготовка отчетности, налоговое планирование
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-400 font-semibold">100-140 тыс. руб.</span>
                    <Button variant="outline" size="sm" className="text-white border-white/30 hover:bg-white/10 bg-transparent">
                      Откликнуться
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-purple-500 bg-white/10 backdrop-blur-sm border border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Icon name="Monitor" className="h-6 w-6 text-purple-400" />
                    <span>IT-специалист</span>
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    IT-отдел • Полная занятость • Опыт от 3 лет
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100 mb-4">
                    Поддержка IT-инфраструктуры, администрирование систем
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-400 font-semibold">90-130 тыс. руб.</span>
                    <Button variant="outline" size="sm" className="text-white border-white/30 hover:bg-white/10 bg-transparent">
                      Откликнуться
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-orange-500 bg-white/10 backdrop-blur-sm border border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Icon name="Truck" className="h-6 w-6 text-orange-400" />
                    <span>Логист</span>
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    Логистический отдел • Полная занятость • Опыт от 1 года
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100 mb-4">
                    Организация поставок, контроль доставки, работа с транспортными компаниями
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-400 font-semibold">60-90 тыс. руб.</span>
                    <Button variant="outline" size="sm" className="text-white border-white/30 hover:bg-white/10 bg-transparent">
                      Откликнуться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact for applications */}
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <Icon name="Mail" className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Не нашли подходящую вакансию?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Присылайте свое резюме на указанную почту. Мы рассмотрим ваши навыки и свяжемся, 
              если появится подходящая позиция.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:hr@company.ru" 
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
              >
                hr@company.ru
              </a>
              <span className="text-blue-400">•</span>
              <a 
                href="tel:+74951234567" 
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
              >
                +7 (495) 123-45-67
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Свяжитесь с нами для получения консультации
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon
                name="MapPin"
                className="h-12 w-12 text-blue-400 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Адрес</h3>
              <p className="text-gray-300">
                123456, Москва
                <br />
                ул. Промышленная, 10
              </p>
            </div>
            <div className="text-center">
              <Icon
                name="Phone"
                className="h-12 w-12 text-blue-400 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-gray-300">
                +7 (495) 123-45-67
                <br />
                +7 (495) 123-45-68
              </p>
            </div>
            <div className="text-center">
              <Icon
                name="Mail"
                className="h-12 w-12 text-blue-400 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">
                info@tuboprom.ru
                <br />
                sales@tuboprom.ru
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img 
                src="https://cdn.poehali.dev/files/a3990dbc-3b26-4517-9596-4282f0bdf140.png" 
                alt="ПФ ОКА логотип" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold">ПФ ОКА</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 ПФ ОКА. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainSections;