import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-teal-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="bg-white/10 p-4 rounded-xl w-fit">
              <img 
                src="/lovable-uploads/a88a3ae6-0ff2-4a29-a0fa-88a9a9951ff1.png" 
                alt="ESTHIMA Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm opacity-90 max-w-sm">
              Distribuidora especializada em produtos médicos hospitalares de alta qualidade, 
              com foco em próteses de silicone para todo o Brasil.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(85) 3099-1016</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="text-sm">claudiane@esthima.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div className="text-sm">
                  <p>Av Washington Soares, 855, Salas 311 e 309 - Edson Queiroz</p>
                  <p>Fortaleza - CE, 60811-341</p>
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
                  <p>Sábado: Fechado</p>
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