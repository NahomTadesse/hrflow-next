// import { useState } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Checkbox } from "@/components/ui/checkbox";
// import { UserPlus, Clock, CheckCircle2, FileText, Calendar, Users } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// import { MetricCard } from "@/components/MetricCard";

// interface OnboardingTask {
//   id: number;
//   task: string;
//   completed: boolean;
// }

// export default function Onboarding() {
//   const { toast } = useToast();

//   const [newHires, setNewHires] = useState([
//     { 
//       id: 1, 
//       name: "Alex Thompson", 
//       position: "Senior Developer", 
//       startDate: "2024-02-15", 
//       progress: 75,
//       department: "Engineering",
//       tasks: [
//         { id: 1, task: "Complete employment forms", completed: true },
//         { id: 2, task: "Setup workspace and equipment", completed: true },
//         { id: 3, task: "IT account creation", completed: true },
//         { id: 4, task: "Department orientation", completed: false },
//         { id: 5, task: "Meet with manager", completed: false },
//       ]
//     },
//     { 
//       id: 2, 
//       name: "Jordan Lee", 
//       position: "UX Designer", 
//       startDate: "2024-02-20", 
//       progress: 40,
//       department: "Design",
//       tasks: [
//         { id: 1, task: "Complete employment forms", completed: true },
//         { id: 2, task: "Setup workspace and equipment", completed: true },
//         { id: 3, task: "IT account creation", completed: false },
//         { id: 4, task: "Department orientation", completed: false },
//         { id: 5, task: "Meet with manager", completed: false },
//       ]
//     },
//     { 
//       id: 3, 
//       name: "Sam Rivera", 
//       position: "Marketing Manager", 
//       startDate: "2024-03-01", 
//       progress: 20,
//       department: "Marketing",
//       tasks: [
//         { id: 1, task: "Complete employment forms", completed: true },
//         { id: 2, task: "Setup workspace and equipment", completed: false },
//         { id: 3, task: "IT account creation", completed: false },
//         { id: 4, task: "Department orientation", completed: false },
//         { id: 5, task: "Meet with manager", completed: false },
//       ]
//     },
//   ]);

//   const upcomingStarts = [
//     { id: 1, name: "Casey Morgan", position: "Sales Rep", date: "2024-03-10", department: "Sales" },
//     { id: 2, name: "Taylor Wilson", position: "HR Coordinator", date: "2024-03-15", department: "HR" },
//   ];

//   const handleStartOnboarding = () => {
//     toast({
//       title: "Onboarding Initiated",
//       description: "New employee onboarding process has been started.",
//     });
//   };

//   const handleToggleTask = (hireId: number, taskId: number) => {
//     setNewHires(prev => prev.map(hire => {
//       if (hire.id === hireId) {
//         const updatedTasks = hire.tasks.map(task =>
//           task.id === taskId ? { ...task, completed: !task.completed } : task
//         );
//         const completedCount = updatedTasks.filter(t => t.completed).length;
//         const progress = (completedCount / updatedTasks.length) * 100;
        
//         return { ...hire, tasks: updatedTasks, progress };
//       }
//       return hire;
//     }));

//     toast({
//       title: "Task Updated",
//       description: "Onboarding task status has been updated.",
//     });
//   };

//   const handleSendReminder = (name: string) => {
//     toast({
//       title: "Reminder Sent",
//       description: `Onboarding reminder sent to ${name}`,
//     });
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <div>
//           <h1 className="text-3xl font-bold text-foreground">Employee Onboarding</h1>
//           <p className="text-muted-foreground mt-1">Streamline new employee onboarding process</p>
//         </div>
//         <Button onClick={handleStartOnboarding} className="gap-2">
//           <UserPlus className="h-4 w-4" />
//           Start New Onboarding
//         </Button>
//       </div>

//       <div className="grid gap-4 md:grid-cols-4">
//         <MetricCard
//           title="Active Onboarding"
//           value="3"
//           icon={Users}
//           trend="2 starting this month"
//           trendUp={true}
//         />
//         <MetricCard
//           title="Completed This Month"
//           value="5"
//           icon={CheckCircle2}
//           trend="+2 from last month"
//           trendUp={true}
//         />
//         <MetricCard
//           title="Avg. Completion Time"
//           value="12 days"
//           icon={Clock}
//           trend="-2 days improvement"
//           trendUp={true}
//         />
//         <MetricCard
//           title="Upcoming Starts"
//           value="2"
//           icon={Calendar}
//           trend="Next: March 10"
//           trendUp={false}
//         />
//       </div>

//       <Tabs defaultValue="active" className="space-y-4">
//         <TabsList>
//           <TabsTrigger value="active">Active Onboarding</TabsTrigger>
//           <TabsTrigger value="upcoming">Upcoming Starts</TabsTrigger>
//           <TabsTrigger value="templates">Onboarding Templates</TabsTrigger>
//         </TabsList>

//         <TabsContent value="active" className="space-y-4">
//           {newHires.map((hire) => (
//             <Card key={hire.id}>
//               <CardHeader>
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <CardTitle>{hire.name}</CardTitle>
//                     <CardDescription>
//                       {hire.position} · {hire.department} · Starts {hire.startDate}
//                     </CardDescription>
//                   </div>
//                   <div className="flex gap-2">
//                     <Badge variant={hire.progress === 100 ? "default" : "secondary"}>
//                       {hire.progress}% Complete
//                     </Badge>
//                   </div>
//                 </div>
//                 <Progress value={hire.progress} className="mt-4" />
//               </CardHeader>
//               <CardContent className="space-y-3">
//                 <p className="font-semibold text-sm text-foreground mb-3">Onboarding Checklist:</p>
//                 {hire.tasks.map((task) => (
//                   <div key={task.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
//                     <Checkbox
//                       id={`task-${hire.id}-${task.id}`}
//                       checked={task.completed}
//                       onCheckedChange={() => handleToggleTask(hire.id, task.id)}
//                     />
//                     <label
//                       htmlFor={`task-${hire.id}-${task.id}`}
//                       className={`flex-1 cursor-pointer ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}
//                     >
//                       {task.task}
//                     </label>
//                     {task.completed && <CheckCircle2 className="h-4 w-4 text-success" />}
//                   </div>
//                 ))}
//                 <div className="flex gap-2 pt-4 border-t">
//                   <Button variant="outline" onClick={() => handleSendReminder(hire.name)}>
//                     Send Reminder
//                   </Button>
//                   <Button variant="outline">View Details</Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </TabsContent>

//         <TabsContent value="upcoming" className="space-y-4">
//           <Card>
//             <CardHeader>
//               <CardTitle>Upcoming New Hires</CardTitle>
//               <CardDescription>Employees scheduled to start soon</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 {upcomingStarts.map((hire) => (
//                   <div key={hire.id} className="flex items-center justify-between p-4 border rounded-lg">
//                     <div>
//                       <p className="font-semibold text-foreground">{hire.name}</p>
//                       <p className="text-sm text-muted-foreground">
//                         {hire.position} · {hire.department}
//                       </p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-sm font-medium text-foreground">Start Date: {hire.date}</p>
//                       <Button variant="outline" size="sm" className="mt-2">
//                         Prepare Onboarding
//                       </Button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="templates" className="space-y-4">
//           <Card>
//             <CardHeader>
//               <CardTitle>Onboarding Templates</CardTitle>
//               <CardDescription>Pre-configured onboarding workflows</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 {[
//                   { name: "Engineering Onboarding", tasks: 12, duration: "2 weeks" },
//                   { name: "Sales Team Onboarding", tasks: 10, duration: "1 week" },
//                   { name: "Remote Employee Onboarding", tasks: 15, duration: "3 weeks" },
//                   { name: "Manager Onboarding", tasks: 14, duration: "2 weeks" },
//                 ].map((template, index) => (
//                   <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
//                     <div className="flex items-center gap-3">
//                       <FileText className="h-8 w-8 text-primary" />
//                       <div>
//                         <p className="font-semibold text-foreground">{template.name}</p>
//                         <p className="text-sm text-muted-foreground">
//                           {template.tasks} tasks · {template.duration}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex gap-2">
//                       <Button variant="outline" size="sm">Edit</Button>
//                       <Button size="sm">Use Template</Button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }




import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { UserPlus, Clock, CheckCircle2, FileText, Calendar, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { MetricCard } from "@/components/MetricCard";
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

interface OnboardingTask {
  id: number;
  task: string;
  completed: boolean;
}

interface NewHire {
  id: number;
  name: string;
  position: string;
  startDate: string;
  progress: number;
  department: string;
  tasks: OnboardingTask[];
}

export default function Onboarding() {
  const { toast } = useToast();

  const [newHires, setNewHires] = useState<NewHire[]>([
    {
      id: 1,
      name: "Alex Thompson",
      position: "Senior Developer",
      startDate: "2024-02-15",
      progress: 75,
      department: "Engineering",
      tasks: [
        { id: 1, task: "Complete employment forms", completed: true },
        { id: 2, task: "Setup workspace and equipment", completed: true },
        { id: 3, task: "IT account creation", completed: true },
        { id: 4, task: "Department orientation", completed: false },
        { id: 5, task: "Meet with manager", completed: false },
      ],
    },
    {
      id: 2,
      name: "Jordan Lee",
      position: "UX Designer",
      startDate: "2024-02-20",
      progress: 40,
      department: "Design",
      tasks: [
        { id: 1, task: "Complete employment forms", completed: true },
        { id: 2, task: "Setup workspace and equipment", completed: true },
        { id: 3, task: "IT account creation", completed: false },
        { id: 4, task: "Department orientation", completed: false },
        { id: 5, task: "Meet with manager", completed: false },
      ],
    },
    {
      id: 3,
      name: "Sam Rivera",
      position: "Marketing Manager",
      startDate: "2024-03-01",
      progress: 20,
      department: "Marketing",
      tasks: [
        { id: 1, task: "Complete employment forms", completed: true },
        { id: 2, task: "Setup workspace and equipment", completed: false },
        { id: 3, task: "IT account creation", completed: false },
        { id: 4, task: "Department orientation", completed: false },
        { id: 5, task: "Meet with manager", completed: false },
      ],
    },
  ]);

  const upcomingStarts = [
    { id: 1, name: "Casey Morgan", position: "Sales Rep", date: "2024-03-10", department: "Sales" },
    { id: 2, name: "Taylor Wilson", position: "HR Coordinator", date: "2024-03-15", department: "HR" },
  ];

  // Modal state
  const [isStartOnboardingOpen, setIsStartOnboardingOpen] = useState(false);
  const [onboardingForm, setOnboardingForm] = useState({
    name: "",
    position: "",
    department: "",
    startDate: "",
    manager: "",
    location: "",
  });

  const handleStartOnboarding = () => {
    setIsStartOnboardingOpen(true);
  };

  const handleSubmitOnboarding = () => {
    if (!onboardingForm.name || !onboardingForm.position || !onboardingForm.department || !onboardingForm.startDate) {
      toast({
        title: "Missing fields",
        description: "Please fill in name, position, department, and start date.",
        variant: "destructive",
      });
      return;
    }

    // Generate new hire with default tasks
    const newHire: NewHire = {
      id: newHires.length + 1,
      name: onboardingForm.name,
      position: onboardingForm.position,
      department: onboardingForm.department,
      startDate: onboardingForm.startDate,
      progress: 20,
      tasks: [
        { id: 1, task: "Complete employment forms", completed: true },
        { id: 2, task: "Setup workspace and equipment", completed: false },
        { id: 3, task: "IT account creation", completed: false },
        { id: 4, task: "Department orientation", completed: false },
        { id: 5, task: "Meet with manager", completed: false },
      ],
    };

    setNewHires((prev) => [newHire, ...prev]);

    toast({
      title: "Onboarding Started",
      description: `${onboardingForm.name} has been added to active onboarding.`,
    });

    // Reset form
    setOnboardingForm({
      name: "",
      position: "",
      department: "",
      startDate: "",
      manager: "",
      location: "",
    });
    setIsStartOnboardingOpen(false);
  };

  const handleToggleTask = (hireId: number, taskId: number) => {
    setNewHires((prev) =>
      prev.map((hire) => {
        if (hire.id === hireId) {
          const updatedTasks = hire.tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          );
          const completedCount = updatedTasks.filter((t) => t.completed).length;
          const progress = (completedCount / updatedTasks.length) * 100;

          return { ...hire, tasks: updatedTasks, progress };
        }
        return hire;
      })
    );

    toast({
      title: "Task Updated",
      description: "Onboarding task status has been updated.",
    });
  };

  const handleSendReminder = (name: string) => {
    toast({
      title: "Reminder Sent",
      description: `Onboarding reminder sent to ${name}`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Employee Onboarding</h1>
          <p className="text-muted-foreground mt-1">Streamline new employee onboarding process</p>
        </div>
        <Button onClick={handleStartOnboarding} className="gap-2">
          <UserPlus className="h-4 w-4" />
          Start New Onboarding
        </Button>
      </div>

      {/* Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard
          title="Active Onboarding"
          value="3"
          icon={Users}
          trend="2 starting this month"
          trendUp={true}
        />
        <MetricCard
          title="Completed This Month"
          value="5"
          icon={CheckCircle2}
          trend="+2 from last month"
          trendUp={true}
        />
        <MetricCard
          title="Avg. Completion Time"
          value="12 days"
          icon={Clock}
          trend="-2 days improvement"
          trendUp={true}
        />
        <MetricCard
          title="Upcoming Starts"
          value="2"
          icon={Calendar}
          trend="Next: March 10"
          trendUp={false}
        />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Onboarding</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Starts</TabsTrigger>
          <TabsTrigger value="templates">Onboarding Templates</TabsTrigger>
        </TabsList>

        {/* Active Onboarding */}
        <TabsContent value="active" className="space-y-4">
          {newHires.map((hire) => (
            <Card key={hire.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{hire.name}</CardTitle>
                    <CardDescription>
                      {hire.position} · {hire.department} · Starts {hire.startDate}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant={hire.progress === 100 ? "default" : "secondary"}>
                      {hire.progress}% Complete
                    </Badge>
                  </div>
                </div>
                <Progress value={hire.progress} className="mt-4" />
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="font-semibold text-sm text-foreground mb-3">Onboarding Checklist:</p>
                {hire.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <Checkbox
                      id={`task-${hire.id}-${task.id}`}
                      checked={task.completed}
                      onCheckedChange={() => handleToggleTask(hire.id, task.id)}
                    />
                    <label
                      htmlFor={`task-${hire.id}-${task.id}`}
                      className={`flex-1 cursor-pointer ${
                        task.completed ? "line-through text-muted-foreground" : "text-foreground"
                      }`}
                    >
                      {task.task}
                    </label>
                    {task.completed && <CheckCircle2 className="h-4 w-4 text-success" />}
                  </div>
                ))}
                <div className="flex gap-2 pt-4 border-t">
                  <Button variant="outline" onClick={() => handleSendReminder(hire.name)}>
                    Send Reminder
                  </Button>
                  <Button variant="outline">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Upcoming Starts */}
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming New Hires</CardTitle>
              <CardDescription>Employees scheduled to start soon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingStarts.map((hire) => (
                  <div
                    key={hire.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <p className="font-semibold text-foreground">{hire.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {hire.position} · {hire.department}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">Start Date: {hire.date}</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Prepare Onboarding
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Templates */}
        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Onboarding Templates</CardTitle>
              <CardDescription>Pre-configured onboarding workflows</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Engineering Onboarding", tasks: 12, duration: "2 weeks" },
                  { name: "Sales Team Onboarding", tasks: 10, duration: "1 week" },
                  { name: "Remote Employee Onboarding", tasks: 15, duration: "3 weeks" },
                  { name: "Manager Onboarding", tasks: 14, duration: "2 weeks" },
                ].map((template, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">{template.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {template.tasks} tasks · {template.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button size="sm">Use Template</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Start New Onboarding Modal - Two Columns */}
      <Dialog open={isStartOnboardingOpen} onOpenChange={setIsStartOnboardingOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Start New Onboarding</DialogTitle>
            <DialogDescription>
              Add a new employee to the onboarding pipeline.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={onboardingForm.name}
                    onChange={(e) => setOnboardingForm({ ...onboardingForm, name: e.target.value })}
                    placeholder="Alex Thompson"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Position *</Label>
                  <Input
                    id="position"
                    value={onboardingForm.position}
                    onChange={(e) => setOnboardingForm({ ...onboardingForm, position: e.target.value })}
                    placeholder="Senior Developer"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Department *</Label>
                  <Select
                    value={onboardingForm.department}
                    onValueChange={(v) => setOnboardingForm({ ...onboardingForm, department: v })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Engineering">Engineering</SelectItem>
                      <SelectItem value="Design">Design</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                      <SelectItem value="Sales">Sales</SelectItem>
                      <SelectItem value="HR">HR</SelectItem>
                      <SelectItem value="Product">Product</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date *</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={onboardingForm.startDate}
                    onChange={(e) => setOnboardingForm({ ...onboardingForm, startDate: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="manager">Manager</Label>
                  <Input
                    id="manager"
                    value={onboardingForm.manager}
                    onChange={(e) => setOnboardingForm({ ...onboardingForm, manager: e.target.value })}
                    placeholder="Sarah Johnson"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={onboardingForm.location}
                    onChange={(e) => setOnboardingForm({ ...onboardingForm, location: e.target.value })}
                    placeholder="New York, NY"
                  />
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsStartOnboardingOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmitOnboarding}>Start Onboarding</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}