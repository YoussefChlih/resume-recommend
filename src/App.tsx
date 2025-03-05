
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Index from "./pages/Index";
import CandidateJobs from "./pages/candidate/Jobs";
import CandidateApplications from "./pages/candidate/Applications";
import RecruiterJobs from "./pages/recruiter/Jobs";
import RecruiterApplications from "./pages/recruiter/Applications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="candidate">
              <Route path="jobs" element={<CandidateJobs />} />
              <Route path="applications" element={<CandidateApplications />} />
            </Route>
            <Route path="recruiter">
              <Route path="jobs" element={<RecruiterJobs />} />
              <Route path="applications" element={<RecruiterApplications />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
