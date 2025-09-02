import React from 'react'
import Icon from '@/components/ui/icon'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/a3990dbc-3b26-4517-9596-4282f0bdf140.png" 
                  alt="НИИ Космические Технологии" 
                  className="h-8 w-8 object-contain"
                />
                <span className="text-xl font-bold text-foreground">НИИ Космические Технологии</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-md">
                Создаем инновационные решения для промышленности на основе 
                космических технологий и многолетнего опыта разработки 
                высокотехнологичного оборудования.
              </p>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://vk.com/pfoka" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                >
                  <img 
                    src="https://cdn.poehali.dev/files/2fe12838-4d5b-487e-8085-4f579e360be4.png" 
                    alt="ВКонтакте" 
                    className="h-5 w-5 object-contain"
                  />
                </a>
                <a 
                  href="https://t.me/pfoka" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                >
                  <Icon name="Send" className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Продукция</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    Каталитические реакторы
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    Системы очистки газов
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    Теплообменное оборудование
                  </span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Icon name="MapPin" className="h-4 w-4 text-muted-foreground mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    г. Москва, ул. Космонавтов, д. 15
                  </span>
                </li>
                <li className="flex items-start">
                  <Icon name="Phone" className="h-4 w-4 text-muted-foreground mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    +7 (495) 123-45-67
                  </span>
                </li>
                <li className="flex items-start">
                  <Icon name="Mail" className="h-4 w-4 text-muted-foreground mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    info@space-tech.ru
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm mb-4 md:mb-0">
                © {currentYear} НИИ Космические Технологии. Все права защищены.
              </p>
              <div className="flex items-center space-x-6">
                <span className="text-muted-foreground text-sm hover:text-foreground transition-colors cursor-pointer">
                  Политика конфиденциальности
                </span>
                <span className="text-muted-foreground text-sm hover:text-foreground transition-colors cursor-pointer">
                  Пользовательское соглашение
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer