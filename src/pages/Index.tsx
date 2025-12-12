import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [onlinePlayers] = useState(12);
  const { toast } = useToast();

  const serverIP = 'FandsWorld.aternos.me:13012';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP);
    toast({
      title: "IP скопирован!",
      description: "Адрес сервера скопирован в буфер обмена",
    });
  };

  const admins = [
    { name: 'rudo1A', role: 'Гл.Модератор', icon: 'Shield' },
    { name: 'pvek2', role: 'Гл.Куратор', icon: 'Users' },
    { name: 'StiveYT', role: 'Создатель', icon: 'Crown' },
    { name: 'Дима', role: 'Администратор', icon: 'Star' }
  ];

  const rules = [
    { id: '1', title: 'Уважение к игрокам', content: 'Будьте вежливы и уважительны к другим игрокам. Запрещены оскорбления, угрозы и токсичное поведение.' },
    { id: '2', title: 'Запрет на читы и моды', content: 'Использование читов, эксплойтов или модов, дающих преимущество, строго запрещено и карается баном.' },
    { id: '3', title: 'Гриферство запрещено', content: 'Разрушение построек других игроков без разрешения запрещено. Уважайте чужой труд.' },
    { id: '4', title: 'Следуйте указаниям администрации', content: 'Решения модераторов и администраторов окончательны. Не спорьте и выполняйте их указания.' },
    { id: '5', title: 'Без спама', content: 'Не флудите в чате, не рекламируйте сторонние проекты без разрешения администрации.' }
  ];

  const donateTiers = [
    {
      name: 'VIP',
      price: '199₽',
      features: ['Префикс [VIP]', 'Доступ к /kit vip', '3 приватных территории', 'Цветной ник в чате'],
      color: 'from-green-600 to-green-700'
    },
    {
      name: 'PREMIUM',
      price: '399₽',
      features: ['Префикс [PREMIUM]', 'Доступ к /kit premium', '7 приватных территорий', 'Цветной ник + эффекты', '/fly на 1 час/день'],
      color: 'from-blue-600 to-blue-700',
      popular: true
    },
    {
      name: 'LEGEND',
      price: '799₽',
      features: ['Префикс [LEGEND]', 'Доступ к /kit legend', 'Неограниченные территории', 'Уникальные эффекты', 'Постоянный /fly', 'Личный варп'],
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <div className="min-h-screen bg-minecraft-darker">
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative">
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold font-montserrat text-minecraft-green drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                FandsWorld
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-roboto">
                Эпический Minecraft сервер для настоящих героев
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Card className="bg-card/50 backdrop-blur-sm border-minecraft-green/30 hover:border-minecraft-green/60 transition-all">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="relative">
                    <div className="w-4 h-4 bg-minecraft-green rounded-full animate-pulse-slow" />
                    <div className="absolute inset-0 w-4 h-4 bg-minecraft-green rounded-full animate-ping" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Онлайн</p>
                    <p className="text-2xl font-bold text-minecraft-green">{onlinePlayers} игроков</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-2 border-minecraft-green/40 animate-scale-in">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
                  <div className="flex items-center gap-3">
                    <Icon name="Server" className="text-minecraft-green" size={32} />
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">IP адрес сервера</p>
                      <p className="text-xl font-mono font-bold text-foreground">{serverIP}</p>
                    </div>
                  </div>
                  <Button 
                    onClick={copyToClipboard}
                    className="bg-minecraft-green hover:bg-minecraft-green/80 text-black font-bold px-6 transition-all hover:scale-105"
                  >
                    <Icon name="Copy" size={20} className="mr-2" />
                    Скопировать IP
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold px-8 transition-all hover:scale-105"
              >
                <a href="https://t.me/fandsworld" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-minecraft-gold font-montserrat">
              Администрация
            </h2>
            <p className="text-center text-muted-foreground mb-12">Команда, которая делает сервер лучше каждый день</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {admins.map((admin, index) => (
                <Card 
                  key={index}
                  className="bg-card/80 backdrop-blur-sm border-minecraft-gold/30 hover:border-minecraft-gold/60 transition-all hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-20 h-20 rounded-lg bg-gradient-to-br from-minecraft-gold/20 to-minecraft-green/20 flex items-center justify-center">
                      <Icon name={admin.icon as any} size={40} className="text-minecraft-gold" />
                    </div>
                    <CardTitle className="text-xl font-montserrat">{admin.name}</CardTitle>
                    <CardDescription className="text-minecraft-gold font-medium">{admin.role}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-minecraft-dark/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-minecraft-green font-montserrat">
              Правила сервера
            </h2>
            <p className="text-center text-muted-foreground mb-12">Соблюдай правила и наслаждайся игрой!</p>
            
            <Accordion type="single" collapsible className="space-y-4">
              {rules.map((rule) => (
                <AccordionItem 
                  key={rule.id} 
                  value={rule.id}
                  className="bg-card/80 backdrop-blur-sm border border-minecraft-green/30 rounded-lg px-6 hover:border-minecraft-green/60 transition-all"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="bg-minecraft-green/20 text-minecraft-green border-minecraft-green/50">
                        {rule.id}
                      </Badge>
                      <span className="font-semibold text-lg">{rule.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    {rule.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-minecraft-gold font-montserrat">
              Донат-привилегии
            </h2>
            <p className="text-center text-muted-foreground mb-12">Поддержи сервер и получи эксклюзивные возможности!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {donateTiers.map((tier, index) => (
                <Card 
                  key={index}
                  className={`relative overflow-hidden backdrop-blur-sm transition-all hover:scale-105 ${
                    tier.popular ? 'border-2 border-minecraft-gold shadow-[0_0_30px_rgba(245,158,11,0.3)]' : 'border border-minecraft-green/30'
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tier.popular && (
                    <div className="absolute top-0 right-0 bg-minecraft-gold text-black px-3 py-1 text-sm font-bold rounded-bl-lg">
                      ПОПУЛЯРНЫЙ
                    </div>
                  )}
                  <CardHeader className={`bg-gradient-to-br ${tier.color} text-white`}>
                    <CardTitle className="text-2xl font-montserrat">{tier.name}</CardTitle>
                    <CardDescription className="text-white/90 text-3xl font-bold mt-2">{tier.price}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 bg-card/80">
                    <ul className="space-y-3">
                      {tier.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-minecraft-green flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-6 bg-minecraft-green hover:bg-minecraft-green/80 text-black font-bold"
                      size="lg"
                    >
                      Приобрести
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 px-4 bg-minecraft-dark/80 border-t border-minecraft-green/20">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold text-minecraft-green font-montserrat">FandsWorld</h3>
            <p className="text-muted-foreground">Эпический Minecraft сервер</p>
            <div className="flex gap-4 justify-center">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://t.me/fandsworld" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={24} />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 FandsWorld. Все права защищены.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
