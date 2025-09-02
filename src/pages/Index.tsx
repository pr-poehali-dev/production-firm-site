import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import MainSections from "@/components/MainSections";
import Products from "@/components/Products";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Header />
      <HeroSection />
      <NewsSection />
      <MainSections />
      
      <section id="products">
        <Products />
      </section>
    </div>
  );
};

export default Index;