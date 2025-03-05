
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface ApplyFormProps {
  jobId: string;
  jobTitle: string;
}

export const ApplyForm = ({ jobId, jobTitle }: ApplyFormProps) => {
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez sélectionner un CV au format PDF",
      });
      return;
    }

    // Simuler l'envoi et l'analyse du CV
    toast({
      title: "Candidature envoyée",
      description: "Votre CV a été envoyé et est en cours d'analyse",
    });
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
            Votre CV (PDF)
          </label>
          <input
            id="cv"
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
        <Button type="submit" className="w-full">
          Postuler pour {jobTitle}
        </Button>
      </form>
    </Card>
  );
};
