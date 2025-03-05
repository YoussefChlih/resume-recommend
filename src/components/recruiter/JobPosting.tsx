
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { CandidateMatch } from "./CandidateMatch";

export interface JobPostingProps {
  title: string;
  description: string;
  location: string;
  type: string;
}

export const JobPosting = ({ title, description, location, type }: JobPostingProps) => {
  const [showMatches, setShowMatches] = useState(false);

  const simulateSearch = () => {
    setShowMatches(true);
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-gray-600">
          <p>{description}</p>
          <div className="flex items-center gap-4">
            <span>{location}</span>
            <span>{type}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch gap-4">
        <Button onClick={simulateSearch} className="w-full">
          Rechercher les CV correspondants
        </Button>
        {showMatches && <CandidateMatch jobTitle={title} />}
      </CardFooter>
    </Card>
  );
};
