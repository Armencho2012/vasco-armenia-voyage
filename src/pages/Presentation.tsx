import { Button } from "@/components/ui/button";
import { ExternalLink, Presentation as PresentationIcon } from "lucide-react";

const Presentation = () => {
  const presentationUrl = "https://docs.google.com/presentation/d/1L15rTHRb2JToCpAItYe8V9mhEDOzGMCeQHmrLbe3gSg/edit?slide=id.p1#slide=id.p1";

  return (
    <div className="min-h-screen py-12 px-4 flex items-center justify-center">
      <div className="max-w-3xl mx-auto w-full">
        <div className="card-elegant p-12 text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-8">
            <PresentationIcon className="h-12 w-12 text-primary" />
          </div>
          
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Ներկայացում
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Դիտեք մանրամասն ներկայացումը Վասկո դա Գամայի կյանքի, 
            ճամփորդությունների և ժառանգության մասին։
          </p>

          <div className="bg-secondary/50 border border-border rounded-xl p-6 mb-8">
            <p className="text-sm text-muted-foreground mb-4">
              Այս ներկայացումը պարունակում է՝
            </p>
            <ul className="text-left max-w-md mx-auto space-y-2 text-foreground/90">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Կենսագրական մանրամասներ և պատմական փաստեր</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Քարտեզներ և ուղեծրահայտության երթուղիներ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Պատմական նկարներ և նկարազարդումներ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Ժամանակակից ազդեցություն և ժառանգություն</span>
              </li>
            </ul>
          </div>

          <Button
            size="lg"
            className="gap-3 text-lg px-8 py-6"
            onClick={() => {
              window.open(presentationUrl, "_blank");
            }}
          >
            <ExternalLink className="h-5 w-5" />
            Բացել ներկայացումը
          </Button>

          <p className="text-sm text-muted-foreground mt-6">
            Ներկայացումը կբացվի նոր պատուհանում
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
