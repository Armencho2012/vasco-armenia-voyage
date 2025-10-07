import { Globe, TrendingUp, Anchor, BookOpen, Star, Users } from "lucide-react";

const Legacy = () => {
  const impacts = [
    {
      icon: Globe,
      title: "Համաշխարհային առևտուր",
      description: "Բացեց ուղղակի ծովային ուղի Եվրոպայից դեպի Ասիա՝ փոխելով համաշխարհային առևտրի դինամիկան և դարձնելով համեմունքներն ավելի հասանելի։"
    },
    {
      icon: Anchor,
      title: "Ծովային ուժ",
      description: "Պորտուգալիան դարձավ կարևոր ծովային ուժ՝ վերահսկելով համեմունքների առևտուրը և հաստատելով գաղութներ Ասիայում և Աֆրիկայում։"
    },
    {
      icon: TrendingUp,
      title: "Տնտեսական ազդեցություն",
      description: "Ստեղծեց նոր տնտեսական հնարավորություններ և հարստություն Եվրոպայի համար՝ նվազեցնելով կախվածությունը արաբական միջնորդներից։"
    },
    {
      icon: BookOpen,
      title: "Աշխարհագրական գիտելիքներ",
      description: "Զգալիորեն ընդլայնեց եվրոպացիների գիտելիքները աշխարհի մասին և ոգեշնչեց նոր ուղեծրահայտություններ։"
    },
    {
      icon: Users,
      title: "Մշակութային փոխանակում",
      description: "Նպաստեց մշակութային և տեխնոլոգիական փոխանակմանը Արևելքի և Արևմուտքի միջև, թեև հաճախ բարդ հետևանքներով։"
    },
    {
      icon: Star,
      title: "Պատմական նշանակություն",
      description: "Նշանավորեց Ուղեծրահայտության դարաշրջանի սկիզբը և համարվում է պատմության մեծագույն նավարկիչներից մեկը։"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          Ժառանգություն
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-12 animate-fade-in">
          Վասկո դա Գամայի տևական ազդեցությունը աշխարհի պատմության վրա
        </p>

        {/* Introduction */}
        <div className="card-elegant p-8 md:p-12 mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-6">Պատմական նշանակություն</h2>
          <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
            <p>
              Վասկո դա Գամայի ճամփորդությունը հիմնովին փոխեց աշխարհի տնտեսական, 
              քաղաքական և մշակութային դեմքը։ Նրա հայտնագործությունը բացեց նոր դարաշրջան 
              համաշխարհային առևտրի և միջմշակութային հարաբերությունների մեջ։
            </p>
            <p>
              Թեև նրա ժառանգությունը բարդ է և ներառում է և՛ դրական, և՛ բացասական 
              ազդեցություններ, անհերքելի է, որ դա Գամայի արկածախնդրությունները 
              կարևոր դեր են խաղացել ժամանակակից աշխարհի ձևավորման գործում։
            </p>
          </div>
        </div>

        {/* Impact Grid */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Ազդեցության ոլորտներ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impacts.map((impact, index) => (
              <div 
                key={index} 
                className="card-elegant p-6 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 smooth-transition">
                  <impact.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{impact.title}</h3>
                <p className="text-muted-foreground">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Age of Discovery */}
        <div className="card-elegant p-8 md:p-12 mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ուղեծրահայտության դարաշրջան</h2>
          <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
            <p>
              Դա Գամայի հաջողությունը ոգեշնչեց ամբողջ սերունդ ուղեծրահայտներ։ Իր 
              օրինակից հետո եվրոպացիները սկսեցին ավելի համարձակ արկածախնդրություններ՝ 
              հայտնագործելով նոր երկրներ, մշակույթներ և ռեսուրսներ։
            </p>
            <p>
              Նրա ճանապարհը հիմք դարձավ Պորտուգալիայի ծովային կայսրության համար, 
              որը տարածվեց Բրազիլիայից մինչև Մակաու և Ճապոնիա։ Այս կայսրությունը 
              մեծ ազդեցություն ունեցավ լեզվի, կրոնի և մշակույթի տարածման վրա։
            </p>
          </div>
        </div>

        {/* Modern Recognition */}
        <div className="card-elegant p-8 md:p-12 animate-fade-in bg-gradient-to-br from-primary/5 to-accent/5">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ժամանակակից ճանաչում</h2>
          <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
            <p>
              Այսօր Վասկո դա Գաման ճանաչվում է որպես մեծագույն նավարկիչներից և 
              ուղեծրահայտներից մեկը։ Նրա անունը տրված է գիտական ինստիտուտների, 
              կամուրջների, հրապարակների և նավերի։
            </p>
            <p>
              Լիսաբոնում կանգնած է հիանալի հուշարձան նրա պատվին՝ ցույց տալով նրա 
              արշավախմբի նավերը և անձնակազմը։ Նրա պատմությունը շարունակում է 
              ոգեշնչել նոր սերունդներին հետազոտել անհայտը և հասնել անհնարինին։
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legacy;
