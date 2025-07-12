import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-teal-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/1840b51e-084a-40d0-abba-96d1ebdf3e34.png" 
              alt="ESTHIMA Logo" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-sm opacity-90">
              Distribuidora especializada em produtos médicos hospitalares de alta qualidade, 
              com foco em próteses de silicone para todo o Brasil.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contato@esthima.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div className="text-sm">
                  <p>Rua das Flores, 123</p>
                  <p>São Paulo - SP, 01234-567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Horário de Funcionamento</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4" />
                <div className="text-sm">
                  <p>Segunda à Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Nossos Produtos</h3>
            <ul className="space-y-2 text-sm">
              <li>Próteses de Silicone</li>
              <li>Produtos GC Aesthetics</li>
              <li>Equipamentos Médicos</li>
              <li>Produtos Hospitalares</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-75">
              © 2024 ESTHIMA Produtos Médicos Hospitalares Ltda. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;