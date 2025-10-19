import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plus, CheckCircle, XCircle, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LeaveManagement() {
  const leaveRequests = [
    { id: 1, employee: "Sarah Johnson", type: "Vacation", from: "Jan 15, 2025", to: "Jan 20, 2025", days: 5, status: "pending" },
    { id: 2, employee: "Mike Chen", type: "Sick Leave", from: "Jan 12, 2025", to: "Jan 13, 2025", days: 2, status: "approved" },
    { id: 3, employee: "Emma Wilson", type: "Personal", from: "Jan 18, 2025", to: "Jan 19, 2025", days: 2, status: "pending" },
    { id: 4, employee: "John Doe", type: "Vacation", from: "Jan 10, 2025", to: "Jan 11, 2025", days: 2, status: "rejected" },
  ];

  const leaveBalance = [
    { type: "Vacation", total: 20, used: 5, remaining: 15 },
    { type: "Sick Leave", total: 10, used: 2, remaining: 8 },
    { type: "Personal", total: 5, used: 1, remaining: 4 },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-success text-success-foreground">Approved</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      case "pending":
        return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "rejected":
        return <XCircle className="h-4 w-4 text-destructive" />;
      case "pending":
        return <Clock className="h-4 w-4 text-warning" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Leave Management</h2>
          <p className="text-muted-foreground">Manage time-off requests and leave balances</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Request Leave
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {leaveBalance.map((balance) => (
          <Card key={balance.type}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {balance.type}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Days</span>
                  <span className="font-medium text-foreground">{balance.total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Used</span>
                  <span className="font-medium text-foreground">{balance.used}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-foreground">Remaining</span>
                  <span className="text-primary">{balance.remaining}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden mt-3">
                  <div 
                    className="h-full bg-primary" 
                    style={{ width: `${(balance.remaining / balance.total) * 100}%` }} 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Leave Requests</CardTitle>
          <CardDescription>Review and manage employee leave requests</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4 mt-4">
              {leaveRequests.map((request) => (
                <Card key={request.id} className="border-l-4 border-l-primary">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        {getStatusIcon(request.status)}
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-foreground">{request.employee}</h4>
                            <Badge variant="outline">{request.type}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {request.from} - {request.to} ({request.days} days)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {getStatusBadge(request.status)}
                        {request.status === "pending" && (
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="text-success border-success hover:bg-success hover:text-success-foreground">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                              <XCircle className="h-4 w-4 mr-1" />
                              Reject
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="pending" className="space-y-4 mt-4">
              {leaveRequests.filter(r => r.status === "pending").map((request) => (
                <Card key={request.id} className="border-l-4 border-l-warning">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        {getStatusIcon(request.status)}
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-foreground">{request.employee}</h4>
                            <Badge variant="outline">{request.type}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {request.from} - {request.to} ({request.days} days)
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="text-success border-success hover:bg-success hover:text-success-foreground">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button size="sm" variant="outline" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="approved" className="mt-4">
              <p className="text-sm text-muted-foreground">Approved leave requests will appear here</p>
            </TabsContent>
            <TabsContent value="rejected" className="mt-4">
              <p className="text-sm text-muted-foreground">Rejected leave requests will appear here</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
