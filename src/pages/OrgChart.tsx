import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Network, Users, Building2, TrendingUp } from "lucide-react";

export default function OrgChart() {
  const departments = [
    {
      name: "Executive",
      head: "Robert Smith",
      headRole: "CEO",
      employees: 3,
      teams: 0,
      color: "bg-primary"
    },
    {
      name: "Engineering",
      head: "Sarah Johnson",
      headRole: "VP Engineering",
      employees: 45,
      teams: 4,
      color: "bg-chart-1"
    },
    {
      name: "Product",
      head: "Mike Chen",
      headRole: "VP Product",
      employees: 18,
      teams: 2,
      color: "bg-chart-2"
    },
    {
      name: "Marketing",
      head: "Emma Wilson",
      headRole: "Marketing Director",
      employees: 22,
      teams: 3,
      color: "bg-chart-3"
    },
    {
      name: "Sales",
      head: "John Doe",
      headRole: "Sales Director",
      employees: 34,
      teams: 5,
      color: "bg-chart-4"
    },
    {
      name: "Human Resources",
      head: "Lisa Anderson",
      headRole: "HR Manager",
      employees: 8,
      teams: 2,
      color: "bg-chart-5"
    },
  ];

  const orgStructure = [
    {
      level: 1,
      title: "Executive Leadership",
      positions: [
        { name: "Robert Smith", role: "CEO", reports: 6 }
      ]
    },
    {
      level: 2,
      title: "Department Heads",
      positions: [
        { name: "Sarah Johnson", role: "VP Engineering", reports: 45 },
        { name: "Mike Chen", role: "VP Product", reports: 18 },
        { name: "Emma Wilson", role: "Marketing Director", reports: 22 },
        { name: "John Doe", role: "Sales Director", reports: 34 },
        { name: "Lisa Anderson", role: "HR Manager", reports: 8 },
        { name: "David Brown", role: "Analytics Director", reports: 12 },
      ]
    },
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Organization Chart</h2>
        <p className="text-muted-foreground">Visualize company hierarchy and reporting structure</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              Departments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">6</div>
            <p className="text-xs text-muted-foreground mt-1">Active departments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Users className="h-4 w-4 text-success" />
              Total Employees
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">247</div>
            <p className="text-xs text-muted-foreground mt-1">Across all departments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Network className="h-4 w-4 text-warning" />
              Teams
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">16</div>
            <p className="text-xs text-muted-foreground mt-1">Active teams</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-chart-1" />
              Managers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">28</div>
            <p className="text-xs text-muted-foreground mt-1">Leadership positions</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Organization Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {orgStructure.map((level) => (
              <div key={level.level}>
                <h3 className="text-sm font-medium text-muted-foreground mb-4">{level.title}</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  {level.positions.map((position, idx) => (
                    <Card key={idx} className="border-l-4 border-l-primary">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                              {getInitials(position.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{position.name}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{position.role}</p>
                            <Badge variant="outline" className="text-xs">
                              <Users className="h-3 w-3 mr-1" />
                              {position.reports} direct reports
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Departments Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {departments.map((dept) => (
              <Card key={dept.name} className={`border-l-4 border-l-primary`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-1">{dept.name}</h4>
                      <p className="text-sm text-muted-foreground">{dept.head}</p>
                      <p className="text-xs text-muted-foreground">{dept.headRole}</p>
                    </div>
                    <Badge className={dept.color}>
                      {dept.employees} employees
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Network className="h-4 w-4" />
                      {dept.teams} teams
                    </span>
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
