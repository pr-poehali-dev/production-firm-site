import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

const About = () => {
  const features = [
    {
      icon: 'Zap',
      title: 'Инновации',
      description: 'Передовые технологии и собственная R&D лаборатория'
    },
    {
      icon: 'Shield',
      title: 'Качество',
      description: 'Соответствие международным стандартам ISO 9001'
    },
    {
      icon: 'Users',
      title: 'Команда',
      description: 'Высококвалифицированные специалисты с многолетним опытом'
    },
    {
      icon: 'Globe',
      title: 'География',
      description: 'Поставки оборудования в 15 стран мира'
    }
  ]

  return (
    <div className="container mx-auto px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            О компании
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            НИИ "Космические Технологии" — ведущий разработчик и производитель 
            высокотехнологичного оборудования для критически важных отраслей промышленности
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Наша миссия
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Создаем инновационные решения, которые повышают эффективность 
              и безопасность промышленных процессов. Наши технологии помогают 
              клиентам достигать выдающихся результатов.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Опыт работы в космической отрасли позволяет нам применять самые 
              передовые технологии в земных условиях, обеспечивая непревзойденное 
              качество и надежность.
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-2xl p-8">
            <h4 className="text-xl font-semibold text-foreground mb-6">
              Ключевые показатели
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Год основания</span>
                <span className="font-semibold text-foreground">1999</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Сотрудники</span>
                <span className="font-semibold text-foreground">150+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Производственные площади</span>
                <span className="font-semibold text-foreground">5000 м²</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Экспорт продукции</span>
                <span className="font-semibold text-foreground">40%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-card hover:bg-muted/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About