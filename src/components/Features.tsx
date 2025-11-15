import { Card } from "@/components/ui/card";
import { Shield, Zap, Lock, Eye, Server, Wifi } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Военная защита",
    description: "Шифрование банковского уровня защищает ваши данные от любых угроз",
  },
  {
    icon: Zap,
    title: "Молниеносная скорость",
    description: "Оптимизированные серверы обеспечивают максимальную скорость без задержек",
  },
  {
    icon: Lock,
    title: "Нулевое логирование",
    description: "Мы не храним логи вашей активности. Ваша приватность гарантирована",
  },
  {
    icon: Eye,
    title: "Защита от слежки",
    description: "Скрываем ваш реальный IP-адрес от рекламодателей и трекеров",
  },
  {
    icon: Server,
    title: "100+ серверов",
    description: "Глобальная сеть серверов в 50+ странах для стабильного подключения",
  },
  {
    icon: Wifi,
    title: "Безопасный Wi-Fi",
    description: "Защита в публичных сетях Wi-Fi от хакеров и кражи данных",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-muted-foreground">
            Передовые технологии для вашей безопасности и комфорта
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-mint group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
