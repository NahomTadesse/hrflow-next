import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Recruitment from "./pages/Recruitment";
import LeaveManagement from "./pages/LeaveManagement";
import Attendance from "./pages/Attendance";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/employees" element={<DashboardLayout><Employees /></DashboardLayout>} />
          <Route path="/recruitment" element={<DashboardLayout><Recruitment /></DashboardLayout>} />
          <Route path="/onboarding" element={<DashboardLayout><ComingSoon title="Onboarding" description="Streamline new employee onboarding process" /></DashboardLayout>} />
          <Route path="/leave" element={<DashboardLayout><LeaveManagement /></DashboardLayout>} />
          <Route path="/attendance" element={<DashboardLayout><Attendance /></DashboardLayout>} />
          <Route path="/payroll" element={<DashboardLayout><ComingSoon title="Payroll" description="Manage employee compensation and payments" /></DashboardLayout>} />
          <Route path="/performance" element={<DashboardLayout><ComingSoon title="Performance Reviews" description="Track and evaluate employee performance" /></DashboardLayout>} />
          <Route path="/training" element={<DashboardLayout><ComingSoon title="Training & Certifications" description="Manage employee training programs and certifications" /></DashboardLayout>} />
          <Route path="/documents" element={<DashboardLayout><ComingSoon title="Document Management" description="Store and manage HR documents securely" /></DashboardLayout>} />
          <Route path="/org-chart" element={<DashboardLayout><ComingSoon title="Organization Chart" description="Visualize company hierarchy and reporting structure" /></DashboardLayout>} />
          <Route path="/reports" element={<DashboardLayout><ComingSoon title="Reports & Analytics" description="Generate insights from HR data" /></DashboardLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
