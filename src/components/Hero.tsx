import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Heart } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Excelência em
                <span className="text-primary block">Próteses de Silicone</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Distribuímos produtos médicos hospitalares de alta qualidade, 
                oferecendo soluções seguras e confiáveis para profissionais 
                de saúde e pacientes em todo o Brasil.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('products')}
                className="group"
              >
                Nossos Produtos
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => scrollToSection('contact')}
              >
                Fale Conosco
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Qualidade</h3>
                <p className="text-sm text-muted-foreground">Produtos certificados</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Experiência</h3>
                <p className="text-sm text-muted-foreground">Anos no mercado</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Cuidado</h3>
                <p className="text-sm text-muted-foreground">Foco no paciente</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-strong p-1">
              <img 
                src="/lovable-uploads/c2d93e25-6233-4041-9fd3-188873bbfbb1.png"
                alt="Próteses de Silicone GC Aesthetics"
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-medium">
              <div className="flex items-center space-x-3">
                <div className="bg-accent-foreground/20 rounded-full p-2">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">GC Aesthetics</p>
                  <p className="text-sm opacity-90">Produtos Certificados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;