import { Calendar, MapPin, Users, GraduationCap } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

const Biography = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-foreground animate-fade-in">
          Կենսագրություն
        </h1>

        {/* Portrait and Quick Facts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in">
          <div className="card-elegant p-6">
            <img 
              src={portrait} 
              alt="Վասկո դա Գամա" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          <div className="card-elegant p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Արագ փաստեր</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Ծննդյան տարի</p>
                  <p className="text-muted-foreground">Մոտ 1460, Սինեշ, Պորտուգալիա</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Մահվան տարի</p>
                  <p className="text-muted-foreground">24 դեկտեմբերի, 1524, Կոչին, Հնդկաստան</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Ծնողներ</p>
                  <p className="text-muted-foreground">Էշտևան դա Գամա և Իզաբել Սոդրե</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Տիտղոս</p>
                  <p className="text-muted-foreground">Հնդկաստանի փոխարքա</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Early Life */}
        <div className="card-elegant p-8 md:p-12 mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Վաղ տարիներ և կրթություն</h2>
          </div>
          <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
            <p>
              Վասկո դա Գաման ծնվել է 1460 թվականին կամ նրան մոտ Սինեշ քաղաքում, 
              Պորտուգալիայի հարավ-արևմուտքում։ Նա եկել էր ազնվականի ընտանիքից, որտեղ 
              նրա հայրը, Էշտևան դա Գաման, ծառայել էր որպես ղեկավար Սինեշի ամրոցում։
            </p>
            <p>
              Երիտասարդությունից Վասկոն սովորել է ծովային նավարկության արվեստը, 
              աստղագիտություն և մաթեմատիկա։ Նա նաև ստացել է զինվորական ուսուցում և 
              դարձել որոշիչ կերպար Պորտուգալիայի արքունիքում։
            </p>
          </div>
        </div>

        {/* Family Background */}
        <div className="card-elegant p-8 md:p-12 mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Ընտանիք և ծագում</h2>
          </div>
          <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
            <p>
              Դա Գամայի ընտանիքը սերտ կապեր ուներ Պորտուգալիայի արքունիքի հետ։ 
              Նրա մայրը, Իզաբել Սոդրե, եղել է անգլիական ազնվականի դուստրը, և 
              ընտանիքը մեծ հարգանք էր վայելում պատվավոր ծառայությունների համար։
            </p>
            <p>
              Վասկոն ուներ մի քանի եղբայրներ, որոնցից մեկը՝ Պաուլուն, նրան 
              ուղեկցեց իր առաջին ճամփորդության ժամանակ դեպի Հնդկաստան։ Ընտանիքի 
              ազնվական կարգավիճակն ու ծովային փորձառությունը նախապատրաստեցին 
              Վասկոյին նրա պատմական առաքելության համար։
            </p>
          </div>
        </div>

        {/* Character */}
        <div className="card-elegant p-8 md:p-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-6">Անհատականություն</h2>
          <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
            <p>
              Սուրբ աղբյուրները նկարագրում են դա Գամային որպես խիստ, կամքի 
              ուժեղ և անհնազանդ անձնավորություն։ Նա եղել է վճռական ղեկավար, 
              ով մեծ հաջողություն էր ապահովել բարդ և վտանգավոր իրավիճակներում։
            </p>
            <p>
              Թեև նրա մեթոդները հաճախ անողոք էին, նրա քաջությունը, ռազմավարական 
              մտածողությունը և անվեհեր հավատարմությունը Պորտուգալիային դարձրին նրան 
              իդեալական թեկնածու անհայտ ջրերում մեծ արկածախնդրության համար։
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
