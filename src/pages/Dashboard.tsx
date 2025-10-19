import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, Calendar, TrendingUp, Clock, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  const recentActivities = [
    { id: 1, type: "leave", user: "Sarah Johnson", action: "requested leave", time: "2 hours ago" },
    { id: 2, type: "hire", user: "John Doe", action: "completed onboarding", time: "5 hours ago" },
    { id: 3, type: "attendance", user: "Mike Smith", action: "marked late", time: "1 day ago" },
    { id: 4, type: "performance", user: "Emma Wilson", action: "completed review", time: "2 days ago" },
  ];

  const pendingApprovals = [
    { id: 1, type: "Leave Request", user: "Jane Cooper", date: "Jan 15-20, 2025" },
    { id: 2, type: "Timesheet", user: "Robert Fox", date: "Week of Jan 8" },
    { id: 3, type: "Expense", user: "Wade Warren", date: "Jan 10, 2025" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h2>
        <p className="text-muted-foreground">Welcome back! Here's your HR overview.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Employees"
          value={247}
          icon={Users}
          trend="+12 this month"
          trendUp={true}
        />
        <MetricCard
          title="Present Today"
          value={234}
          icon={UserCheck}
          trend="94.7% attendance"
          trendUp={true}
        />
        <MetricCard
          title="On Leave"
          value={8}
          icon={Calendar}
          trend="3 pending requests"
          trendUp={false}
        />
        <MetricCard
          title="Open Positions"
          value={15}
          icon={TrendingUp}
          trend="5 interviews scheduled"
          trendUp={true}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates across your organization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4">
                  <div className="mt-1">
                    {activity.type === "leave" && <Calendar className="h-4 w-4 text-warning" />}
                    {activity.type === "hire" && <Users className="h-4 w-4 text-success" />}
                    {activity.type === "attendance" && <Clock className="h-4 w-4 text-destructive" />}
                    {activity.type === "performance" && <TrendingUp className="h-4 w-4 text-primary" />}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-foreground">
                      {activity.user}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-warning" />
              Pending Approvals
            </CardTitle>
            <CardDescription>Items requiring your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingApprovals.map((approval) => (
                <div key={approval.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{approval.type}</Badge>
                    </div>
                    <p className="text-sm font-medium text-foreground">{approval.user}</p>
                    <p className="text-xs text-muted-foreground">{approval.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-xs text-success hover:underline">Approve</button>
                    <button className="text-xs text-destructive hover:underline">Deny</button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Stats</CardTitle>
          <CardDescription>Department-wise breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Engineering</p>
              <p className="text-2xl font-bold text-foreground">85</p>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: "85%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Sales</p>
              <p className="text-2xl font-bold text-foreground">62</p>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-success" style={{ width: "62%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Marketing</p>
              <p className="text-2xl font-bold text-foreground">48</p>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-warning" style={{ width: "48%" }} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
