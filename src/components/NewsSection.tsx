import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        
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
  );
};

export default NewsSection;