import { Button } from "@/components/ui/button";
import { Shield, Zap, Globe } from "lucide-react";
import heroImage from "@/assets/hero-vpn.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Secure VPN Network" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Защита на военном уровне</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Ваша приватность —{" "}
            <span className="text-primary bg-clip-text">наш приоритет</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Молниеносный и безопасный VPN для защиты вашего интернет-соединения в любой точке мира
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              Начать сейчас
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Узнать больше
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>Сверхбыстрая скорость</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Шифрование AES-256</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              <span>100+ серверов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
