import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      details: ["(11) 9999-9999", "(11) 8888-8888"],
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["contato@esthima.com.br", "vendas@esthima.com.br"],
      color: "text-accent"
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: ["Rua das Flores, 123", "São Paulo - SP, 01234-567"],
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Horário",
      details: ["Segunda à Sexta: 8h às 18h", "Sábado: 8h às 12h"],
      color: "text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Entre em Contato
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Fale <span className="text-primary">Conosco</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você. Entre em contato conosco para mais informações 
            sobre nossos produtos ou para tirar suas dúvidas. Nossa equipe especializada está à disposição.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-shadow border-0">
              <CardHeader>
                <div className={`${info.color} bg-current/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                  <info.icon className={`h-8 w-8 ${info.color}`} />
                </div>
                <CardTitle className="text-xl">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">{detail}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
              <p className="text-muted-foreground">
                Preencha o formulário abaixo e entraremos em contato o mais breve possível.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input id="name" placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(11) 99999-9999" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" placeholder="Nome da empresa" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Assunto *</Label>
                <Input id="subject" placeholder="Qual o assunto da sua mensagem?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem *</Label>
                <Textarea 
                  id="message" 
                  placeholder="Descreva sua solicitação ou dúvida..."
                  className="min-h-[120px]"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Localização</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-12 w-12 text-primary mx-auto" />
                    <p className="text-lg font-semibold text-foreground">Nosso Escritório</p>
                    <p className="text-muted-foreground">Rua das Flores, 123</p>
                    <p className="text-muted-foreground">São Paulo - SP, 01234-567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary text-primary-foreground shadow-medium border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Atendimento Especializado</h3>
                <p className="mb-6 opacity-90">
                  Nossa equipe possui profundo conhecimento técnico sobre todos os produtos 
                  que distribuímos. Estamos prontos para oferecer o melhor suporte.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-foreground/20 rounded-full p-2">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>Atendimento telefônico especializado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-foreground/20 rounded-full p-2">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span>Resposta rápida por e-mail</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-foreground/20 rounded-full p-2">
                      <Clock className="h-4 w-4" />
                    </div>
                    <span>Suporte em horário comercial</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;