import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, Download, Search, Calendar, TrendingUp, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { MetricCard } from "@/components/MetricCard";

export default function Payroll() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  const payrollData = [
    { id: 1, employee: "Sarah Johnson", department: "Engineering", salary: "$8,500", status: "Processed", date: "2024-01-31", netPay: "$7,225" },
    { id: 2, employee: "Michael Chen", department: "Design", salary: "$7,200", status: "Processed", date: "2024-01-31", netPay: "$6,120" },
    { id: 3, employee: "Emily Rodriguez", department: "Marketing", salary: "$6,800", status: "Pending", date: "2024-01-31", netPay: "$5,780" },
    { id: 4, employee: "David Kim", department: "Sales", salary: "$9,000", status: "Processed", date: "2024-01-31", netPay: "$7,650" },
    { id: 5, employee: "Lisa Anderson", department: "HR", salary: "$7,500", status: "Processed", date: "2024-01-31", netPay: "$6,375" },
  ];

  const upcomingPayments = [
    { id: 1, description: "Monthly Salaries", amount: "$285,000", dueDate: "2024-02-28", employees: 42 },
    { id: 2, description: "Bonus Payments", amount: "$45,000", dueDate: "2024-02-15", employees: 15 },
    { id: 3, description: "Commission Payouts", amount: "$28,500", dueDate: "2024-02-10", employees: 8 },
  ];

  const handleProcessPayroll = () => {
    toast({
      title: "Payroll Processing Started",
      description: "Processing payroll for 42 employees. This may take a few minutes.",
    });
  };

  const handleDownloadPayslip = (employee: string) => {
    toast({
      title: "Downloading Payslip",
      description: `Payslip for ${employee} is being downloaded.`,
    });
  };

  const handleGenerateReport = () => {
    toast({
      title: "Generating Report",
      description: "Payroll report is being generated and will be downloaded shortly.",
    });
  };

  const filteredPayroll = payrollData.filter(item =>
    item.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Payroll Management</h1>
          <p className="text-muted-foreground mt-1">Manage employee compensation and payments</p>
        </div>
        <Button onClick={handleProcessPayroll} className="gap-2">
          <DollarSign className="h-4 w-4" />
          Process Payroll
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard
          title="Total Monthly Payroll"
          value="$285,000"
          icon={DollarSign}
          trend="+3.2% from last month"
          trendUp={true}
        />
        <MetricCard
          title="Employees on Payroll"
          value="42"
          icon={Users}
          trend="+2 new hires"
          trendUp={true}
        />
        <MetricCard
          title="Avg. Salary"
          value="$6,786"
          icon={TrendingUp}
          trend="+5.1% from last year"
          trendUp={true}
        />
        <MetricCard
          title="Next Payment"
          value="Feb 28"
          icon={Calendar}
          trend="15 days remaining"
          trendUp={false}
        />
      </div>

      <Tabs defaultValue="current" className="space-y-4">
        <TabsList>
          <TabsTrigger value="current">Current Period</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Payments</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Payroll Period</CardTitle>
              <CardDescription>January 2024 payroll processing</CardDescription>
              <div className="flex gap-2 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search employees..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8"
                  />
                </div>
                <Button variant="outline" onClick={handleGenerateReport}>
                  <Download className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Gross Salary</TableHead>
                    <TableHead>Net Pay</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPayroll.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.employee}</TableCell>
                      <TableCell>{item.department}</TableCell>
                      <TableCell>{item.salary}</TableCell>
                      <TableCell className="font-semibold">{item.netPay}</TableCell>
                      <TableCell>
                        <Badge variant={item.status === "Processed" ? "default" : "secondary"}>
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDownloadPayslip(item.employee)}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Payments</CardTitle>
              <CardDescription>Scheduled payments for the next period</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingPayments.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-semibold text-foreground">{payment.description}</p>
                      <p className="text-sm text-muted-foreground">{payment.employees} employees · Due {payment.dueDate}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-foreground">{payment.amount}</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Schedule Payment
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Previous payroll periods</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Period</TableHead>
                    <TableHead>Total Amount</TableHead>
                    <TableHead>Employees</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>December 2023</TableCell>
                    <TableCell className="font-semibold">$276,500</TableCell>
                    <TableCell>40</TableCell>
                    <TableCell><Badge>Completed</Badge></TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>November 2023</TableCell>
                    <TableCell className="font-semibold">$268,000</TableCell>
                    <TableCell>38</TableCell>
                    <TableCell><Badge>Completed</Badge></TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>October 2023</TableCell>
                    <TableCell className="font-semibold">$265,200</TableCell>
                    <TableCell>38</TableCell>
                    <TableCell><Badge>Completed</Badge></TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
