import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Mail, Phone, MapPin } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "@/hooks/use-toast";

export default function Employees() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddEmployee = () => {
    toast({
      title: "Add Employee",
      description: "Employee creation form would open here.",
    });
  };

  const employees = [
    { id: 1, name: "Sarah Johnson", role: "Senior Software Engineer", department: "Engineering", email: "sarah.j@company.com", phone: "+1 234-567-8900", location: "New York", status: "active" },
    { id: 2, name: "Mike Chen", role: "Product Manager", department: "Product", email: "mike.c@company.com", phone: "+1 234-567-8901", location: "San Francisco", status: "active" },
    { id: 3, name: "Emma Wilson", role: "Marketing Director", department: "Marketing", email: "emma.w@company.com", phone: "+1 234-567-8902", location: "Los Angeles", status: "active" },
    { id: 4, name: "John Doe", role: "Sales Representative", department: "Sales", email: "john.d@company.com", phone: "+1 234-567-8903", location: "Chicago", status: "active" },
    { id: 5, name: "Lisa Anderson", role: "HR Manager", department: "Human Resources", email: "lisa.a@company.com", phone: "+1 234-567-8904", location: "Boston", status: "active" },
    { id: 6, name: "David Brown", role: "Data Analyst", department: "Analytics", email: "david.b@company.com", phone: "+1 234-567-8905", location: "Seattle", status: "on-leave" },
  ];

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Employee Directory</h2>
          <p className="text-muted-foreground">Manage and view all employees</p>
        </div>
        <Button onClick={handleAddEmployee}>
          <Plus className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search employees by name, department, or role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredEmployees.map((employee) => (
              <Card key={employee.id} className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {getInitials(employee.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground text-lg">{employee.name}</h3>
                          <p className="text-sm text-muted-foreground">{employee.role}</p>
                        </div>
                        <Badge variant={employee.status === "active" ? "default" : "secondary"}>
                          {employee.status === "active" ? "Active" : "On Leave"}
                        </Badge>
                      </div>
                      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Badge variant="outline">{employee.department}</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <span>{employee.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>{employee.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{employee.location}</span>
                        </div>
                      </div>
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
