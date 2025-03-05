
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { JobPosting } from "@/components/recruiter/JobPosting";
import { JobForm, JobFormData } from "@/components/recruiter/JobForm";
import { PlusIcon } from "lucide-react";

const MOCK_JOBS = [
  {
    title: "Développeur Frontend",
    description: "Nous recherchons un développeur Frontend expérimenté pour rejoindre notre équipe technique.",
    location: "Paris",
    type: "CDI",
  },
  {
    title: "Data Scientist",
    description: "Expert en analyse de données et machine learning pour développer des modèles prédictifs.",
    location: "Lyon",
    type: "CDI",
  },
  {
    title: "DevOps Engineer",
    description: "Ingénieur DevOps pour gérer notre infrastructure cloud et améliorer nos processus de déploiement.",
    location: "Toulouse",
    type: "CDI",
  },
];

const RecruiterJobs = () => {
  const [jobs, setJobs] = useState(MOCK_JOBS);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (data: JobFormData) => {
    setJobs([...jobs, data]);
    setShowForm(false);
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-playfair text-3xl font-bold">Mes offres d'emploi</h1>
        <Button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2">
          <PlusIcon className="h-4 w-4" />
          Nouvelle offre
        </Button>
      </div>

      {showForm && (
        <div className="mb-8">
          <JobForm onSubmit={handleSubmit} />
        </div>
      )}

      <div className="grid gap-6">
        {jobs.map((job, index) => (
          <JobPosting key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default RecruiterJobs;
