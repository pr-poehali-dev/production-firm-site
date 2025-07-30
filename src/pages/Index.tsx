import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-gray-50/20 backdrop-blur-sm"
          style={{
            backgroundImage:
              "url(/img/c1622a71-113f-46a5-93d0-958617b847a9.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        ></div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Settings" className="h-14 w-14 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">ПФ ОКА</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#news"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
              >
                Новости
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
              >
                Продукция
              </a>
              <a
                href="#production"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
              >
                Производство
              </a>
              <a
                href="#quality"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
              >
                Качество
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
              >
                Услуги
              </a>
              <a
                href="#geography"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
              >
                География
              </a>
              <a
                href="#contacts"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
              >
                Контакты
              </a>
            </nav>
            <Button className="transform hover:scale-105 transition-transform duration-300">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
          <h2 className="text-6xl font-bold mb-8 animate-fade-in drop-shadow-lg">
            Предприятие ОКА
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-95 leading-relaxed drop-shadow-md">
            Разработка и изготовление нестандартных элементов трубопроводов для
            атомных станций, военной промышленности, нефтяной, газовой и
            химической отраслей
          </p>
          <div className="flex justify-center space-x-6">
            <Button
              size="lg"
              variant="secondary"
              className="transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Каталог продукции
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>



      {/* News Section with Company Description */}
      <section id="news" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Industrial background texture */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-blue-900/20 to-gray-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/50 to-transparent"></div>
        
        {/* Metallic accent lines */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 shadow-lg"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 shadow-lg"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Company Industrial Description */}
          <div className="text-center mb-20">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 shadow-2xl">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                    <Icon name="Factory" className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                      ПФ ОКА
                    </h2>
                    <p className="text-blue-300 text-lg font-medium">
                      Промышленное предприятие
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Calendar" className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">20+</h3>
                  <p className="text-blue-200">лет опыта в промышленности</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
                  <p className="text-blue-200">квалифицированных специалистов</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Building" className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">1000+</h3>
                  <p className="text-blue-200">реализованных проектов</p>
                </div>
              </div>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                Ведущий российский производитель специализированной трубопроводной арматуры 
                для атомной энергетики, оборонной промышленности, нефтегазового и химического 
                комплексов. Наше предприятие оснащено современным высокотехнологичным 
                оборудованием и сертифицировано по международным стандартам качества.
              </p>
            </div>
          </div>

          {/* News Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Новости и события
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Последние новости из мира промышленного производства и наших достижений
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main featured news */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-white/20">
                <div className="relative h-80">
                  <img 
                    src="/img/70995ca0-b3a0-4761-a4e6-be3dc074c550.jpg" 
                    alt="Новый производственный комплекс" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge className="mb-3 bg-blue-600 text-white">Производство</Badge>
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                      Запуск нового производственного комплекса
                    </h3>
                    <p className="text-blue-100 text-sm drop-shadow">
                      15 июля 2024
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-white/90 leading-relaxed mb-4">
                    Открыт новый высокотехнологичный производственный комплекс для изготовления 
                    трубопроводной арматуры повышенной надежности. Инвестиции составили более 
                    500 млн рублей, создано 150 новых рабочих мест.
                  </p>
                  <Button variant="outline" className="bg-transparent border-blue-400 text-blue-300 hover:bg-blue-600 hover:text-white">
                    Читать далее
                  </Button>
                </div>
              </div>
            </div>

            {/* Side news */}
            <div className="space-y-6">
              {/* News item 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="relative h-48">
                  <img 
                    src="/img/18138835-463f-44f4-9045-71f3fce4ad92.jpg" 
                    alt="Сертификация для АЭС" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2 bg-green-600 text-white text-xs">Сертификация</Badge>
                    <h4 className="text-lg font-bold text-white drop-shadow">
                      Получена сертификация для атомной энергетики
                    </h4>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white/80 text-sm mb-3">
                    Наша продукция успешно прошла сертификацию для использования 
                    на объектах атомной энергетики...
                  </p>
                  <p className="text-blue-300 text-xs">12 июля 2024</p>
                </div>
              </div>

              {/* News item 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="relative h-48">
                  <img 
                    src="/img/7ef37a32-45d9-455f-9a9c-b9a58d6de416.jpg" 
                    alt="Контракт с нефтегазовой компанией" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2 bg-orange-600 text-white text-xs">Контракт</Badge>
                    <h4 className="text-lg font-bold text-white drop-shadow">
                      Крупный контракт с ПАО "Газпром"
                    </h4>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white/80 text-sm mb-3">
                    Подписан долгосрочный контракт на поставку специализированной 
                    арматуры для магистральных газопроводов...
                  </p>
                  <p className="text-blue-300 text-xs">8 июля 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom news row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="relative h-32">
                <img 
                  src="/img/9889157b-f7fc-4cb2-95d9-c26f18b85d36.jpg" 
                  alt="Новые технологии" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="p-4">
                <Badge className="mb-2 bg-purple-600 text-white text-xs">Технологии</Badge>
                <h5 className="text-sm font-bold text-white mb-2">
                  Внедрение новых технологий контроля качества
                </h5>
                <p className="text-blue-300 text-xs">5 июля 2024</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="relative h-32">
                <img 
                  src="/img/70995ca0-b3a0-4761-a4e6-be3dc074c550.jpg" 
                  alt="Участие в выставке" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="p-4">
                <Badge className="mb-2 bg-red-600 text-white text-xs">Выставка</Badge>
                <h5 className="text-sm font-bold text-white mb-2">
                  Участие в выставке "Нефтегаз-2024"
                </h5>
                <p className="text-blue-300 text-xs">28 июня 2024</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="relative h-32">
                <img 
                  src="/img/18138835-463f-44f4-9045-71f3fce4ad92.jpg" 
                  alt="Награда" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="p-4">
                <Badge className="mb-2 bg-yellow-600 text-white text-xs">Награда</Badge>
                <h5 className="text-sm font-bold text-white mb-2">
                  Награда "Лучший поставщик года"
                </h5>
                <p className="text-blue-300 text-xs">20 июня 2024</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="relative h-32">
                <img 
                  src="/img/7ef37a32-45d9-455f-9a9c-b9a58d6de416.jpg" 
                  alt="Экспорт" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="p-4">
                <Badge className="mb-2 bg-teal-600 text-white text-xs">Экспорт</Badge>
                <h5 className="text-sm font-bold text-white mb-2">
                  Поставки в страны СНГ увеличены на 40%
                </h5>
                <p className="text-blue-300 text-xs">15 июня 2024</p>
              </div>
            </div>
          </div>

          {/* View all news button */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
              <Icon name="Newspaper" className="h-5 w-5 mr-2" />
              Все новости
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Продукция</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр трубопроводной арматуры для критически важных
              объектов
            </p>
          </div>
          <div className="space-y-8">
            {/* АЭС */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                    <Icon name="Zap" className="h-10 w-10 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Арматура для АЭС</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Специализированная трубопроводная арматура для атомных электростанций с повышенной радиационной стойкостью
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Характеристики:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Радиационная стойкость</li>
                        <li>• Температуры: -60°C до +350°C</li>
                        <li>• Давление до 16 МПа</li>
                        <li>• Класс безопасности 1-4</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Применение:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Реакторные установки</li>
                        <li>• Аварийное охлаждение</li>
                        <li>• Парогенераторы</li>
                        <li>• Очистка теплоносителя</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary">ГОСТ 356-80</Badge>
                    <Badge variant="secondary">ОПБ-88/97</Badge>
                    <Badge variant="default">Высокая надёжность</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Военная */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                    <Icon name="Wrench" className="h-10 w-10 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Военная арматура</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Высокотехнологичная арматура для оборонно-промышленного комплекса с повышенной стойкостью к экстремальным условиям
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Характеристики:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Экстремальные условия</li>
                        <li>• Антикоррозийные покрытия</li>
                        <li>• Повышенная герметичность</li>
                        <li>• Агрессивные среды</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Применение:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Системы жизнеобеспечения</li>
                        <li>• Топливные магистрали</li>
                        <li>• Гидравлические системы</li>
                        <li>• Специальные установки</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary">ГОСТ Р 52720</Badge>
                    <Badge variant="secondary">Гриф секретности</Badge>
                    <Badge variant="default">Секретность</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Нефтегаз */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                    <Icon name="Fuel" className="h-10 w-10 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Нефтегазовая арматура</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Промышленная арматура для нефтяной и газовой отрасли с высокой стойкостью к нефтепродуктам и экстремальным давлениям
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Характеристики:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Давление до 40 МПа</li>
                        <li>• Температуры: -60°C до +450°C</li>
                        <li>• Стойкость к нефтепродуктам</li>
                        <li>• Антикоррозийная защита</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Применение:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Магистральные трубопроводы</li>
                        <li>• Нефтеперерабатывающие заводы</li>
                        <li>• Газоперекачивающие станции</li>
                        <li>• Морские платформы</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary">API 6D</Badge>
                    <Badge variant="secondary">ГОСТ 9544</Badge>
                    <Badge variant="default">Износостойкость</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Химическая */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                    <Icon name="Beaker" className="h-10 w-10 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Химическая арматура</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Специализированная арматура для химической промышленности с высокой стойкостью к химически активным средам
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Характеристики:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Химическая стойкость</li>
                        <li>• Специальные уплотнения</li>
                        <li>• Давление до 25 МПа</li>
                        <li>• Температуры: -40°C до +400°C</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Применение:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Химические заводы</li>
                        <li>• Производство удобрений</li>
                        <li>• Фармацевтическая промышленность</li>
                        <li>• Системы водоподготовки</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary">ГОСТ 12815</Badge>
                    <Badge variant="secondary">DIN 3840</Badge>
                    <Badge variant="default">Коррозионная стойкость</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section id="production" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-grid-pattern bg-grid-gray-900"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 shadow-lg"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 drop-shadow-sm">
              Производство
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Современное высокотехнологичное производство с полным циклом изготовления промышленной арматуры
            </p>
          </div>

          {/* Main production facility showcase */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="relative h-96">
                <img 
                  src="/img/e53d8208-db8c-4d3e-96ba-310ead3a0f00.jpg" 
                  alt="Производственный цех с современным оборудованием" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Высокотехнологичное производство
                    </h3>
                    <p className="text-gray-700">
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
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                      <h5 className="font-semibold mb-2 text-gray-900">Оборудование:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Токарные станки с ЧПУ</li>
                        <li>• Фрезерные центры</li>
                        <li>• Шлифовальные станки</li>
                        <li>• Координатно-расточные</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-gray-900">Возможности:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
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
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                      <h5 className="font-semibold mb-2 text-gray-900">Номенклатура:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Задвижки клиновые</li>
                        <li>• Вентили запорные</li>
                        <li>• Краны шаровые</li>
                        <li>• Обратные клапаны</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-gray-900">Материалы:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
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
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Производственный процесс
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl">
                  <Icon name="FileText" className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Проектирование</h4>
                <p className="text-sm text-gray-600">
                  Разработка технической документации и 3D-моделирование
                </p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl">
                  <Icon name="Cog" className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Изготовление</h4>
                <p className="text-sm text-gray-600">
                  Механическая обработка на станках с ЧПУ и специальном оборудовании
                </p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl">
                  <Icon name="Search" className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Контроль</h4>
                <p className="text-sm text-gray-600">
                  Многоступенчатый контроль качества и испытания готовой продукции
                </p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl">
                  <Icon name="Package" className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Упаковка</h4>
                <p className="text-sm text-gray-600">
                  Специальная упаковка и подготовка к отгрузке с сопроводительной документацией
                </p>
              </div>
            </div>
          </div>

          {/* Production statistics */}
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">20+</h4>
              <p className="text-gray-600">лет производственного опыта</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">50+</h4>
              <p className="text-gray-600">единиц современного оборудования</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">150+</h4>
              <p className="text-gray-600">квалифицированных специалистов</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">5000+</h4>
              <p className="text-gray-600">изделий в год</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Качество</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Строгий контроль качества на всех этапах производства
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Сертификаты и стандарты
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-600" />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-600" />
                  <span>ГОСТ Р 52720-2007</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-600" />
                  <span>РД 26-07-23-99</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-600" />
                  <span>ASME B16.34</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Контроль качества
              </h4>
              <p className="text-gray-600 mb-6">
                Каждое изделие проходит многоступенчатый контроль качества,
                включая:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
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
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный цикл услуг от проектирования до поставки
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
              <CardHeader>
                <Icon name="PenTool" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Проектирование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Разработка технических решений под конкретные задачи клиента
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
              <CardHeader>
                <Icon name="Cog" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Производство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Изготовление арматуры любой сложности на современном
                  оборудовании
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
              <CardHeader>
                <Icon name="Truck" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Поставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Организация логистики и своевременная поставка продукции
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section id="geography" className="py-20 bg-gradient-to-br from-blue-900 via-slate-800 to-indigo-900 relative overflow-hidden">
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

          {/* Key regions */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Russia regions */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="Flag" className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Российская Федерация</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Ключевые регионы:</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-center">
                      <Icon name="MapPin" className="h-4 w-4 text-blue-400 mr-2" />
                      Центральный ФО
                    </li>
                    <li className="flex items-center">
                      <Icon name="MapPin" className="h-4 w-4 text-blue-400 mr-2" />
                      Приволжский ФО
                    </li>
                    <li className="flex items-center">
                      <Icon name="MapPin" className="h-4 w-4 text-blue-400 mr-2" />
                      Уральский ФО
                    </li>
                    <li className="flex items-center">
                      <Icon name="MapPin" className="h-4 w-4 text-blue-400 mr-2" />
                      Сибирский ФО
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Отрасли:</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-center">
                      <Icon name="Zap" className="h-4 w-4 text-green-400 mr-2" />
                      Атомная энергетика
                    </li>
                    <li className="flex items-center">
                      <Icon name="Fuel" className="h-4 w-4 text-orange-400 mr-2" />
                      Нефтегазовый комплекс
                    </li>
                    <li className="flex items-center">
                      <Icon name="Beaker" className="h-4 w-4 text-purple-400 mr-2" />
                      Химическая промышленность
                    </li>
                    <li className="flex items-center">
                      <Icon name="Droplets" className="h-4 w-4 text-blue-400 mr-2" />
                      Водоснабжение
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CIS countries */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="Globe2" className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Страны СНГ</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-green-300 mb-3">Экспортные направления:</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-center">
                      <Icon name="MapPin" className="h-4 w-4 text-green-400 mr-2" />
                      Беларусь
                    </li>
                    <li className="flex items-center">
                      <Icon name="MapPin" className="h-4 w-4 text-green-400 mr-2" />
                      Казахстан
                    </li>
                    <li className="flex items-center">
                      <Icon name="MapPin" className="h-4 w-4 text-green-400 mr-2" />
                      Узбекистан
                    </li>
                    <li className="flex items-center">
                      <Icon name="MapPin" className="h-4 w-4 text-green-400 mr-2" />
                      Азербайджан
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-300 mb-3">Проекты:</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-center">
                      <Icon name="Building" className="h-4 w-4 text-yellow-400 mr-2" />
                      Нефтепереработка
                    </li>
                    <li className="flex items-center">
                      <Icon name="Zap" className="h-4 w-4 text-blue-400 mr-2" />
                      Энергетика
                    </li>
                    <li className="flex items-center">
                      <Icon name="Droplets" className="h-4 w-4 text-cyan-400 mr-2" />
                      Водные ресурсы
                    </li>
                    <li className="flex items-center">
                      <Icon name="Factory" className="h-4 w-4 text-gray-400 mr-2" />
                      Промышленность
                    </li>
                  </ul>
                </div>
              </div>
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
      <section id="careers" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Карьера</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы ищем талантливых специалистов, готовых развиваться вместе с нами. 
              Предлагаем стабильную работу, конкурентную зарплату и возможности профессионального роста.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Icon name="TrendingUp" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Карьерный рост</h3>
              <p className="text-gray-600 text-sm">Четкие перспективы развития и продвижения</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Icon name="DollarSign" className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Достойная оплата</h3>
              <p className="text-gray-600 text-sm">Конкурентная зарплата и премии</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Icon name="GraduationCap" className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Обучение</h3>
              <p className="text-gray-600 text-sm">Повышение квалификации за счет компании</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Icon name="Shield" className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Социальный пакет</h3>
              <p className="text-gray-600 text-sm">ДМС, отпуск, льготы сотрудникам</p>
            </div>
          </div>

          {/* Current Openings */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Открытые вакансии</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Users" className="h-6 w-6 text-blue-600" />
                    <span>Менеджер по продажам</span>
                  </CardTitle>
                  <CardDescription>
                    Отдел продаж • Полная занятость • Опыт от 2 лет
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Поиск новых клиентов, ведение переговоров, увеличение объема продаж
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 font-semibold">80-120 тыс. руб.</span>
                    <Button variant="outline" size="sm">
                      Откликнуться
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Calculator" className="h-6 w-6 text-green-600" />
                    <span>Главный бухгалтер</span>
                  </CardTitle>
                  <CardDescription>
                    Финансовый отдел • Полная занятость • Опыт от 5 лет
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Ведение учета, подготовка отчетности, налоговое планирование
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 font-semibold">100-140 тыс. руб.</span>
                    <Button variant="outline" size="sm">
                      Откликнуться
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Monitor" className="h-6 w-6 text-purple-600" />
                    <span>IT-специалист</span>
                  </CardTitle>
                  <CardDescription>
                    IT-отдел • Полная занятость • Опыт от 3 лет
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Поддержка IT-инфраструктуры, администрирование систем
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 font-semibold">90-130 тыс. руб.</span>
                    <Button variant="outline" size="sm">
                      Откликнуться
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Truck" className="h-6 w-6 text-orange-600" />
                    <span>Логист</span>
                  </CardTitle>
                  <CardDescription>
                    Логистический отдел • Полная занятость • Опыт от 1 года
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Организация поставок, контроль доставки, работа с транспортными компаниями
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 font-semibold">60-90 тыс. руб.</span>
                    <Button variant="outline" size="sm">
                      Откликнуться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact for applications */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <Icon name="Mail" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Не нашли подходящую вакансию?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Присылайте свое резюме на указанную почту. Мы рассмотрим ваши навыки и свяжемся, 
              если появится подходящая позиция.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:hr@company.ru" 
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                hr@company.ru
              </a>
              <span className="text-gray-400">•</span>
              <a 
                href="tel:+74951234567" 
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
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
              <Icon name="Settings" className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">ПФ ОКА</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 ПФ ОКА. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;