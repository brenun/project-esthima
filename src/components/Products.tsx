import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Shield, Heart } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Próteses de Silicone Texturizadas",
      description: "Próteses mamárias de alta qualidade com superfície texturizada para melhor integração tecidual.",
      features: ["Certificação CE", "Superfície Texturizada", "Gel Coesivo", "Garantia Vitalícia"],
      category: "Premium"
    },
    {
      title: "Próteses de Silicone Lisas", 
      description: "Próteses com superfície lisa, ideais para casos específicos recomendados pelo cirurgião.",
      features: ["Superfície Lisa", "Alta Durabilidade", "Gel Seguro", "Diversos Volumes"],
      category: "Standard"
    },
    {
      title: "Próteses Anatômicas",
      description: "Formato anatômico que reproduz a forma natural da mama para resultados mais naturais.",
      features: ["Formato Anatômico", "Projeção Natural", "Estabilidade", "Resultado Natural"],
      category: "Anatômica"
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Nossos Produtos
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Próteses de <span className="text-primary">Silicone</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma linha completa de próteses de silicone da renomada marca GC Aesthetics, 
            garantindo qualidade, segurança e os melhores resultados para nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300 border-0">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={index === 0 ? "default" : "secondary"}>
                    {product.category}
                  </Badge>
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Mais Informações
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  GC Aesthetics
                </Badge>
                <h3 className="text-3xl font-bold text-foreground">
                  Parceria com a <span className="text-primary">Líder Mundial</span>
                </h3>
                <p className="text-lg text-muted-foreground">
                  A GC Aesthetics é uma das principais fabricantes mundiais de implantes mamários, 
                  conhecida por sua inovação, qualidade e compromisso com a segurança do paciente.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">Segurança Garantida</h4>
                  <p className="text-sm text-muted-foreground">Certificações internacionais e Garantia Vitalícia</p>
                </div>
                <div className="space-y-2">
                  <div className="bg-accent/10 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold">Resultados Naturais</h4>
                  <p className="text-sm text-muted-foreground">Tecnologia avançada para melhor estética</p>
                </div>
              </div>

              <Button variant="hero" size="lg">
                Conheça Nossos Produtos
              </Button>
            </div>

            <div className="relative">
              <div className="bg-card rounded-2xl shadow-strong p-1">
                <img 
                  src="/lovable-uploads/b59c2d1e-a00f-4ce5-a830-24f09c0d2fcf.png"
                  alt="Linha Completa GC Aesthetics"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;