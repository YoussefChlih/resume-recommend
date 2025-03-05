
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BriefcaseIcon, FileTextIcon, HomeIcon } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();
  const isRecruiter = location.pathname.startsWith("/recruiter");
  const isCandidate = location.pathname.startsWith("/candidate");

  return (
    <nav className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-playfair text-2xl font-bold text-primary">
            JobMatch
          </Link>
          {isRecruiter ? (
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link to="/recruiter/jobs" className="flex items-center gap-2">
                  <BriefcaseIcon className="h-4 w-4" />
                  Mes offres
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/recruiter/applications" className="flex items-center gap-2">
                  <FileTextIcon className="h-4 w-4" />
                  Candidatures
                </Link>
              </Button>
            </div>
          ) : isCandidate ? (
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link to="/candidate/jobs" className="flex items-center gap-2">
                  <BriefcaseIcon className="h-4 w-4" />
                  Offres
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/candidate/applications" className="flex items-center gap-2">
                  <FileTextIcon className="h-4 w-4" />
                  Mes candidatures
                </Link>
              </Button>
            </div>
          ) : null}
        </div>
        <div className="flex items-center gap-4">
          {!isRecruiter && !isCandidate && (
            <>
              <Button variant="outline" asChild>
                <Link to="/candidate/jobs">Espace Candidat</Link>
              </Button>
              <Button asChild>
                <Link to="/recruiter/jobs">Espace Recruteur</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
