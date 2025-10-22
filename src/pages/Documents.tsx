import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Upload, Search, Download, FolderOpen, Clock, TrendingUp, File } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { MetricCard } from "@/components/MetricCard";

export default function Documents() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  const documents = [
    { id: 1, name: "Employee Handbook 2024.pdf", category: "Policy", uploadedBy: "HR Admin", date: "2024-01-15", size: "2.4 MB", status: "Active" },
    { id: 2, name: "Non-Disclosure Agreement.docx", category: "Legal", uploadedBy: "Legal Team", date: "2024-01-20", size: "156 KB", status: "Active" },
    { id: 3, name: "Performance Review Template.xlsx", category: "HR Forms", uploadedBy: "Sarah Johnson", date: "2024-01-18", size: "89 KB", status: "Active" },
    { id: 4, name: "Benefits Overview 2024.pdf", category: "Benefits", uploadedBy: "HR Admin", date: "2024-01-10", size: "1.8 MB", status: "Active" },
    { id: 5, name: "IT Security Policy.pdf", category: "Policy", uploadedBy: "IT Department", date: "2024-01-12", size: "945 KB", status: "Active" },
    { id: 6, name: "Leave Request Form.pdf", category: "HR Forms", uploadedBy: "HR Admin", date: "2023-12-15", size: "234 KB", status: "Archived" },
  ];

  const categories = [
    { name: "Policy Documents", count: 12, icon: FileText, color: "text-blue-500" },
    { name: "Legal Documents", count: 8, icon: FolderOpen, color: "text-purple-500" },
    { name: "HR Forms", count: 15, icon: File, color: "text-green-500" },
    { name: "Benefits & Compensation", count: 6, icon: FileText, color: "text-orange-500" },
  ];

  const recentActivity = [
    { id: 1, action: "Uploaded", document: "Q1 Performance Reports.pdf", user: "Sarah Johnson", time: "2 hours ago" },
    { id: 2, action: "Downloaded", document: "Employee Handbook 2024.pdf", user: "Michael Chen", time: "4 hours ago" },
    { id: 3, action: "Updated", document: "Leave Request Form.pdf", user: "HR Admin", time: "1 day ago" },
  ];

  const handleUpload = () => {
    toast({
      title: "Upload Document",
      description: "Document upload dialog would open here.",
    });
  };

  const handleDownload = (docName: string) => {
    toast({
      title: "Downloading Document",
      description: `${docName} is being downloaded.`,
    });
  };

  const handleCreateFolder = () => {
    toast({
      title: "Create Folder",
      description: "New folder creation dialog would open here.",
    });
  };

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Document Management</h1>
          <p className="text-muted-foreground mt-1">Store and manage HR documents securely</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleCreateFolder}>
            <FolderOpen className="h-4 w-4 mr-2" />
            New Folder
          </Button>
          <Button onClick={handleUpload} className="gap-2">
            <Upload className="h-4 w-4" />
            Upload Document
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard
          title="Total Documents"
          value="156"
          icon={FileText}
          trend="+12 this month"
          trendUp={true}
        />
        <MetricCard
          title="Storage Used"
          value="2.8 GB"
          icon={TrendingUp}
          trend="of 10 GB"
          trendUp={false}
        />
        <MetricCard
          title="Categories"
          value="8"
          icon={FolderOpen}
          trend="Well organized"
          trendUp={true}
        />
        <MetricCard
          title="Recent Activity"
          value="24"
          icon={Clock}
          trend="Last 7 days"
          trendUp={false}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {categories.map((category, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <category.icon className={`h-8 w-8 ${category.color} mb-2`} />
                  <p className="font-semibold text-foreground">{category.name}</p>
                  <p className="text-sm text-muted-foreground">{category.count} documents</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Documents</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Document Library</CardTitle>
              <CardDescription>All your HR documents in one place</CardDescription>
              <div className="flex gap-2 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search documents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Uploaded By</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDocuments.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          {doc.name}
                        </div>
                      </TableCell>
                      <TableCell>{doc.category}</TableCell>
                      <TableCell>{doc.uploadedBy}</TableCell>
                      <TableCell>{doc.date}</TableCell>
                      <TableCell>{doc.size}</TableCell>
                      <TableCell>
                        <Badge variant={doc.status === "Active" ? "default" : "secondary"}>
                          {doc.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDownload(doc.name)}
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

        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recently Added</CardTitle>
              <CardDescription>Documents added in the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents.slice(0, 5).map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {doc.category} · {doc.date} · {doc.size}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => handleDownload(doc.name)}>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Document activity log</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4 p-4 border-l-2 border-primary pl-4">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-foreground">
                        <span className="font-semibold">{activity.user}</span> {activity.action.toLowerCase()}{" "}
                        <span className="font-medium">{activity.document}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
