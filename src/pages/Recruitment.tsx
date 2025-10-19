import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Users, UserCheck, FileText, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Recruitment() {
  const { toast } = useToast();
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);
  const pipeline = [
    { stage: "Applied", count: 45, color: "bg-chart-1" },
    { stage: "Screening", count: 28, color: "bg-chart-2" },
    { stage: "Interview", count: 12, color: "bg-chart-3" },
    { stage: "Offer", count: 5, color: "bg-chart-4" },
  ];

  const openPositions = [
    { id: 1, title: "Senior Frontend Developer", department: "Engineering", applicants: 23, posted: "5 days ago" },
    { id: 2, title: "Product Manager", department: "Product", applicants: 18, posted: "1 week ago" },
    { id: 3, title: "UX Designer", department: "Design", applicants: 31, posted: "3 days ago" },
    { id: 4, title: "Data Analyst", department: "Analytics", applicants: 15, posted: "2 weeks ago" },
  ];

  const recentCandidates = [
    { id: 1, name: "Alex Thompson", position: "Senior Frontend Developer", stage: "Interview", rating: 4.5, email: "alex.thompson@email.com", phone: "+1 (555) 123-4567", experience: "5 years" },
    { id: 2, name: "Maria Garcia", position: "Product Manager", stage: "Screening", rating: 4.0, email: "maria.garcia@email.com", phone: "+1 (555) 234-5678", experience: "7 years" },
    { id: 3, name: "James Wilson", position: "UX Designer", stage: "Offer", rating: 5.0, email: "james.wilson@email.com", phone: "+1 (555) 345-6789", experience: "4 years" },
    { id: 4, name: "Sophie Chen", position: "Data Analyst", stage: "Applied", rating: 3.5, email: "sophie.chen@email.com", phone: "+1 (555) 456-7890", experience: "3 years" },
  ];

  const handlePostJob = () => {
    toast({
      title: "Job Posting",
      description: "Opening job posting form...",
    });
  };

  const handleViewCandidate = (candidate: any) => {
    setSelectedCandidate(candidate);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Recruitment</h2>
          <p className="text-muted-foreground">Track applicants and manage job openings</p>
        </div>
        <Button onClick={handlePostJob}>
          <Plus className="mr-2 h-4 w-4" />
          Post New Job
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {pipeline.map((stage) => (
          <Card key={stage.stage}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stage.stage}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{stage.count}</div>
              <div className={`h-2 ${stage.color} rounded-full mt-3`} />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Open Positions
            </CardTitle>
            <CardDescription>Currently hiring for these roles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {openPositions.map((position) => (
                <Card key={position.id} className="border-l-4 border-l-primary">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-foreground">{position.title}</h4>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline">{position.department}</Badge>
                          <span className="text-sm text-muted-foreground">
                            {position.applicants} applicants
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">{position.posted}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Recent Candidates
            </CardTitle>
            <CardDescription>Latest applicants in the pipeline</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCandidates.map((candidate) => (
                <Card key={candidate.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-foreground">{candidate.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{candidate.position}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary">{candidate.stage}</Badge>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-xs ${i < Math.floor(candidate.rating) ? 'text-warning' : 'text-muted'}`}>
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" onClick={() => handleViewCandidate(candidate)}>
                        <FileText className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={!!selectedCandidate} onOpenChange={() => setSelectedCandidate(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{selectedCandidate?.name}</DialogTitle>
            <DialogDescription>Candidate Profile</DialogDescription>
          </DialogHeader>
          {selectedCandidate && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground">Position</h4>
                <p className="text-foreground">{selectedCandidate.position}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground">Current Stage</h4>
                <Badge variant="secondary">{selectedCandidate.stage}</Badge>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground">Experience</h4>
                <p className="text-foreground">{selectedCandidate.experience}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground">Contact</h4>
                <p className="text-sm text-foreground">{selectedCandidate.email}</p>
                <p className="text-sm text-foreground">{selectedCandidate.phone}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground">Rating</h4>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-lg ${i < Math.floor(selectedCandidate.rating) ? 'text-warning' : 'text-muted'}`}>
                      ★
                    </span>
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">{selectedCandidate.rating}/5</span>
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <Button className="flex-1">Schedule Interview</Button>
                <Button variant="outline" className="flex-1">Send Email</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
