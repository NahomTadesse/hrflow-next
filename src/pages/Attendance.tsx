import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, XCircle, Calendar } from "lucide-react";

export default function Attendance() {
  const todayAttendance = [
    { id: 1, name: "Sarah Johnson", checkIn: "09:00 AM", status: "on-time" },
    { id: 2, name: "Mike Chen", checkIn: "09:15 AM", status: "late" },
    { id: 3, name: "Emma Wilson", checkIn: "08:55 AM", status: "on-time" },
    { id: 4, name: "John Doe", checkIn: "09:30 AM", status: "late" },
    { id: 5, name: "Lisa Anderson", checkIn: "09:00 AM", status: "on-time" },
    { id: 6, name: "David Brown", checkIn: "-", status: "absent" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "on-time":
        return (
          <Badge className="bg-success text-success-foreground">
            <CheckCircle className="h-3 w-3 mr-1" />
            On Time
          </Badge>
        );
      case "late":
        return (
          <Badge className="bg-warning text-warning-foreground">
            <Clock className="h-3 w-3 mr-1" />
            Late
          </Badge>
        );
      case "absent":
        return (
          <Badge variant="destructive">
            <XCircle className="h-3 w-3 mr-1" />
            Absent
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Attendance Tracking</h2>
        <p className="text-muted-foreground">Monitor employee attendance and punctuality</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Present Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">234</div>
            <p className="text-xs text-muted-foreground mt-1">94.7% attendance rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Clock className="h-4 w-4 text-warning" />
              Late Arrivals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">8</div>
            <p className="text-xs text-muted-foreground mt-1">3.2% of present employees</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <XCircle className="h-4 w-4 text-destructive" />
              Absent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">13</div>
            <p className="text-xs text-muted-foreground mt-1">5 on approved leave</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Today's Attendance
          </CardTitle>
          <CardDescription>Real-time attendance tracking for {new Date().toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {todayAttendance.map((record) => (
              <Card key={record.id} className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">{record.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">Check-in: {record.checkIn}</p>
                    </div>
                    {getStatusBadge(record.status)}
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
