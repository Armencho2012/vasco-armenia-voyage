import { Ship, Waves, MapPin, Calendar } from "lucide-react";
import voyageMap from "@/assets/voyage-map.jpg";

const Voyages = () => {
  const timeline = [
    {
      date: "8 հուլիսի, 1497",
      title: "Մեկնում Լիսաբոնից",
      description: "Վասկո դա Գաման մեկնեց 4 նավերով՝ Սան Գաբրիել, Սան Րաֆայել, Բերրիու և մի բեռնանավ։"
    },
    {
      date: "Նոյեմբեր 1497",
      title: "Շրջանցում է Հուսո հրվանդանը",
      description: "Նավերը հաջողությամբ անցան Աֆրիկայի հարավային ծայրով՝ հաղթահարելով խիստ ջրերը։"
    },
    {
      date: "Մարտ 1498",
      title: "Հասնում է Մոզամբիկին",
      description: "Առաջին կանգառը Արևելյան Աֆրիկայում, որտեղ հանդիպում է արաբ առևտրականներին։"
    },
    {
      date: "Ապրիլ 1498",
      title: "Մոմբասա և Մալինդի",
      description: "Ձեռք բերում է տեղական օգնական և փորձառու ինդիական նավաստու։"
    },
    {
      date: "20 մայիսի, 1498",
      title: "Հասնում է Հնդկաստանի Կալիկութ",
      description: "Պատմական պահ՝ առաջին եվրոպական նավը հասնում է Հնդկաստան ծովային ուղով։"
    },
    {
      date: "Սեպտեմբեր 1499",
      title: "Վերադառնում է Պորտուգալիա",
      description: "Հաջողությամբ վերադարձ հնդկական համեմունքների և հարստության հետ։"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          Ճամփորդություններ
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-12 animate-fade-in">
          Ուղեծրահայտության մեծ արկածախնդրություններ դեպի անհայտ աշխարհ
        </p>

        {/* Map Section */}
        <div className="card-elegant p-6 mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
            <MapPin className="h-8 w-8 text-primary" />
            Ուղու քարտեզ
          </h2>
          <img 
            src={voyageMap} 
            alt="Ճանապարհը դեպի Հնդկաստան" 
            className="w-full h-auto rounded-xl shadow-lg"
          />
          <p className="mt-4 text-muted-foreground text-center">
            Պորտուգալիայից Հնդկաստան՝ շրջանցելով Աֆրիկան
          </p>
        </div>

        {/* First Voyage Details */}
        <div className="card-elegant p-8 md:p-12 mb-12 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Ship className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Առաջին ճամփորդությունը (1497-1499)</h2>
          </div>
          <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
            <p>
              1497 թվականին Պորտուգալիայի Մանուել I թագավորը նշանակեց Վասկո դա Գամային 
              գլխավորելու էքսպեդիցիան դեպի Հնդկաստան։ Նպատակն էր գտնել ծովային ուղի դեպի 
              համեմունքների հարստությունը՝ շրջանցելով իսլամական միջնորդներին։
            </p>
            <p>
              Ճամփորդությունը տևեց երկու տարի և ներառեց չափազանց դժվար պայմաններ, 
              հիվանդություններ, փոթորիկներ և թշնամական հանդիպումներ։ Թիմի անդամներից 
              շատերը կորցրին իրենց կյանքը, բայց դա Գաման մնաց անվեհեր և հասավ իր նպատակին։
            </p>
            <p>
              Երբ նավերը վերջապես հասան Կալիկութ (ժամանակակից Կոժիկոդե), դա Գաման 
              հանդիպեց տեղական թագավորին՝ Զամորինին։ Թեև սկզբնական բանակցությունները 
              դժվար էին, հաջողությամբ հաստատվեց առևտրային կապ։
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
            <Calendar className="h-8 w-8 text-primary" />
            Ժամանակացույց
          </h2>
          <div className="space-y-6">
            {timeline.map((event, index) => (
              <div key={index} className="card-elegant p-6 hover:scale-[1.02] smooth-transition">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-32">
                    <span className="text-primary font-bold">{event.date}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="card-elegant p-8 md:p-12 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Waves className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Մարտահրավերներ</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-secondary rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-3">Բնական վտանգներ</h3>
              <p className="text-muted-foreground">
                Ծանր փոթորիկներ, անհայտ ջրեր և անկանխատեսելի եղանակային պայմաններ 
                անընդհատ սպառնում էին նավերին և անձնակազմին։
              </p>
            </div>
            <div className="p-6 bg-secondary rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-3">Հիվանդություններ</h3>
              <p className="text-muted-foreground">
                Ծնոտը (սկորբուտ) և այլ հիվանդություններ սպանեցին անձնակազմի գրեթե կեսը։ 
                Երկար ուղևորության ընթացքում սննդի պակասը և հիգիենայի դժվարությունները 
                ավելացրին զոհերը։
              </p>
            </div>
            <div className="p-6 bg-secondary rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-3">Թշնամական հանդիպումներ</h3>
              <p className="text-muted-foreground">
                Տեղական ավագների և համակրողների հետ բախումները, ինչպես նաև 
                մուսուլման առևտրականների թշնամությունը բարդացրին առևտրային 
                բանակցությունները։
              </p>
            </div>
            <div className="p-6 bg-secondary rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-3">Նավիգացիոն դժվարություններ</h3>
              <p className="text-muted-foreground">
                Անհայտ ջրերում նավարկելը, առանց ճշգրիտ քարտեզների, պահանջում էր 
                վարպետություն և մեծ համարձակություն։
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voyages;
