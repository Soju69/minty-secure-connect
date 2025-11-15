import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Месяц",
    price: "599",
    period: "/мес",
    features: [
      "Безлимитный трафик",
      "100+ серверов",
      "5 устройств",
      "24/7 поддержка",
      "Без логов",
    ],
  },
  {
    name: "Год",
    price: "299",
    period: "/мес",
    popular: true,
    savings: "Экономия 50%",
    features: [
      "Все из месячного плана",
      "Приоритетная поддержка",
      "Dedicated IP опция",
      "Расширенная безопасность",
      "Гарантия возврата 30 дней",
    ],
  },
  {
    name: "2 года",
    price: "199",
    period: "/мес",
    savings: "Экономия 67%",
    features: [
      "Все из годового плана",
      "VIP поддержка",
      "2 Dedicated IP",
      "Премиум безопасность",
      "Гарантия возврата 45 дней",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-24 px-6 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Выберите свой план
          </h2>
          <p className="text-xl text-muted-foreground">
            Защита для всей семьи по доступной цене
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 bg-card border-border transition-all duration-300 relative ${
                plan.popular 
                  ? "border-primary shadow-glow-mint scale-105 md:scale-110" 
                  : "hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Популярный
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                {plan.savings && (
                  <div className="text-primary text-sm font-semibold mb-2">
                    {plan.savings}
                  </div>
                )}
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">₽{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                className="w-full"
                size="lg"
              >
                Выбрать план
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
