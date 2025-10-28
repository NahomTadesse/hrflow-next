// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Calendar, Plus, CheckCircle, XCircle, Clock } from "lucide-react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useToast } from "@/hooks/use-toast";
// import { useState } from "react";

// export default function LeaveManagement() {
//   const { toast } = useToast();
//   const [requests, setRequests] = useState([
//     { id: 1, employee: "Sarah Johnson", type: "Vacation", from: "Jan 15, 2025", to: "Jan 20, 2025", days: 5, status: "pending" },
//     { id: 2, employee: "Mike Chen", type: "Sick Leave", from: "Jan 12, 2025", to: "Jan 13, 2025", days: 2, status: "approved" },
//     { id: 3, employee: "Emma Wilson", type: "Personal", from: "Jan 18, 2025", to: "Jan 19, 2025", days: 2, status: "pending" },
//     { id: 4, employee: "John Doe", type: "Vacation", from: "Jan 10, 2025", to: "Jan 11, 2025", days: 2, status: "rejected" },
//   ]);
//   const handleRequestLeave = () => {
//     toast({
//       title: "Leave Request",
//       description: "Opening leave request form...",
//     });
//   };

//   const handleApprove = (id: number, employee: string) => {
//     setRequests(requests.map(r => r.id === id ? { ...r, status: "approved" } : r));
//     toast({
//       title: "Leave Approved",
//       description: `${employee}'s leave request has been approved.`,
//     });
//   };

//   const handleReject = (id: number, employee: string) => {
//     setRequests(requests.map(r => r.id === id ? { ...r, status: "rejected" } : r));
//     toast({
//       title: "Leave Rejected",
//       description: `${employee}'s leave request has been rejected.`,
//       variant: "destructive",
//     });
//   };

//   const leaveBalance = [
//     { type: "Vacation", total: 20, used: 5, remaining: 15 },
//     { type: "Sick Leave", total: 10, used: 2, remaining: 8 },
//     { type: "Personal", total: 5, used: 1, remaining: 4 },
//   ];

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case "approved":
//         return <Badge className="bg-success text-success-foreground">Approved</Badge>;
//       case "rejected":
//         return <Badge variant="destructive">Rejected</Badge>;
//       case "pending":
//         return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
//       default:
//         return <Badge variant="secondary">{status}</Badge>;
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case "approved":
//         return <CheckCircle className="h-4 w-4 text-success" />;
//       case "rejected":
//         return <XCircle className="h-4 w-4 text-destructive" />;
//       case "pending":
//         return <Clock className="h-4 w-4 text-warning" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h2 className="text-3xl font-bold tracking-tight text-foreground">Leave Management</h2>
//           <p className="text-muted-foreground">Manage time-off requests and leave balances</p>
//         </div>
//         <Button onClick={handleRequestLeave}>
//           <Plus className="mr-2 h-4 w-4" />
//           Request Leave
//         </Button>
//       </div>

//       <div className="grid gap-4 md:grid-cols-3">
//         {leaveBalance.map((balance) => (
//           <Card key={balance.type}>
//             <CardHeader className="pb-3">
//               <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
//                 <Calendar className="h-4 w-4" />
//                 {balance.type}
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-2">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Total Days</span>
//                   <span className="font-medium text-foreground">{balance.total}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Used</span>
//                   <span className="font-medium text-foreground">{balance.used}</span>
//                 </div>
//                 <div className="flex justify-between text-sm font-semibold">
//                   <span className="text-foreground">Remaining</span>
//                   <span className="text-primary">{balance.remaining}</span>
//                 </div>
//                 <div className="h-2 bg-secondary rounded-full overflow-hidden mt-3">
//                   <div 
//                     className="h-full bg-primary" 
//                     style={{ width: `${(balance.remaining / balance.total) * 100}%` }} 
//                   />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Leave Requests</CardTitle>
//           <CardDescription>Review and manage employee leave requests</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Tabs defaultValue="all" className="w-full">
//             <TabsList className="grid w-full grid-cols-4">
//               <TabsTrigger value="all">All</TabsTrigger>
//               <TabsTrigger value="pending">Pending</TabsTrigger>
//               <TabsTrigger value="approved">Approved</TabsTrigger>
//               <TabsTrigger value="rejected">Rejected</TabsTrigger>
//             </TabsList>
//             <TabsContent value="all" className="space-y-4 mt-4">
//               {requests.map((request) => (
//                 <Card key={request.id} className="border-l-4 border-l-primary">
//                   <CardContent className="p-4">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-start gap-3">
//                         {getStatusIcon(request.status)}
//                         <div>
//                           <div className="flex items-center gap-2">
//                             <h4 className="font-semibold text-foreground">{request.employee}</h4>
//                             <Badge variant="outline">{request.type}</Badge>
//                           </div>
//                           <p className="text-sm text-muted-foreground mt-1">
//                             {request.from} - {request.to} ({request.days} days)
//                           </p>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-3">
//                         {getStatusBadge(request.status)}
//                         {request.status === "pending" && (
//                           <div className="flex gap-2">
//                             <Button 
//                               size="sm" 
//                               variant="outline" 
//                               className="text-success border-success hover:bg-success hover:text-success-foreground"
//                               onClick={() => handleApprove(request.id, request.employee)}
//                             >
//                               <CheckCircle className="h-4 w-4 mr-1" />
//                               Approve
//                             </Button>
//                             <Button 
//                               size="sm" 
//                               variant="outline" 
//                               className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
//                               onClick={() => handleReject(request.id, request.employee)}
//                             >
//                               <XCircle className="h-4 w-4 mr-1" />
//                               Reject
//                             </Button>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </TabsContent>
//             <TabsContent value="pending" className="space-y-4 mt-4">
//               {requests.filter(r => r.status === "pending").map((request) => (
//                 <Card key={request.id} className="border-l-4 border-l-warning">
//                   <CardContent className="p-4">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-start gap-3">
//                         {getStatusIcon(request.status)}
//                         <div>
//                           <div className="flex items-center gap-2">
//                             <h4 className="font-semibold text-foreground">{request.employee}</h4>
//                             <Badge variant="outline">{request.type}</Badge>
//                           </div>
//                           <p className="text-sm text-muted-foreground mt-1">
//                             {request.from} - {request.to} ({request.days} days)
//                           </p>
//                         </div>
//                       </div>
//                       <div className="flex gap-2">
//                         <Button 
//                           size="sm" 
//                           variant="outline" 
//                           className="text-success border-success hover:bg-success hover:text-success-foreground"
//                           onClick={() => handleApprove(request.id, request.employee)}
//                         >
//                           <CheckCircle className="h-4 w-4 mr-1" />
//                           Approve
//                         </Button>
//                         <Button 
//                           size="sm" 
//                           variant="outline" 
//                           className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
//                           onClick={() => handleReject(request.id, request.employee)}
//                         >
//                           <XCircle className="h-4 w-4 mr-1" />
//                           Reject
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </TabsContent>
//             <TabsContent value="approved" className="space-y-4 mt-4">
//               {requests.filter(r => r.status === "approved").length > 0 ? (
//                 requests.filter(r => r.status === "approved").map((request) => (
//                   <Card key={request.id} className="border-l-4 border-l-success">
//                     <CardContent className="p-4">
//                       <div className="flex items-start gap-3">
//                         <CheckCircle className="h-4 w-4 text-success mt-1" />
//                         <div>
//                           <div className="flex items-center gap-2">
//                             <h4 className="font-semibold text-foreground">{request.employee}</h4>
//                             <Badge variant="outline">{request.type}</Badge>
//                           </div>
//                           <p className="text-sm text-muted-foreground mt-1">
//                             {request.from} - {request.to} ({request.days} days)
//                           </p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))
//               ) : (
//                 <p className="text-sm text-muted-foreground">No approved leave requests</p>
//               )}
//             </TabsContent>
//             <TabsContent value="rejected" className="space-y-4 mt-4">
//               {requests.filter(r => r.status === "rejected").length > 0 ? (
//                 requests.filter(r => r.status === "rejected").map((request) => (
//                   <Card key={request.id} className="border-l-4 border-l-destructive">
//                     <CardContent className="p-4">
//                       <div className="flex items-start gap-3">
//                         <XCircle className="h-4 w-4 text-destructive mt-1" />
//                         <div>
//                           <div className="flex items-center gap-2">
//                             <h4 className="font-semibold text-foreground">{request.employee}</h4>
//                             <Badge variant="outline">{request.type}</Badge>
//                           </div>
//                           <p className="text-sm text-muted-foreground mt-1">
//                             {request.from} - {request.to} ({request.days} days)
//                           </p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))
//               ) : (
//                 <p className="text-sm text-muted-foreground">No rejected leave requests</p>
//               )}
//             </TabsContent>
//           </Tabs>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plus, CheckCircle, XCircle, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LeaveRequest {
  id: number;
  employee: string;
  type: string;
  from: string;
  to: string;
  days: number;
  status: "pending" | "approved" | "rejected";
}

export default function LeaveManagement() {
  const { toast } = useToast();
  const [requests, setRequests] = useState<LeaveRequest[]>([
    { id: 1, employee: "Sarah Johnson", type: "Vacation", from: "2025-01-15", to: "2025-01-20", days: 5, status: "pending" },
    { id: 2, employee: "Mike Chen", type: "Sick Leave", from: "2025-01-12", to: "2025-01-13", days: 2, status: "approved" },
    { id: 3, employee: "Emma Wilson", type: "Personal", from: "2025-01-18", to: "2025-01-19", days: 2, status: "pending" },
    { id: 4, employee: "John Doe", type: "Vacation", from: "2025-01-10", to: "2025-01-11", days: 2, status: "rejected" },
  ]);

  // Modal state
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [leaveForm, setLeaveForm] = useState({
    employee: "",
    type: "Vacation",
    from: "",
    to: "",
    reason: "",
  });

  const handleRequestLeave = () => {
    setIsRequestOpen(true);
  };

  const calculateDays = (from: string, to: string): number => {
    const start = new Date(from);
    const end = new Date(to);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };

  const handleSubmitLeave = () => {
    if (!leaveForm.employee || !leaveForm.from || !leaveForm.to) {
      toast({
        title: "Missing fields",
        description: "Please fill in employee name, from date, and to date.",
        variant: "destructive",
      });
      return;
    }

    if (new Date(leaveForm.to) < new Date(leaveForm.from)) {
      toast({
        title: "Invalid dates",
        description: "End date cannot be before start date.",
        variant: "destructive",
      });
      return;
    }

    const days = calculateDays(leaveForm.from, leaveForm.to);
    const newRequest: LeaveRequest = {
      id: requests.length + 1,
      employee: leaveForm.employee,
      type: leaveForm.type,
      from: leaveForm.from,
      to: leaveForm.to,
      days,
      status: "pending",
    };

    setRequests([newRequest, ...requests]);

    toast({
      title: "Leave Requested",
      description: `${leaveForm.employee} requested ${days} day(s) of ${leaveForm.type}.`,
    });

    // Reset form
    setLeaveForm({
      employee: "",
      type: "Vacation",
      from: "",
      to: "",
      reason: "",
    });
    setIsRequestOpen(false);
  };

  const handleApprove = (id: number, employee: string) => {
    setRequests(requests.map(r => r.id === id ? { ...r, status: "approved" } : r));
    toast({
      title: "Leave Approved",
      description: `${employee}'s leave request has been approved.`,
    });
  };

  const handleReject = (id: number, employee: string) => {
    setRequests(requests.map(r => r.id === id ? { ...r, status: "rejected" } : r));
    toast({
      title: "Leave Rejected",
      description: `${employee}'s leave request has been rejected.`,
      variant: "destructive",
    });
  };

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
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Leave Management</h2>
          <p className="text-muted-foreground">Manage time-off requests and leave balances</p>
        </div>
        <Button onClick={handleRequestLeave}>
          <Plus className="mr-2 h-4 w-4" />
          Request Leave
        </Button>
      </div>

      {/* Leave Balance Cards */}
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

      {/* Leave Requests */}
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

            {/* All Requests */}
            <TabsContent value="all" className="space-y-4 mt-4">
              {requests.map((request) => (
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
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="text-success border-success hover:bg-success hover:text-success-foreground"
                              onClick={() => handleApprove(request.id, request.employee)}
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                              onClick={() => handleReject(request.id, request.employee)}
                            >
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

            {/* Pending */}
            <TabsContent value="pending" className="space-y-4 mt-4">
              {requests.filter(r => r.status === "pending").map((request) => (
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
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-success border-success hover:bg-success hover:text-success-foreground"
                          onClick={() => handleApprove(request.id, request.employee)}
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                          onClick={() => handleReject(request.id, request.employee)}
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Approved */}
            <TabsContent value="approved" className="space-y-4 mt-4">
              {requests.filter(r => r.status === "approved").length > 0 ? (
                requests.filter(r => r.status === "approved").map((request) => (
                  <Card key={request.id} className="border-l-4 border-l-success">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-success mt-1" />
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
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No approved leave requests</p>
              )}
            </TabsContent>

            {/* Rejected */}
            <TabsContent value="rejected" className="space-y-4 mt-4">
              {requests.filter(r => r.status === "rejected").length > 0 ? (
                requests.filter(r => r.status === "rejected").map((request) => (
                  <Card key={request.id} className="border-l-4 border-l-destructive">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-4 w-4 text-destructive mt-1" />
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
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No rejected leave requests</p>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Request Leave Modal - Two Columns */}
      <Dialog open={isRequestOpen} onOpenChange={setIsRequestOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Request Leave</DialogTitle>
            <DialogDescription>
              Submit a new leave request for approval.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="employee">Employee Name *</Label>
                  <Input
                    id="employee"
                    value={leaveForm.employee}
                    onChange={(e) => setLeaveForm({ ...leaveForm, employee: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Leave Type *</Label>
                  <Select
                    value={leaveForm.type}
                    onValueChange={(v) => setLeaveForm({ ...leaveForm, type: v })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select leave type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Vacation">Vacation</SelectItem>
                      <SelectItem value="Sick Leave">Sick Leave</SelectItem>
                      <SelectItem value="Personal">Personal</SelectItem>
                      <SelectItem value="Bereavement">Bereavement</SelectItem>
                      <SelectItem value="Maternity/Paternity">Maternity/Paternity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="from">From Date *</Label>
                  <Input
                    id="from"
                    type="date"
                    value={leaveForm.from}
                    onChange={(e) => setLeaveForm({ ...leaveForm, from: e.target.value })}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="to">To Date *</Label>
                  <Input
                    id="to"
                    type="date"
                    value={leaveForm.to}
                    onChange={(e) => setLeaveForm({ ...leaveForm, to: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason (Optional)</Label>
                  <Input
                    id="reason"
                    value={leaveForm.reason}
                    onChange={(e) => setLeaveForm({ ...leaveForm, reason: e.target.value })}
                    placeholder="Brief reason for leave..."
                  />
                </div>

                {/* Calculated Days */}
                {leaveForm.from && leaveForm.to && new Date(leaveForm.to) >= new Date(leaveForm.from) && (
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Total Days</span>
                    <span className="text-lg font-bold text-primary">
                      {calculateDays(leaveForm.from, leaveForm.to)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsRequestOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmitLeave}>Submit Request</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}