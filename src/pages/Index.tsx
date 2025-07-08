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
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn.poehali.dev/files/22c75c8b-ec82-47dc-a5ee-25c1c5743ff5.png"
                alt="ПФ ОКА"
                className="h-10 w-10"
              />
              <h1 className="text-2xl font-bold text-gray-900">ПФ ОКА</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                О компании
              </a>
              <a
                href="#products"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Продукция
              </a>
              <a
                href="#quality"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Качество
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#careers"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Вакансии
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button>Связаться</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">
            Предприятие ОКА
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Разработка и изготовление нестандартных элементов трубопроводов для
            атомных станций, военной промышленности, нефтяной, газовой и
            химической отраслей
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary">
              Каталог продукции
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
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
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Award" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Опыт работы</CardTitle>
                <CardDescription>
                  Более 20 лет на рынке промышленного оборудования
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Shield" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Сертификация</CardTitle>
                <CardDescription>
                  Полное соответствие ГОСТ и международным стандартам
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
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
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Продукция</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр трубопроводной арматуры для критически важных
              объектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Zap" className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Для АЭС</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Арматура для атомных электростанций
                </p>
                <Badge variant="secondary">Высокая надёжность</Badge>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Wrench" className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Военная</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Специализированная арматура для оборонных объектов
                </p>
                <Badge variant="secondary">Секретность</Badge>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Fuel" className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Нефтегаз</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Арматура для нефтяной и газовой промышленности
                </p>
                <Badge variant="secondary">Износостойкость</Badge>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Beaker" className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Химическая</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Арматура для химических производств
                </p>
                <Badge variant="secondary">Коррозионная стойкость</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-20">
        <div className="container mx-auto px-4">
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
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный цикл услуг от проектирования до поставки
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
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
            <Card className="hover:shadow-lg transition-shadow">
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
            <Card className="hover:shadow-lg transition-shadow">
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
      <section id="careers" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Вакансии</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Присоединяйтесь к нашей команде профессионалов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
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
            <Card className="hover:shadow-lg transition-shadow">
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
              <img
                src="https://cdn.poehali.dev/files/22c75c8b-ec82-47dc-a5ee-25c1c5743ff5.png"
                alt="ПФ ОКА"
                className="h-8 w-8"
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

export default Index;
