import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Award, BookOpen, Clock, Users } from "lucide-react";

export default function Training() {
  const courses = [
    {
      id: 1,
      title: "Leadership Essentials",
      category: "Leadership",
      duration: "6 hours",
      enrolled: 45,
      completed: 32,
      progress: 71,
      status: "active"
    },
    {
      id: 2,
      title: "Advanced Excel Skills",
      category: "Technical",
      duration: "4 hours",
      enrolled: 78,
      completed: 65,
      progress: 83,
      status: "active"
    },
    {
      id: 3,
      title: "Cybersecurity Awareness",
      category: "Security",
      duration: "2 hours",
      enrolled: 234,
      completed: 220,
      progress: 94,
      status: "mandatory"
    },
    {
      id: 4,
      title: "Effective Communication",
      category: "Soft Skills",
      duration: "5 hours",
      enrolled: 56,
      completed: 23,
      progress: 41,
      status: "active"
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "Sarah Johnson",
      certification: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      issueDate: "Dec 2024",
      expiry: "Dec 2027",
      status: "active"
    },
    {
      id: 2,
      name: "Mike Chen",
      certification: "PMP Certification",
      issuer: "PMI",
      issueDate: "Oct 2024",
      expiry: "Oct 2027",
      status: "active"
    },
    {
      id: 3,
      name: "Emma Wilson",
      certification: "Google Analytics Certified",
      issuer: "Google",
      issueDate: "Nov 2024",
      expiry: "Nov 2025",
      status: "expiring-soon"
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Training & Certifications</h2>
        <p className="text-muted-foreground">Manage employee training programs and certifications</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              Active Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">24</div>
            <p className="text-xs text-muted-foreground mt-1">Across all departments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Users className="h-4 w-4 text-success" />
              Total Enrolled
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">413</div>
            <p className="text-xs text-muted-foreground mt-1">In progress students</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Award className="h-4 w-4 text-warning" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">87</div>
            <p className="text-xs text-muted-foreground mt-1">Active certifications</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Clock className="h-4 w-4 text-chart-4" />
              Training Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">1,247</div>
            <p className="text-xs text-muted-foreground mt-1">This quarter</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Training Programs</CardTitle>
          <CardDescription>Active training courses and enrollment status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {courses.map((course) => (
              <Card key={course.id} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-foreground text-lg">{course.title}</h4>
                        {course.status === "mandatory" && (
                          <Badge variant="destructive">Mandatory</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Badge variant="outline">{course.category}</Badge>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {course.enrolled} enrolled
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Completion Rate</span>
                      <span className="text-sm font-medium">
                        {course.completed}/{course.enrolled} ({course.progress}%)
                      </span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Certifications</CardTitle>
          <CardDescription>Employee professional certifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <Card key={cert.id} className="border-l-4 border-l-success">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="h-5 w-5 text-warning" />
                        <div>
                          <h4 className="font-semibold text-foreground">{cert.certification}</h4>
                          <p className="text-sm text-muted-foreground">{cert.name}</p>
                        </div>
                      </div>
                      <div className="ml-8 text-sm text-muted-foreground">
                        <p>Issued by: {cert.issuer}</p>
                        <p>
                          Valid: {cert.issueDate} - {cert.expiry}
                        </p>
                      </div>
                    </div>
                    {cert.status === "expiring-soon" ? (
                      <Badge className="bg-warning text-warning-foreground">Expiring Soon</Badge>
                    ) : (
                      <Badge className="bg-success text-success-foreground">Active</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
