
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Application {
  candidateName: string;
  jobTitle: string;
  matchScore: number;
  status: "pending" | "reviewed";
}

const MOCK_APPLICATIONS: Application[] = [
  { candidateName: "Julie Martin", jobTitle: "Développeur Frontend", matchScore: 95, status: "pending" },
  { candidateName: "Thomas Bernard", jobTitle: "Data Scientist", matchScore: 88, status: "reviewed" },
  { candidateName: "Sophie Dubois", jobTitle: "DevOps Engineer", matchScore: 82, status: "pending" },
];

const RecruiterApplications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [applications, setApplications] = useState(MOCK_APPLICATIONS);

  const filteredApplications = applications.filter(
    (app) =>
      app.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      <h1 className="font-playfair mb-8 text-3xl font-bold">Candidatures reçues</h1>
      
      <div className="mb-6">
        <Input
          type="search"
          placeholder="Rechercher par nom ou poste..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-4">
        {filteredApplications.map((application, index) => (
          <Card key={index} className="flex items-center justify-between p-6">
            <div>
              <h3 className="text-lg font-semibold">{application.candidateName}</h3>
              <p className="text-gray-600">{application.jobTitle}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-primary">{application.matchScore}%</p>
              <p className="text-sm text-gray-500">
                {application.status === "pending" ? "En attente" : "Traité"}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecruiterApplications;
