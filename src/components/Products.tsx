import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import Icon from '@/components/ui/icon'

interface Product {
  id: number
  title: string
  techSpec: string
  classCode: string
  description: string
  characteristics: string[]
  applications: string[]
}

const Products = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const products: Product[] = [
    {
      id: 1,
      title: "Клапаны предохранительные для АЭС",
      techSpec: "ТУ 3742-002-57180370-2019",
      classCode: "Класс: ПКМ",
      description: "Специализированные предохранительные клапаны для атомных электростанций, обеспечивающие безопасность реакторных установок.",
      characteristics: [
        "Рабочая температура до 350°C",
        "Давление срабатывания до 180 кгс/см²",
        "Класс безопасности ПКМ",
        "Сейсмостойкость 9 баллов"
      ],
      applications: [
        "Первый контур реакторных установок",
        "Системы аварийного охлаждения",
        "Парогенераторы АЭС"
      ]
    },
    {
      id: 2,
      title: "Клапаны сальниковые «КИП»",
      techSpec: "ТУ 3742-001-57180370-2019",
      classCode: "Класс: КЗА",
      description: "Высокоточные сальниковые клапаны для систем контроля и измерительных приборов.",
      characteristics: [
        "Герметичность класса А по ГОСТ",
        "Рабочая температура -40...+200°C",
        "Давление до 40 МПа",
        "Высокая точность регулирования"
      ],
      applications: [
        "Системы КИПиА",
        "Измерительные линии",
        "Аналитическое оборудование"
      ]
    },
    {
      id: 3,
      title: "Арматура специализации",
      techSpec: "ТУ 3742-003-57180370-2018",
      classCode: "Класс: —",
      description: "Специализированная трубопроводная арматура для уникальных технологических процессов.",
      characteristics: [
        "Индивидуальное проектирование",
        "Нестандартные условия эксплуатации",
        "Особые требования к материалам",
        "Расширенные испытания"
      ],
      applications: [
        "Опытные установки",
        "Исследовательские комплексы",
        "Специальные технологии"
      ]
    },
    {
      id: 4,
      title: "Клапаны предохранительные",
      techSpec: "ТУ 3742-004-57180370-2010",
      classCode: "Класс: ПКП",
      description: "Стандартные предохранительные клапаны для промышленных систем различного назначения.",
      characteristics: [
        "Давление до 25 МПа",
        "Диаметр до DN 300",
        "Различные исполнения корпуса",
        "Сертификация по ТР ТС"
      ],
      applications: [
        "Паровые котлы",
        "Компрессорные станции",
        "Технологические трубопроводы"
      ]
    },
    {
      id: 5,
      title: "Регулятор давления «после себя»",
      techSpec: "ТУ 3742-022-57180370-2016",
      classCode: "Класс: —",
      description: "Автоматические регуляторы давления для поддержания стабильного давления в системе.",
      characteristics: [
        "Точность регулирования ±2%",
        "Быстродействие <3 сек",
        "Самодействующий принцип",
        "Взрывозащищенное исполнение"
      ],
      applications: [
        "Газовые сети",
        "Технологические линии",
        "Системы подготовки газа"
      ]
    },
    {
      id: 6,
      title: "Клапаны силь-фонные запорные",
      techSpec: "ТУ 3742-005-57180370-2005",
      classCode: "К30 0020, К30 0050, К30 0050, К30 0520, К30 0247, К30 0249",
      description: "Запорные клапаны с сильфонным уплотнением штока для агрессивных и токсичных сред.",
      characteristics: [
        "Герметичность класса А",
        "Коррозионная стойкость",
        "Температура до 400°C",
        "Сильфонное уплотнение"
      ],
      applications: [
        "Химическая промышленность",
        "Нефтехимия",
        "Атомная энергетика"
      ]
    },
    {
      id: 7,
      title: "Клапаны сильфонные запорные «КИП» для АЭС",
      techSpec: "ТУ 3742-009-57180370-2008",
      classCode: "К30 0524, К30 0524",
      description: "Специальные сильфонные клапаны для измерительных систем атомных электростанций.",
      characteristics: [
        "Класс безопасности 2НС",
        "Сейсмостойкость",
        "Радиационная стойкость",
        "Повышенная надежность"
      ],
      applications: [
        "КИП АЭС",
        "Системы контроля реактора",
        "Измерительные петли"
      ]
    },
    {
      id: 8,
      title: "Клапаны сильфонные запорные для АЭС",
      techSpec: "ТУ 3742-010-57180370-2008",
      classCode: "К30 0524, К30 0524, К50 0522",
      description: "Основные запорные клапаны с сильфонным уплотнением для систем АЭС.",
      characteristics: [
        "Класс безопасности НС",
        "Герметичность А и АА",
        "Ресурс 10000 циклов",
        "Контроль герметичности"
      ],
      applications: [
        "Главные циркуляционные петли",
        "Системы безопасности",
        "Вспомогательные системы АЭС"
      ]
    },
    {
      id: 9,
      title: "Клапаны запорные (корпус из титана) для АЭС",
      techSpec: "ТУ 3742-016-57180370-2021",
      classCode: "КЗТ 0508, КЗТ 0520",
      description: "Уникальные запорные клапаны с корпусом из титана для особых условий эксплуатации на АЭС.",
      characteristics: [
        "Корпус из титанового сплава",
        "Коррозионная стойкость",
        "Малый вес конструкции",
        "Длительный срок службы"
      ],
      applications: [
        "Системы с морской водой",
        "Коррозионно-активные среды",
        "Системы охлаждения АЭС"
      ]
    },
    {
      id: 10,
      title: "Клапаны обратные",
      techSpec: "ТУ 3742-014-57180370-2017",
      classCode: "Класс: —",
      description: "Обратные клапаны для предотвращения обратного потока рабочей среды в трубопроводах.",
      characteristics: [
        "Низкое гидравлическое сопротивление",
        "Надежное закрытие",
        "Различные типы затворов",
        "Диаметры DN 15-500"
      ],
      applications: [
        "Насосные станции",
        "Компрессорное оборудование",
        "Технологические трубопроводы"
      ]
    },
    {
      id: 11,
      title: "Клапаны сальниковые запорные",
      techSpec: "ТУ 3742-017-57180370-2016",
      classCode: "Класс: —",
      description: "Традиционные сальниковые запорные клапаны для общепромышленного применения.",
      characteristics: [
        "Сальниковое уплотнение штока",
        "Простая конструкция",
        "Низкая стоимость",
        "Широкий типоряд"
      ],
      applications: [
        "Общая промышленность",
        "Коммунальное хозяйство",
        "Строительство"
      ]
    },
    {
      id: 12,
      title: "Клапаны распределительные",
      techSpec: "ТУ 3742-002-57180370-2004",
      classCode: "Класс: КТХ",
      description: "Многоходовые распределительные клапаны для переключения потоков рабочих сред.",
      characteristics: [
        "Многоходовые схемы",
        "Быстрое переключение",
        "Минимальные утечки",
        "Автоматизированное управление"
      ],
      applications: [
        "Системы дозирования",
        "Аналитическое оборудование",
        "Переключение потоков"
      ]
    },
    {
      id: 13,
      title: "Клапаны сильфонные регулирующие",
      techSpec: "ТУ 3742-019-57180370-2017",
      classCode: "Класс: —",
      description: "Регулирующие клапаны с сильфонным уплотнением для точного управления потоком.",
      characteristics: [
        "Плавное регулирование",
        "Высокая герметичность",
        "Линейная характеристика",
        "Широкий диапазон Kv"
      ],
      applications: [
        "Системы автоматического регулирования",
        "Точные дозирующие системы",
        "Лабораторное оборудование"
      ]
    }
  ]

  const toggleCard = (cardId: number) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Продукция
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Полный спектр трубопроводной арматуры для критически важных объектов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {products.map((product) => (
              <Collapsible
                key={product.id}
                open={expandedCard === product.id}
                onOpenChange={() => toggleCard(product.id)}
              >
                <CollapsibleTrigger asChild>
                  <Card className="bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-white leading-tight flex-1 mr-4">
                          {product.title}
                        </h3>
                        <Icon 
                          name={expandedCard === product.id ? "ChevronUp" : "ChevronDown"} 
                          className="h-5 w-5 text-white/60 flex-shrink-0 transition-transform" 
                        />
                      </div>
                      <div className="space-y-1 text-sm">
                        <p className="text-blue-200">{product.techSpec}</p>
                        <p className="text-blue-200">{product.classCode}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="mt-2">
                  <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <p className="text-blue-100 leading-relaxed">
                          {product.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-white mb-3">Характеристики:</h4>
                            <ul className="space-y-2">
                              {product.characteristics.map((char, index) => (
                                <li key={index} className="flex items-start text-blue-200 text-sm">
                                  <Icon name="CheckCircle" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                  {char}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-white mb-3">Применение:</h4>
                            <ul className="space-y-2">
                              {product.applications.map((app, index) => (
                                <li key={index} className="flex items-start text-blue-200 text-sm">
                                  <Icon name="Target" className="h-4 w-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                                  {app}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products