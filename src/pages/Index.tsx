import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [onlinePlayers] = useState(() => Math.floor(Math.random() * 5));
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
    { name: 'Gl_Admin', role: 'Ст.Админ', icon: 'ShieldCheck' },
    { name: 'Дима', role: 'Администратор', icon: 'Star' }
  ];

  const rules = [
    { 
      id: '1', 
      title: '§1 Общие положения', 
      content: '1.1 Некоторые пункты правил могут действовать не только на сервере, но распространяются и на личные сообщения.\n1.2 Некоторые пункты могут подразумевать в себе выдачу наказаний за завуалированное нарушение.\n1.3 Не пытайтесь использовать неточности в правилах как основание для обжалования вынесенного наказания.\n1.4 Незнание правил не освобождает Вас от ответственности.\n1.5 Администрация оставляет за собой право выходить за рамки указанных в данном своде правил в пределах разумного.\n1.6 При подаче апелляции администрация оставляет за собой право увеличить наказание, если ваша заявка была некорректной.' 
    },
    { 
      id: '2', 
      title: '§2 Общий свод правил', 
      content: '2.1 Запрещено использование твинков в корыстных целях. Перманентная блокировка твинка\n2.2 Запрещено злоупотребление исключениями в правилах. Удвоенное наказание по пункту правила\n2.3 Запрещён обход бана/мута. Удвоенное наказание от первоначального срока\n2.4 Запрещена игра с читами на AsterWorld, их реклама. Бан 50 дня\n2.5 Запрещена реклама своих услуг/групп/сайтов и всего подобного в чате, личных сообщениях и тому подобное. Бан 20 дней — Исключение: Участник сам попросил дать ссылку.\n2.6 Запрещено написание некорректных отзывов в системе поддержки. Мут 6 часов\n2.7 Запрещено проявление нацизма в любой его форме. от бана на 2 дня до перманентного бана\n2.8 Запрещено оскорбление родных участников/администрации, а также упоминание их в оскорбительном контексте, в том числе и в личных сообщениях. Бан 10 дней\n2.9 Запрещено использование/распространение дюпов на сервере. Бан 20 дней / Перманентная блокировка\n2.10 Запрещена попытка продажи/передачи аккаунта. Перманентная блокировка' 
    },
    { 
      id: '4', 
      title: '§4 Правила общения в текстовых каналах', 
      content: '4.1 Запрещён флуд. Мут на 2 часа (От 3-х и более сообщений одинаковых по содержанию в течение 3-х минут)\n4.2 Запрещён флуд символами. Мут на 2 часа (~12 и более символов, не имеющих смысловой нагрузки) — Исключение: Смех (до 17-и символов)\n4.3 Запрещён капс. Мут 2 часа (Если в предложении более трёх слов, и 50% из них написаны заглавными буквами)\n4.4 Запрещён флуд эмодзи. Мут 2 часа (От 5-ти эмодзи в одном сообщении, либо от 4-х в разных сообщениях)\n4.5 Запрещён массовый флуд. Мут 3 часа каждому участнику флуда (Отправка ~6-ю и более людьми одинаковых или схожих по смыслу сообщений в одно время) — Исключение: Приветствие.\n4.6 Запрещён засор чата. Мут 4 часа (~8 и более строк текста, не несущего в себе смысловой нагрузки как в одном сообщении, так и в разных)\n4.7 Запрещена организация флуда. Мут 2 часа — Пример: "Кто за Пупсика - пишите + в чат"\n4.8 Запрещена отправка сообщений не по теме канала (оффтоп). Мут от 30 минут до часа (Почти всегда это указано в закрепленных сообщениях каждого канала)\n4.9 Запрещена публикация материалов 18+, их распространение. Бан 20 дней' 
    },
    { 
      id: '5', 
      title: '§5 Запрещённые действия', 
      content: '5.0 Запрещено распространение файлов/программ, которые могут навредить устройству других участников, читов. (Любой .exe файл считается за вредоносный) Перманентная блокировка\n5.1 Запрещено использование команды aw.sos без причины. Мут 3 часа — Исключение: Если игрок думал, что в чате есть нарушение, хотя оно таковым не являлось.\n5.2 Запрещены угрозы деанонимизацией личности и сватом, а также любые действия, связанные с их осуществлением. Перманентная блокировка\n5.3 Запрещается отправка любых материалов, способных вызвать резкий испуг, шок или дискомфорт у других пользователей. Бан 10 дней\n5.5 Запрещены угрозы в сторону участников сервера. Мут 3 часа — Исключение: Внутриигровые угрозы, например: "Я тебя загриферю!"\n5.6 Запрещено аморальное поведение в чате. Мут 3 часа\n5.7 Запрещены шутки/рофлы в сторону администрации проекта. Мут 1 день (Любое высказывание, которое может оскорбить чувства. Выдаётся на усмотрение модератора.)\n5.8 Запрещено попрошайничество в любом виде чего-либо. Мут 3 часа\n5.9 Запрещено любое общение в политическом контексте. Мут 6 часов\n5.10 Запрещена коммерческая деятельность в любом её проявлении. от мута на 2 дня до перманентного бана' 
    },
    { 
      id: '6', 
      title: '§6 Оскорбления и провокации', 
      content: '6.1 Запрещён призыв к противоправным действиям или к действиям, которые потенциально могут нанести вред здоровью. Бан 120 дней\n6.2 Запрещено злоупотребление нецензурной лексикой. Мут на 2 часа (От 3-х и более матов за 5 минут в сообщениях. Использование завуалированной нецензурной лексики также учитывается)\n6.3 Запрещено оскорбление/унижение участников сервера. Мут от 3 часов до суток (Любое высказывание, которое может оскорбить чувства.) — Исключения: "клоун", "гей" и тому подобное.\n6.4 Запрещено оскорбление/унижение администрации проекта. Мут на 2 дня (Любое высказывание, которое может оскорбить чувства. Выдаётся на усмотрение модератора)\n6.5 Запрещено оскорбление Ириски и/или упоминание ее в оскорбительном контексте. Перманентная блокировка\n6.6 Запрещено провоцировать участников на нарушение правил сервера. Мут 3 часа\n6.7 Запрещена дискриминация по половым признакам. Мут 3 часа — Пример: "Женщина, твое место на кухне"\n6.8 Запрещено неуважительное общение с персоналом проекта. Мут 12 часов\n6.9 Запрещена провокация на конфликт или участие в нём. Мут 6 часов\n6.10 Запрещена выдача себя за администрацию проекта, не являясь ею. Мут 1 день — Пример: "Я хелпер."' 
    },
    { 
      id: '7', 
      title: '§7 Реклама и дезинформация', 
      content: '7.1 Запрещена скрытая реклама в любом её проявлении. Мут 5 дней — Пример: "Кто пойдёт играть на DildoCraft?" — Исключение: Простое упоминание сторонних проектов.\n7.2 Запрещена любая дезинформация. Мут от 4 часов до 1 дня — Исключение: Не распространяется на правила, так как участник не обязан знать в точности все пункты правил, учитывая сроки наказаний.\n7.3 Запрещено упоминание сервера в оскорбительном контексте. Бан 50 дней\n7.4 Запрещена публичная критика проекта. Мут на 3 дня — Исключение: Конструктивная критика с аргументами и предложениями по улучшению.\n7.5 Запрещено злоупотребление различными шрифтами. Мут на 3 часа — Примечание: Наказание выдаётся на усмотрение администрации, если использование шрифтов создаёт неудобства или мешает нормальному общению.\n7.6 Запрещено злоупотребление реакциями под сообщениями в чате. Мут на 3 часа — Примечание: При повторе будут забраны права на добавление реакций.\n7.7 Запрещена отправка любых фишинг ссылок. Перманентная блокировка' 
    },
    { 
      id: '8', 
      title: '§8 Правила оформления профиля', 
      content: '8.1 Запрещено использование оскорбительных/нецензурных ников. Предупреждение → принудительная смена ника → кик\n8.2 Запрещено использование аватарок с эротическим, шокирующим, аморальным содержанием. Предупреждение → кик → Перманентная блокировка\n8.3 Запрещено копирование профиля администрации/ютуберов (никнейм+аватарка). Предупреждение → бан 10 дней\n8.4 Запрещено ставить ники, схожие с никнеймами администрации/ютуберов. Предупреждение → принудительная смена ника → кик — Исключения: "Fan_pupsika" и тому подобное.' 
    },
    { 
      id: '9', 
      title: '§9 Правила голосовых каналов', 
      content: '9.1 Запрещено воспроизведение резких, неприятных звуков. Запрещено орать в микрофон. Мут на 1 день\n9.2 Запрещено чрезмерное употребление нецензурной лексики. Мут на 1 день\n9.3 Запрещено злоупотребление перезаходами из одного канала в другой. Мут на 1 час → кик\n9.4 Запрещена трансляция игры с читами. Бан на 50 дня' 
    }
  ];

  const donateTiers = [
    {
      name: 'Ворон',
      price: '299₽',
      features: ['Fly', 'Разноцветные ники в чате', 'Префикс в чате', 'Сфера Ворона'],
      image: 'https://cdn.poehali.dev/files/a9ysk86n_обработано.png'
    },
    {
      name: 'Титан',
      price: '599₽',
      features: ['Fly', 'Возможности Ворона', 'Дополнительные команды', 'Сфера Титана'],
      image: 'https://cdn.poehali.dev/files/l2spg4uw_обработано.png',
      popular: true
    },
    {
      name: 'Воин',
      price: '899₽',
      features: ['Fly', 'Возможности Титана', 'Усиленные привилегии', 'Сфера Воина'],
      image: 'https://cdn.poehali.dev/files/bfhvj3s1_обработано.png'
    },
    {
      name: 'Дедушка',
      price: '1299₽',
      features: ['Fly', 'Возможности Воина', 'Эксклюзивные команды', 'Сфера Дедушки'],
      image: 'https://cdn.poehali.dev/files/movewgtu_обработано.png'
    },
    {
      name: 'Король',
      price: '1999₽',
      features: ['Fly', 'Возможности Дедушки', 'Королевские привилегии', 'Сфера Короля'],
      image: 'https://cdn.poehali.dev/files/f4eahju5_обработано.png'
    },
    {
      name: 'Бог',
      price: '2999₽',
      features: ['Fly', 'GM 1', 'Все возможности Короля', 'Сфера Бога', 'Сфера Строителя'],
      image: 'https://cdn.poehali.dev/files/bfhvj3s1_обработано.png'
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
                    <p className="text-2xl font-bold text-minecraft-green">{onlinePlayers} {onlinePlayers === 1 ? 'игрок' : 'игроков'}</p>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
                  <AccordionContent className="text-muted-foreground pt-4 whitespace-pre-line">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {donateTiers.map((tier, index) => (
                <Card 
                  key={index}
                  className={`relative overflow-hidden backdrop-blur-sm transition-all hover:scale-105 bg-card/80 ${
                    tier.popular ? 'border-2 border-minecraft-gold shadow-[0_0_30px_rgba(245,158,11,0.3)]' : 'border border-minecraft-green/30'
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tier.popular && (
                    <div className="absolute top-4 right-4 bg-minecraft-gold text-black px-3 py-1 text-sm font-bold rounded-lg z-10 shadow-lg">
                      ⭐ ПОПУЛЯРНЫЙ
                    </div>
                  )}
                  <div className="aspect-square w-full overflow-hidden bg-gradient-to-br from-minecraft-dark to-minecraft-darker">
                    <img 
                      src={tier.image} 
                      alt={tier.name}
                      className="w-full h-full object-cover transition-transform hover:scale-110"
                    />
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-3xl font-montserrat text-minecraft-gold">{tier.name}</CardTitle>
                    <CardDescription className="text-4xl font-bold mt-2 text-minecraft-green">{tier.price}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-minecraft-green flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      asChild
                      className="w-full bg-minecraft-gold hover:bg-minecraft-gold/80 text-black font-bold"
                      size="lg"
                    >
                      <a href="https://t.me/MrFermer_tm" target="_blank" rel="noopener noreferrer">
                        <Icon name="ShoppingCart" size={20} className="mr-2" />
                        Купить
                      </a>
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
