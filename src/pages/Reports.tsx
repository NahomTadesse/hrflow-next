import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Download, FileText, TrendingUp, Users, Clock, DollarSign, Calendar } from "lucide-react";

export default function Reports() {
  const availableReports = [
    {
      id: 1,
      title: "Headcount Report",
      description: "Detailed breakdown of employees by department, location, and status",
      icon: Users,
      category: "Workforce",
      frequency: "Monthly",
      lastRun: "2 days ago"
    },
    {
      id: 2,
      title: "Attendance Summary",
      description: "Employee attendance patterns, late arrivals, and absence trends",
      icon: Clock,
      category: "Time & Attendance",
      frequency: "Weekly",
      lastRun: "1 day ago"
    },
    {
      id: 3,
      title: "Payroll Report",
      description: "Comprehensive payroll data including salaries, bonuses, and deductions",
      icon: DollarSign,
      category: "Compensation",
      frequency: "Monthly",
      lastRun: "5 days ago"
    },
    {
      id: 4,
      title: "Leave Analysis",
      description: "Leave utilization, balances, and trends across the organization",
      icon: Calendar,
      category: "Time Off",
      frequency: "Quarterly",
      lastRun: "1 week ago"
    },
    {
      id: 5,
      title: "Performance Metrics",
      description: "Performance review scores, ratings distribution, and trends",
      icon: TrendingUp,
      category: "Performance",
      frequency: "Quarterly",
      lastRun: "3 days ago"
    },
    {
      id: 6,
      title: "Recruitment Analytics",
      description: "Hiring pipeline, time-to-hire, and source effectiveness metrics",
      icon: Users,
      category: "Recruitment",
      frequency: "Monthly",
      lastRun: "4 days ago"
    },
  ];

  const recentReports = [
    {
      id: 1,
      name: "Q4_2024_Headcount_Report.pdf",
      type: "Headcount Report",
      generatedBy: "Sarah Johnson",
      date: "Dec 15, 2024",
      size: "2.4 MB"
    },
    {
      id: 2,
      name: "November_Attendance_Summary.xlsx",
      type: "Attendance Summary",
      generatedBy: "Lisa Anderson",
      date: "Dec 14, 2024",
      size: "1.8 MB"
    },
    {
      id: 3,
      name: "December_Payroll_Report.pdf",
      type: "Payroll Report",
      generatedBy: "System",
      date: "Dec 13, 2024",
      size: "3.2 MB"
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Reports & Analytics</h2>
        <p className="text-muted-foreground">Generate insights from HR data</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              Report Types
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">12</div>
            <p className="text-xs text-muted-foreground mt-1">Available templates</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-success" />
              Generated
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">347</div>
            <p className="text-xs text-muted-foreground mt-1">This quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Download className="h-4 w-4 text-warning" />
              Downloads
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">892</div>
            <p className="text-xs text-muted-foreground mt-1">Total downloads</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Clock className="h-4 w-4 text-chart-1" />
              Scheduled
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">8</div>
            <p className="text-xs text-muted-foreground mt-1">Automated reports</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>Generate comprehensive HR reports and analytics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {availableReports.map((report) => {
              const Icon = report.icon;
              return (
                <Card key={report.id} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-foreground">{report.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{report.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 mt-3 mb-4">
                          <Badge variant="outline">{report.category}</Badge>
                          <span className="text-xs text-muted-foreground">
                            {report.frequency} • Last run {report.lastRun}
                          </span>
                        </div>
                        <Button size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Generate Report
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>Previously generated reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentReports.map((report) => (
              <Card key={report.id} className="border-l-4 border-l-success">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-semibold text-foreground">{report.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {report.type} • Generated by {report.generatedBy} • {report.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">{report.size}</span>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
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
