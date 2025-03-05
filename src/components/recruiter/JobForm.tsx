
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export interface JobFormData {
  title: string;
  description: string;
  location: string;
  type: string;
  skills: string[];
}

interface JobFormProps {
  onSubmit: (data: JobFormData) => void;
}

export const JobForm = ({ onSubmit }: JobFormProps) => {
  const [formData, setFormData] = useState<JobFormData>({
    title: "",
    description: "",
    location: "",
    type: "CDI",
    skills: [],
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.location) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
      });
      return;
    }
    onSubmit(formData);
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Titre du poste *
          </label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description *
          </label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Lieu *
          </label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
            Compétences requises (séparées par des virgules)
          </label>
          <Input
            id="skills"
            value={formData.skills.join(", ")}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value.split(",").map((s) => s.trim()) })}
            className="mt-1"
          />
        </div>
        <Button type="submit" className="w-full">
          Publier l'offre
        </Button>
      </form>
    </Card>
  );
};
