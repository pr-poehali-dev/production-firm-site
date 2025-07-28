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
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
              >
                О компании
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
              >
                Продукция
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
                href="#careers"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
              >
                Вакансии
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

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              О компании
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Лидер в области производства специализированной трубопроводной
              арматуры
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
              <CardHeader>
                <Icon name="Award" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Опыт работы</CardTitle>
                <CardDescription>
                  Более 20 лет на рынке промышленного оборудования
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
              <CardHeader>
                <Icon name="Shield" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Сертификация</CardTitle>
                <CardDescription>
                  Полное соответствие ГОСТ и международным стандартам
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
              <CardHeader>
                <Icon name="Users" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Команда</CardTitle>
                <CardDescription>
                  Высококвалифицированные специалисты и инженеры
                </CardDescription>
              </CardHeader>
            </Card>
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

      {/* Careers Section */}
      <section id="careers" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Вакансии</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Присоединяйтесь к нашей команде профессионалов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Briefcase" className="h-6 w-6 text-blue-600" />
                  <span>Инженер-конструктор</span>
                </CardTitle>
                <CardDescription>
                  Отдел разработки • Полная занятость
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Проектирование трубопроводной арматуры, работа с CAD-системами
                </p>
                <Button variant="outline" size="sm">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="HardHat" className="h-6 w-6 text-blue-600" />
                  <span>Технолог производства</span>
                </CardTitle>
                <CardDescription>
                  Производственный отдел • Полная занятость
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Разработка технологических процессов, контроль качества
                </p>
                <Button variant="outline" size="sm">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
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