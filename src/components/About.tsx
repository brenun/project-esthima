import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "1000+", label: "Clientes Atendidos" },
    { icon: Award, number: "15+", label: "Anos de Experiência" },
    { icon: Globe, number: "50+", label: "Cidades Atendidas" },
    { icon: Clock, number: "24/7", label: "Suporte Disponível" }
  ];

  const values = [
    {
      title: "Qualidade",
      description: "Trabalhamos apenas com produtos certificados e de marcas reconhecidas mundialmente."
    },
    {
      title: "Confiança",
      description: "Nossa experiência no mercado garante segurança e tranquilidade aos nossos clientes."
    },
    {
      title: "Inovação",
      description: "Sempre atualizados com as mais modernas tecnologias em produtos médicos."
    },
    {
      title: "Suporte",
      description: "Oferecemos suporte completo antes, durante e após a aquisição dos produtos."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Sobre a ESTHIMA
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Distribuidora</span> de Confiança
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A ESTHIMA Produtos Médicos Hospitalares é uma empresa especializada na distribuição 
            de produtos médicos de alta qualidade, com foco em próteses de silicone e 
            equipamentos hospitalares para profissionais de saúde em todo o Brasil.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Nossa <span className="text-primary">Missão</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Fornecer produtos médicos de excelência, contribuindo para que profissionais 
              de saúde ofereçam os melhores tratamentos e resultados aos seus pacientes. 
              Acreditamos que qualidade e segurança são fundamentais na área médica.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-primary rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-background rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Produtos Certificados</h4>
                  <p className="text-muted-foreground">Todos os nossos produtos possuem certificações nacionais e internacionais.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-background rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Entrega Rápida</h4>
                  <p className="text-muted-foreground">Logística eficiente para atender todo o território nacional.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-background rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Suporte Técnico</h4>
                  <p className="text-muted-foreground">Equipe especializada para esclarecer dúvidas e oferecer suporte.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
              <h4 className="text-2xl font-bold mb-6">Nossos Valores</h4>
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="space-y-2">
                    <h5 className="font-semibold">{value.title}</h5>
                    <p className="text-sm opacity-90">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;