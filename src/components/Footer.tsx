import { Shield } from "lucide-react";
import Terminal from "./Terminal";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-background">
      <div className="container mx-auto">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-2xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-xl">SecureVPN</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Защищаем вашу приватность с 2020 года
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Возможности</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Цены</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Серверы</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Приложения</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Политика</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Условия</a></li>
            </ul>
          </div>
        </div>
        
          <div className="border-t border-border pt-8 mb-8 text-center text-sm text-muted-foreground">
            <p>© 2024 SecureVPN. Все права защищены.</p>
          </div>
          
          {/* Terminal in footer */}
          <div className="flex justify-end">
            <div className="w-full md:w-[400px]">
              <Terminal />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
