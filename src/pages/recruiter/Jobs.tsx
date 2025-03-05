
import { Card } from "@/components/ui/card";
import { JobPosting } from "@/components/recruiter/JobPosting";

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
  return (
    <div className="animate-fade-in">
      <h1 className="font-playfair mb-8 text-3xl font-bold">Mes offres d'emploi</h1>
      <div className="grid gap-6">
        {MOCK_JOBS.map((job, index) => (
          <JobPosting key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default RecruiterJobs;
