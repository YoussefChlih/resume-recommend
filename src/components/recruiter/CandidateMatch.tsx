
import { Card } from "@/components/ui/card";

interface CandidateMatchProps {
  jobTitle: string;
}

export const CandidateMatch = ({ jobTitle }: CandidateMatchProps) => {
  // Simuler des résultats de matching
  const candidates = [
    { name: "Julie Martin", score: 95 },
    { name: "Thomas Bernard", score: 88 },
    { name: "Sophie Dubois", score: 82 },
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Candidats correspondants</h3>
      {candidates.map((candidate, index) => (
        <Card key={index} className="flex items-center justify-between p-4">
          <span className="font-medium">{candidate.name}</span>
          <span className="text-sm">
            Score de correspondance: <span className="font-semibold text-primary">{candidate.score}%</span>
          </span>
        </Card>
      ))}
    </div>
  );
};
