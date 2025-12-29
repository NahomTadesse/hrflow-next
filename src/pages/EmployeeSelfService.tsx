// components/ess/EssPortal.tsx
import { useState } from "react";
import {
  User,
  FileText,
  Calendar,
  DollarSign,
  Upload,
  GraduationCap,
  Settings,
  ChevronRight,
  Bell,
  Shield,
  CheckCircle,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

// Types
interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  joinDate: string;
  avatarUrl?: string;
}

interface LeaveBalance {
  annual: number;
  sick: number;
  casual: number;
  maternity?: number;
  paternity?: number;
  unpaid: number;
}

interface Payslip {
  month: string;
  year: number;
  grossSalary: number;
  netSalary: number;
  status: "processed" | "pending" | "failed";
  downloadUrl?: string;
}

interface Document {
  id: string;
  name: string;
  type: "contract" | "certificate" | "id" | "other";
  uploadDate: string;
  size: string;
  status: "verified" | "pending" | "expired";
}

interface Training {
  id: string;
  title: string;
  category: string;
  status: "enrolled" | "completed" | "available";
  progress?: number;
  dueDate?: string;
}

const EmployeSelfService = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [employee, setEmployee] = useState<Employee>({
    id: "EMP-001234",
    name: "John Doe",
    position: "Senior Software Engineer",
    department: "Technology",
    email: "john.doe@company.com",
    phone: "+1 (555) 123-4567",
    joinDate: "2022-03-15",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  });

  const [leaveBalance, setLeaveBalance] = useState<LeaveBalance>({
    annual: 12.5,
    sick: 6,
    casual: 4,
    maternity: 0,
    paternity: 0,
    unpaid: 0,
  });

  const [payslips, setPayslips] = useState<Payslip[]>([
    {
      month: "January",
      year: 2024,
      grossSalary: 8500,
      netSalary: 7200,
      status: "processed",
    },
    {
      month: "December",
      year: 2023,
      grossSalary: 8500,
      netSalary: 7200,
      status: "processed",
    },
    {
      month: "November",
      year: 2023,
      grossSalary: 8500,
      netSalary: 7200,
      status: "processed",
    },
  ]);

  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      name: "Employment Contract.pdf",
      type: "contract",
      uploadDate: "2024-01-15",
      size: "2.4 MB",
      status: "verified",
    },
    {
      id: "2",
      name: "University Certificate.pdf",
      type: "certificate",
      uploadDate: "2024-01-10",
      size: "1.8 MB",
      status: "pending",
    },
    {
      id: "3",
      name: "Passport Copy.jpg",
      type: "id",
      uploadDate: "2024-01-05",
      size: "3.2 MB",
      status: "verified",
    },
  ]);

  const [trainings, setTrainings] = useState<Training[]>([
    {
      id: "1",
      title: "React Advanced Patterns",
      category: "Technical",
      status: "completed",
      progress: 100,
    },
    {
      id: "2",
      title: "Leadership Skills",
      category: "Soft Skills",
      status: "enrolled",
      progress: 45,
    },
    {
      id: "3",
      title: "Cybersecurity Awareness",
      category: "Compliance",
      status: "available",
    },
  ]);

  const [personalInfo, setPersonalInfo] = useState({
    address: "123 Main St, New York, NY",
    emergencyContact: "Jane Doe (+1 555 987-6543)",
    maritalStatus: "Single",
    dateOfBirth: "1990-05-15",
    nationality: "American",
  });

  // Handlers
  const handleDocumentUpload = (file: File) => {
    // Upload logic here
    console.log("Uploading file:", file.name);
  };

  const handleTrainingEnroll = (trainingId: string) => {
    setTrainings((prev) =>
      prev.map((t) =>
        t.id === trainingId ? { ...t, status: "enrolled", progress: 0 } : t
      )
    );
  };

  const handleInfoUpdate = (field: string, value: string) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Employee Self-Service
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Manage your profile, leave, payslips, documents, and training
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="gap-2">
                <Shield className="w-4 h-4" />
                Secure Portal
              </Badge>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications (3)
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Profile Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={employee.avatarUrl} />
                    <AvatarFallback>
                      {employee.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{employee.name}</CardTitle>
                  <CardDescription>{employee.position}</CardDescription>
                  <Badge variant="secondary" className="mt-2">
                    {employee.department}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Employee ID</span>
                    <span className="font-medium">{employee.id}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Join Date</span>
                    <span className="font-medium">{employee.joinDate}</span>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      <span>Account Verified</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      <span>Last Login: Today</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-3">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid grid-cols-6 mb-6">
                <TabsTrigger
                  value="profile"
                  className="flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="leave" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Leave
                </TabsTrigger>
                <TabsTrigger
                  value="payslip"
                  className="flex items-center gap-2"
                >
                  <DollarSign className="w-4 h-4" />
                  Payslip
                </TabsTrigger>
                <TabsTrigger
                  value="documents"
                  className="flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Documents
                </TabsTrigger>
                <TabsTrigger
                  value="training"
                  className="flex items-center gap-2"
                >
                  <GraduationCap className="w-4 h-4" />
                  Training
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="flex items-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </TabsTrigger>
              </TabsList>

              {/* Profile Management Tab */}
              <TabsContent value="profile">
                <ProfileManagement
                  employee={employee}
                  personalInfo={personalInfo}
                  onUpdateInfo={handleInfoUpdate}
                />
              </TabsContent>

              {/* Leave Management Tab */}
              <TabsContent value="leave">
                <LeaveManagement balance={leaveBalance} />
              </TabsContent>

              {/* Payslip Tab */}
              <TabsContent value="payslip">
                <PayslipManagement payslips={payslips} />
              </TabsContent>

              {/* Documents Tab */}
              <TabsContent value="documents">
                <DocumentManagement
                  documents={documents}
                  onUpload={handleDocumentUpload}
                />
              </TabsContent>

              {/* Training Tab */}
              <TabsContent value="training">
                <TrainingManagement
                  trainings={trainings}
                  onEnroll={handleTrainingEnroll}
                />
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings">
                <SettingsManagement />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeSelfService;

// Sub-components
const ProfileManagement = ({
  employee,
  personalInfo,
  onUpdateInfo,
}: {
  employee: Employee;
  personalInfo: any;
  onUpdateInfo: (field: string, value: string) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Update your personal details and contact information
            </CardDescription>
          </div>
          <Button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Save Changes" : "Edit Profile"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              defaultValue={employee.name}
              disabled={!isEditing}
              className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-800"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              defaultValue={employee.email}
              disabled={!isEditing}
              className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-800"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              defaultValue={employee.phone}
              disabled={!isEditing}
              className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-800"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Address</label>
            <input
              type="text"
              value={personalInfo.address}
              onChange={(e) => onUpdateInfo("address", e.target.value)}
              disabled={!isEditing}
              className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-800"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Emergency Contact</label>
            <input
              type="text"
              value={personalInfo.emergencyContact}
              onChange={(e) => onUpdateInfo("emergencyContact", e.target.value)}
              disabled={!isEditing}
              className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-800"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              value={personalInfo.dateOfBirth}
              onChange={(e) => onUpdateInfo("dateOfBirth", e.target.value)}
              disabled={!isEditing}
              className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-800"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const LeaveManagement = ({ balance }: { balance: LeaveBalance }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Leave Balance</CardTitle>
          <CardDescription>
            Your available leave days for this year
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(balance).map(([type, days]) => (
              <div
                key={type}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {days}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 capitalize mt-1">
                  {type} Leave
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Request Leave</CardTitle>
              <CardDescription>Submit a new leave request</CardDescription>
            </div>
            <Button>New Request</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Leave Type</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Annual Leave</option>
                  <option>Sick Leave</option>
                  <option>Casual Leave</option>
                  <option>Maternity Leave</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Start Date</label>
                <input type="date" className="w-full p-2 border rounded-md" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">End Date</label>
                <input type="date" className="w-full p-2 border rounded-md" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Reason</label>
                <textarea className="w-full p-2 border rounded-md h-24" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const PayslipManagement = ({ payslips }: { payslips: Payslip[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payslip History</CardTitle>
        <CardDescription>
          Access and download your monthly payslips
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {payslips.map((payslip, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-medium">
                    {payslip.month} {payslip.year}
                  </div>
                  <div className="text-sm text-gray-500">
                    Gross: ${payslip.grossSalary.toLocaleString()} • Net: $
                    {payslip.netSalary.toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge
                  variant={
                    payslip.status === "processed" ? "default" : "secondary"
                  }
                >
                  {payslip.status}
                </Badge>
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const DocumentManagement = ({
  documents,
  onUpload,
}: {
  documents: Document[];
  onUpload: (file: File) => void;
}) => {
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) onUpload(file);
  };

  const getTypeIcon = (type: Document["type"]) => {
    switch (type) {
      case "contract":
        return "📝";
      case "certificate":
        return "🎓";
      case "id":
        return "🆔";
      default:
        return "📄";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upload Documents</CardTitle>
          <CardDescription>
            Drag and drop files or click to upload
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
              dragOver
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                : "border-gray-300 dark:border-gray-600"
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
          >
            <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <p className="text-lg font-medium mb-2">
              Drop files here or click to upload
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Supports PDF, JPG, PNG up to 10MB
            </p>
            <Button>Browse Files</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>My Documents</CardTitle>
          <CardDescription>All your uploaded documents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{getTypeIcon(doc.type)}</div>
                  <div>
                    <div className="font-medium">{doc.name}</div>
                    <div className="text-sm text-gray-500">
                      {doc.uploadDate} • {doc.size}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant={
                      doc.status === "verified"
                        ? "default"
                        : doc.status === "pending"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {doc.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const TrainingManagement = ({
  trainings,
  onEnroll,
}: {
  trainings: Training[];
  onEnroll: (id: string) => void;
}) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Available Trainings</CardTitle>
          <CardDescription>
            Enroll in upcoming training programs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainings.map((training) => (
              <Card key={training.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">
                        {training.title}
                      </CardTitle>
                      <CardDescription>{training.category}</CardDescription>
                    </div>
                    <Badge variant="outline">{training.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {training.progress !== undefined && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{training.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${training.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  {training.dueDate && (
                    <p className="text-sm text-gray-500 mb-4">
                      Due: {training.dueDate}
                    </p>
                  )}
                  <Button
                    className="w-full"
                    disabled={training.status !== "available"}
                    onClick={() => onEnroll(training.id)}
                  >
                    {training.status === "available"
                      ? "Enroll Now"
                      : training.status === "enrolled"
                      ? "Continue"
                      : "Completed"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const SettingsManagement = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>
          Manage your portal preferences and security
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Notification Preferences</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked />
              <span>Email notifications</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked />
              <span>Push notifications</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" />
              <span>SMS notifications</span>
            </label>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-medium">Security</h3>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              Change Password
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Two-Factor Authentication
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Login History
            </Button>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-medium">Data Privacy</h3>
          <Button variant="outline" className="w-full justify-start">
            Download Personal Data
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
