import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white/5 p-2 rounded-xl">
              <img 
                src="/lovable-uploads/1840b51e-084a-40d0-abba-96d1ebdf3e34.png" 
                alt="ESTHIMA Logo" 
                className="h-16 w-auto transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>(11) 9999-9999</span>
            </div>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Entre em Contato
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;