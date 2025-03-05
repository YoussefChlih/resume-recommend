
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BriefcaseIcon, SearchIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center">
      <h1 className="font-playfair mb-4 text-center text-5xl font-bold tracking-tight text-gray-900">
        Trouvez le talent parfait
        <br />
        <span className="text-primary">pour votre entreprise</span>
      </h1>
      <p className="mb-8 text-center text-lg text-gray-600">
        Une plateforme intelligente qui connecte les meilleurs talents avec les meilleures opportunités
      </p>
      <div className="flex gap-4">
        <Button size="lg" asChild>
          <Link to="/recruiter/jobs" className="flex items-center gap-2">
            <BriefcaseIcon className="h-5 w-5" />
            Publier une offre
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link to="/candidate/jobs" className="flex items-center gap-2">
            <SearchIcon className="h-5 w-5" />
            Chercher un emploi
          </Link>
        </Button>
      </div>

      <div className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="animate-slide-up p-6">
          <h2 className="font-playfair mb-4 text-2xl font-bold">Pour les candidats</h2>
          <ul className="mb-6 space-y-3 text-gray-600">
            <li>• Trouvez des offres pertinentes</li>
            <li>• Postulez en quelques clics</li>
            <li>• Suivez vos candidatures</li>
          </ul>
          <Button className="w-full" asChild>
            <Link to="/candidate/jobs">Voir les offres</Link>
          </Button>
        </Card>

        <Card className="animate-slide-up delay-100 p-6">
          <h2 className="font-playfair mb-4 text-2xl font-bold">Pour les recruteurs</h2>
          <ul className="mb-6 space-y-3 text-gray-600">
            <li>• Publiez vos offres d'emploi</li>
            <li>• Analysez les CV automatiquement</li>
            <li>• Gérez vos candidatures</li>
          </ul>
          <Button className="w-full" asChild>
            <Link to="/recruiter/jobs">Espace recruteur</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Index;
