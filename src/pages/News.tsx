import React from "react";
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
import { Link } from "react-router-dom";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Запуск нового производственного комплекса",
      description: "Открыт новый высокотехнологичный производственный комплекс для изготовления трубопроводной арматуры повышенной надежности. Инвестиции составили более 500 млн рублей, создано 150 новых рабочих мест.",
      image: "/img/70995ca0-b3a0-4761-a4e6-be3dc074c550.jpg",
      category: "Производство",
      date: "15 июля 2024",
      categoryColor: "bg-blue-600",
      featured: true
    },
    {
      id: 2,
      title: "Получена сертификация для атомной энергетики",
      description: "Наша продукция успешно прошла сертификацию для использования на объектах атомной энергетики. Получены все необходимые разрешения для работы с АЭС нового поколения.",
      image: "/img/18138835-463f-44f4-9045-71f3fce4ad92.jpg",
      category: "Сертификация",
      date: "12 июля 2024",
      categoryColor: "bg-green-600"
    },
    {
      id: 3,
      title: "Крупный контракт с ПАО \"Газпром\"",
      description: "Подписан долгосрочный контракт на поставку специализированной арматуры для магистральных газопроводов. Объем контракта составляет более 2 млрд рублей на 3 года.",
      image: "/img/7ef37a32-45d9-455f-9a9c-b9a58d6de416.jpg",
      category: "Контракт",
      date: "8 июля 2024",
      categoryColor: "bg-orange-600"
    },
    {
      id: 4,
      title: "Внедрение новых технологий контроля качества",
      description: "На производстве внедрены инновационные системы автоматизированного контроля качества с использованием искусственного интеллекта и компьютерного зрения.",
      image: "/img/9889157b-f7fc-4cb2-95d9-c26f18b85d36.jpg",
      category: "Технологии",
      date: "5 июля 2024",
      categoryColor: "bg-purple-600"
    },
    {
      id: 5,
      title: "Участие в выставке \"Нефтегаз-2024\"",
      description: "Успешное участие в крупнейшей отраслевой выставке \"Нефтегаз-2024\". Представлены новые разработки в области трубопроводной арматуры для нефтегазовой отрасли.",
      image: "/img/70995ca0-b3a0-4761-a4e6-be3dc074c550.jpg",
      category: "Выставка",
      date: "28 июня 2024",
      categoryColor: "bg-red-600"
    },
    {
      id: 6,
      title: "Награда \"Лучший поставщик года\"",
      description: "Компания получила престижную награду \"Лучший поставщик года\" от ведущих предприятий атомной энергетики за высокое качество продукции и надежность поставок.",
      image: "/img/18138835-463f-44f4-9045-71f3fce4ad92.jpg",
      category: "Награда",
      date: "20 июня 2024",
      categoryColor: "bg-yellow-600"
    },
    {
      id: 7,
      title: "Поставки в страны СНГ увеличены на 40%",
      description: "Значительный рост экспортных поставок в страны СНГ. Подписаны новые контракты с предприятиями Казахстана, Беларуси и Армении на поставку промышленной арматуры.",
      image: "/img/7ef37a32-45d9-455f-9a9c-b9a58d6de416.jpg",
      category: "Экспорт",
      date: "15 июня 2024",
      categoryColor: "bg-teal-600"
    },
    {
      id: 8,
      title: "Модернизация производственных линий",
      description: "Завершена масштабная модернизация производственных линий. Установлено новое высокоточное оборудование с ЧПУ, что позволило повысить производительность на 30%.",
      image: "/img/9889157b-f7fc-4cb2-95d9-c26f18b85d36.jpg",
      category: "Модернизация",
      date: "10 июня 2024",
      categoryColor: "bg-indigo-600"
    },
    {
      id: 9,
      title: "Расширение ассортимента продукции",
      description: "В линейку продукции добавлены новые виды арматуры для химической промышленности. Разработаны специальные решения для работы в агрессивных средах.",
      image: "/img/70995ca0-b3a0-4761-a4e6-be3dc074c550.jpg",
      category: "Продукция",
      date: "5 июня 2024",
      categoryColor: "bg-pink-600"
    }
  ];

  const featuredNews = newsItems.find(item => item.featured);
  const otherNews = newsItems.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-white/5 backdrop-blur-sm shadow-sm border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        </div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src="https://cdn.poehali.dev/files/a3990dbc-3b26-4517-9596-4282f0bdf140.png" 
                alt="ПФ ОКА логотип" 
                className="h-14 w-14 object-contain"
              />
              <h1 className="text-3xl font-bold text-white">ПФ ОКА</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-white hover:text-blue-300 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
              >
                Главная
              </Link>
              <a
                href="/#news"
                className="text-white hover:text-blue-300 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
              >
                Новости
              </a>
              <a
                href="/#products"
                className="text-white hover:text-blue-300 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
              >
                Продукция
              </a>
              <a
                href="/#production"
                className="text-white hover:text-blue-300 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
              >
                Производство
              </a>
              <a
                href="/#quality"
                className="text-white hover:text-blue-300 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
              >
                Качество
              </a>
              <a
                href="/#services"
                className="text-white hover:text-blue-300 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
              >
                Услуги
              </a>
              <a
                href="/#geography"
                className="text-white hover:text-blue-300 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
              >
                География
              </a>
              <a
                href="/#contacts"
                className="text-white hover:text-blue-300 transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105"
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Новости и события
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Следите за последними новостями из мира промышленного производства и достижениями нашей компании
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4 text-center">Главная новость</h2>
            </div>
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto">
                  <img 
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className={`${featuredNews.categoryColor} text-white`}>
                      {featuredNews.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-3xl text-white mb-4 leading-tight">
                      {featuredNews.title}
                    </CardTitle>
                    <CardDescription className="text-blue-200 text-lg">
                      {featuredNews.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-blue-100 text-lg leading-relaxed mb-6">
                      {featuredNews.description}
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Icon name="ArrowRight" className="h-4 w-4 mr-2" />
                      Читать полностью
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* All News Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Все новости</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherNews.map((item) => (
              <Card 
                key={item.id}
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden group hover:scale-105"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className={`${item.categoryColor} text-white text-xs`}>
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icon name="ArrowRight" className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <p className="text-blue-300 text-sm">{item.date}</p>
                  </div>
                  <CardTitle className="text-white text-lg mb-3 line-clamp-2 leading-tight">
                    {item.title}
                  </CardTitle>
                  <p className="text-blue-200 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <Button variant="ghost" size="sm" className="text-blue-300 hover:text-white hover:bg-white/10 p-0">
                      Читать далее
                      <Icon name="ArrowRight" className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <Icon name="Bell" className="h-12 w-12 text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Подпишитесь на новости
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Будьте в курсе последних событий и достижений ПФ ОКА. 
              Получайте уведомления о новых проектах и технологических решениях.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Подписаться
              </Button>
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
    </div>
  );
};

export default News;