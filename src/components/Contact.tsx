import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const Contact = () => {
  const contacts = [
    {
      icon: 'MapPin',
      title: 'Адрес',
      details: ['г. Москва, ул. Космонавтов, д. 15', 'БЦ "Орбита", офис 301']
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      details: ['+7 (495) 123-45-67', '+7 (800) 555-12-34']
    },
    {
      icon: 'Mail',
      title: 'Email',
      details: ['info@space-tech.ru', 'sales@space-tech.ru']
    },
    {
      icon: 'Clock',
      title: 'Время работы',
      details: ['Пн-Пт: 9:00 - 18:00', 'Сб-Вс: выходные']
    }
  ]

  return (
    <div className="container mx-auto px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Контакты
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Свяжитесь с нами для обсуждения вашего проекта или получения консультации 
            по нашим технологическим решениям
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <Card key={index} className="border-0 bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={contact.icon} className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {contact.title}
                </h4>
                <div className="space-y-1">
                  {contact.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Готовы обсудить ваш проект?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Наши специалисты помогут подобрать оптимальное решение для ваших задач 
              и ответят на все вопросы о нашем оборудовании
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Позвонить
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="Mail" className="mr-2 h-5 w-5" />
                Написать письмо
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact