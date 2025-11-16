import { Button } from "@/components/ui/button";
import { Shield, Zap, Globe, Server, Cloud } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background with server and clouds */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="relative">
          {/* Central Server */}
          <Server className="w-32 h-32 text-primary animate-pulse" />
          
          {/* Orbiting Clouds */}
          <Cloud 
            className="absolute w-16 h-16 text-primary/60 animate-[spin_20s_linear_infinite]" 
            style={{ top: '-60px', left: '50%', transform: 'translateX(-50%)' }}
          />
          <Cloud 
            className="absolute w-12 h-12 text-primary/60 animate-[spin_25s_linear_infinite_reverse]" 
            style={{ top: '50%', right: '-60px', transform: 'translateY(-50%)' }}
          />
          <Cloud 
            className="absolute w-14 h-14 text-primary/60 animate-[spin_30s_linear_infinite]" 
            style={{ bottom: '-60px', left: '50%', transform: 'translateX(-50%)' }}
          />
          <Cloud 
            className="absolute w-10 h-10 text-primary/60 animate-[spin_22s_linear_infinite_reverse]" 
            style={{ top: '50%', left: '-60px', transform: 'translateY(-50%)' }}
          />
          
          {/* Connection lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 border border-primary/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute w-32 h-32 border border-primary/30 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Защита на военном уровне</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Ваша приватность —{" "}
            <span className="text-primary bg-clip-text">наш приоритет</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Молниеносный и безопасный VPN для защиты вашего интернет-соединения в любой точке мира
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              Начать сейчас
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Узнать больше
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center gap-2 bg-orange/10 backdrop-blur-sm px-4 py-2 rounded-full border border-orange/30">
              <Zap className="w-4 h-4 text-orange" />
              <span className="text-sm text-orange">Стабильное соединение</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-orange/10 backdrop-blur-sm px-4 py-2 rounded-full border border-orange/30">
              <Shield className="w-4 h-4 text-orange" />
              <span className="text-sm text-orange">Шифрование AES-256</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-orange/10 backdrop-blur-sm px-4 py-2 rounded-full border border-orange/30">
              <Globe className="w-4 h-4 text-orange" />
              <span className="text-sm text-orange">100+ серверов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
