import React from "react";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
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
        <div className="relative mb-8">
          <img 
            src="https://cdn.poehali.dev/files/d9bc49c4-dde1-468a-87a4-3375dfd7f59c.png" 
            alt="Предприятие ОКА" 
            className="h-16 mx-auto drop-shadow-lg animate-fade-in"
          />
        </div>
        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-95 leading-relaxed drop-shadow-md">
          Разработка и изготовление нестандартных элементов трубопроводов для
          атомных станций, военной промышленности, нефтяной, газовой и
          химической отраслей
        </p>

      </div>
    </section>
  );
};

export default HeroSection;