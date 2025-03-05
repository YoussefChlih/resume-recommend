
import { Card } from "@/components/ui/card";

const CandidateApplications = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="font-playfair mb-8 text-3xl font-bold">Mes candidatures</h1>
      <div className="grid gap-4">
        <Card className="p-6">
          <h2 className="mb-2 text-xl font-semibold">Suivi des candidatures en cours d'implémentation</h2>
          <p className="text-gray-600">Cette section sera bientôt disponible.</p>
        </Card>
      </div>
    </div>
  );
};

export default CandidateApplications;
