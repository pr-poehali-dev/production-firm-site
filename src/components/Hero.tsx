import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="container mx-auto px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            🚀 Космические технологии для Земли
          </Badge>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Инновационные
          <span className="text-primary block">решения</span>
          для промышленности
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Разрабатываем и производим высокотехнологичное оборудование 
          для нефтегазовой, химической и космической отраслей
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('products')}
            className="text-lg px-8 py-6"
          >
            Наша продукция
            <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('about')}
            className="text-lg px-8 py-6"
          >
            О компании
            <Icon name="Info" className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">проектов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">патентов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15</div>
            <div className="text-sm text-muted-foreground">стран</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero