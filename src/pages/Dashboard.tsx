import { MetricCard } from "@/components/MetricCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  UserCheck,
  Calendar,
  TrendingUp,
  Clock,
  AlertCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export default function Dashboard() {
  const recentActivities = [
    {
      id: 1,
      type: "leave",
      user: "Sarah Johnson",
      action: "requested leave",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "hire",
      user: "John Doe",
      action: "completed onboarding",
      time: "5 hours ago",
    },
    {
      id: 3,
      type: "attendance",
      user: "Mike Smith",
      action: "marked late",
      time: "1 day ago",
    },
    {
      id: 4,
      type: "performance",
      user: "Emma Wilson",
      action: "completed review",
      time: "2 days ago",
    },
  ];

  const pendingApprovals = [
    {
      id: 1,
      type: "Leave Request",
      user: "Jane Cooper",
      date: "Jan 15-20, 2025",
    },
    { id: 2, type: "Timesheet", user: "Robert Fox", date: "Week of Jan 8" },
    { id: 3, type: "Expense", user: "Wade Warren", date: "Jan 10, 2025" },
  ];

  const handleApprove = (user: string, type: string) => {
    toast({
      title: "Approved",
      description: `${type} for ${user} has been approved.`,
    });
  };

  const handleDeny = (user: string, type: string) => {
    toast({
      title: "Denied",
      description: `${type} for ${user} has been denied.`,
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Header - Clean, no icons or buttons */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Dashboard
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Welcome back! Here's your HR overview.
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/employees" className="block">
          <MetricCard
            title="Total Employees"
            value={247}
            icon={Users}
            trend="+12 this month"
            trendUp={true}
          />
        </Link>
        <Link to="/attendance" className="block">
          <MetricCard
            title="Present Today"
            value={234}
            icon={UserCheck}
            trend="94.7% attendance"
            trendUp={true}
          />
        </Link>
        <Link to="/leave" className="block">
          <MetricCard
            title="On Leave"
            value={8}
            icon={Calendar}
            trend="3 pending requests"
            trendUp={false}
          />
        </Link>
        <Link to="/recruitment" className="block">
          <MetricCard
            title="Open Positions"
            value={15}
            icon={TrendingUp}
            trend="5 interviews scheduled"
            trendUp={true}
          />
        </Link>
      </div>

      {/* Recent Activity & Pending Approvals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="overflow-hidden">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg sm:text-xl">
              Recent Activity
            </CardTitle>
            <CardDescription className="text-sm">
              Latest updates across your organization
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="mt-0.5 flex-shrink-0">
                    {activity.type === "leave" && (
                      <Calendar className="h-4 w-4 text-orange-500" />
                    )}
                    {activity.type === "hire" && (
                      <Users className="h-4 w-4 text-green-600" />
                    )}
                    {activity.type === "attendance" && (
                      <Clock className="h-4 w-4 text-red-600" />
                    )}
                    {activity.type === "performance" && (
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {activity.user}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Approvals */}
        <Card className="overflow-hidden">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-500" />
              Pending Approvals
            </CardTitle>
            <CardDescription className="text-sm">
              Items requiring your attention
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="space-y-4">
              {pendingApprovals.map((approval) => (
                <div
                  key={approval.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3 border-b last:border-0 last:pb-0"
                >
                  <div className="space-y-1">
                    <Badge variant="outline" className="text-xs">
                      {approval.type}
                    </Badge>
                    <p className="text-sm font-medium text-foreground">
                      {approval.user}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {approval.date}
                    </p>
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <button
                      onClick={() =>
                        handleApprove(approval.user, approval.type)
                      }
                      className="text-xs sm:text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDeny(approval.user, approval.type)}
                      className="text-xs sm:text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                    >
                      Deny
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-lg sm:text-xl">Quick Stats</CardTitle>
          <CardDescription className="text-sm">
            Department-wise breakdown
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                Engineering
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">
                85
              </p>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: "85%" }}
                />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Sales</p>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">
                62
              </p>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-600 rounded-full"
                  style={{ width: "62%" }}
                />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                Marketing
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">
                48
              </p>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500 rounded-full"
                  style={{ width: "48%" }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
