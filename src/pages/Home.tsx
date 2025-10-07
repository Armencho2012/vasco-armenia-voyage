import { Anchor } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <Anchor className="h-20 w-20 mx-auto mb-6 animate-fade-in-scale" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Վասկո դա Գամա
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Մեծ ուղեծրահայտ, ով բացեց նոր դարաշրջան մարդկության պատմության մեջ
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground leading-relaxed">
            "Ով չի կանգնում, երբ ալիքները բարձրանում են, նա չի կարող հասնել անհայտ ափերի:"
          </blockquote>
          <p className="mt-6 text-muted-foreground font-medium">— Ուղեծրության փիլիսոփայություն</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="card-elegant p-8 md:p-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Ով էր Վասկո դա Գաման</h2>
            <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
              <p>
                Վասկո դա Գաման (մոտ 1460-1524) եղել է պորտուգալացի ուղեծրահայտ և ծովային 
                զինվորական, ով համարվում է պատմության ամենակարևոր հայտնագործողներից մեկը։ 
                Նա եղել է առաջին եվրոպացին, ով ծովային ճանապարհով հասել է Հնդկաստան՝ 
                շրջելով Աֆրիկայի հարավային ծայրը։
              </p>
              <p>
                Իր առաջին ճամփորդությունը դեպի Հնդկաստան (1497-1499) հիմնովին փոխեց 
                համաշխարհային առևտրի և քաղաքակրթությունների միջև կապի բնույթը։ Այս 
                արկածախնդրությունը բացեց նոր դարաշրջան՝ ստեղծելով ուղղակի ծովային կապ 
                Եվրոպայի և Ասիայի միջև։
              </p>
              <p>
                Դա Գամայի հայտնագործությունները և նրա քաջությունը ոչ միայն փոխեցին 
                աշխարհագրական քարտեզները, այլև դարձան հիմք նոր տնտեսական և մշակութային 
                փոխհարաբերությունների համար, որոնք ազդեցին ամբողջ աշխարհի ապագայի վրա։
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
