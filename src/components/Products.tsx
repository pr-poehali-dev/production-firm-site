import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import Icon from '@/components/ui/icon'

interface Product {
  id: number
  title: string
  description: string
  fullDescription: string
  image: string
  icon: string
  badges: Array<{
    text: string
    color: string
  }>
  characteristics: string[]
  applications: string[]
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const products: Product[] = [
    {
      id: 1,
      title: "Каталитические реакторы",
      description: "Высокоэффективные каталитические системы для нефтехимической промышленности",
      fullDescription: "Современные каталитические реакторы, разработанные с использованием космических технологий. Обеспечивают максимальную эффективность процессов переработки углеводородов.",
      image: "https://cdn.poehali.dev/files/a3990dbc-3b26-4517-9596-4282f0bdf140.png",
      icon: "Zap",
      badges: [
        { text: "Высокая эффективность", color: "bg-green-500" },
        { text: "Космические технологии", color: "bg-blue-500" }
      ],
      characteristics: [
        "Температура работы до 800°C",
        "Давление до 100 атм",
        "КПД более 95%",
        "Срок службы 15+ лет"
      ],
      applications: [
        "Нефтеперерабатывающие заводы",
        "Химические предприятия",
        "Газоперерабатывающие комплексы"
      ]
    },
    {
      id: 2,
      title: "Системы очистки газов",
      description: "Инновационные системы для очистки промышленных газов от вредных примесей",
      fullDescription: "Передовые системы газоочистки на базе космических разработок. Эффективное удаление токсичных компонентов и защита окружающей среды.",
      image: "https://cdn.poehali.dev/files/a3990dbc-3b26-4517-9596-4282f0bdf140.png",
      icon: "Wind",
      badges: [
        { text: "Экологичность", color: "bg-green-500" },
        { text: "Автоматизация", color: "bg-purple-500" }
      ],
      characteristics: [
        "Степень очистки 99.9%",
        "Производительность до 10000 м³/ч",
        "Низкое энергопотребление",
        "Модульная конструкция"
      ],
      applications: [
        "Металлургические комбинаты",
        "Энергетические станции",
        "Химическая промышленность"
      ]
    },
    {
      id: 3,
      title: "Теплообменное оборудование",
      description: "Высокоэффективные теплообменники для различных промышленных применений",
      fullDescription: "Теплообменное оборудование нового поколения с применением материалов и технологий космической отрасли. Обеспечивает максимальную теплопередачу.",
      image: "https://cdn.poehali.dev/files/a3990dbc-3b26-4517-9596-4282f0bdf140.png",
      icon: "Thermometer",
      badges: [
        { text: "Энергоэффективность", color: "bg-orange-500" },
        { text: "Надежность", color: "bg-blue-500" }
      ],
      characteristics: [
        "Коэффициент теплопередачи до 5000 Вт/м²К",
        "Рабочая температура до 600°C",
        "Коррозионная стойкость",
        "Компактная конструкция"
      ],
      applications: [
        "Нефтегазовая отрасль",
        "Пищевая промышленность",
        "Фармацевтика"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Наша продукция
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Высокотехнологичное оборудование, созданное на основе космических 
            разработок для решения промышленных задач любой сложности
          </p>
        </div>

        <div className="space-y-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-0 bg-card hover:bg-muted/30 transition-all duration-300 cursor-pointer group" onClick={() => setSelectedProduct(product)}>
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                        <Icon name={product.icon} className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {product.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-3xl">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.badges.map((badge, index) => (
                        <Badge key={index} className={`${badge.color} text-white`}>
                          {badge.text}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="ml-8 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon name="ArrowRight" className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={selectedProduct !== null} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl mb-4">
                  <div className="flex items-center">
                    <Icon name={selectedProduct.icon} className="h-8 w-8 text-primary mr-3" />
                    {selectedProduct.title}
                  </div>
                </DialogTitle>
              </DialogHeader>
              
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <img 
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg bg-muted"
                  />
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {selectedProduct.fullDescription}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Характеристики
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.characteristics.map((char, index) => (
                        <li key={index} className="flex items-start">
                          <Icon name="CheckCircle" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Применение
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.applications.map((app, index) => (
                        <li key={index} className="flex items-start">
                          <Icon name="Target" className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    {selectedProduct.badges.map((badge, index) => (
                      <Badge key={index} className={`${badge.color} text-white`}>
                        {badge.text}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Products