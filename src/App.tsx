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
import Performance from "./pages/Performance";
import Training from "./pages/Training";
import OrgChart from "./pages/OrgChart";
import Reports from "./pages/Reports";
import Payroll from "./pages/Payroll";
import Onboarding from "./pages/Onboarding";
import Documents from "./pages/Documents";
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
          <Route path="/onboarding" element={<DashboardLayout><Onboarding /></DashboardLayout>} />
          <Route path="/leave" element={<DashboardLayout><LeaveManagement /></DashboardLayout>} />
          <Route path="/attendance" element={<DashboardLayout><Attendance /></DashboardLayout>} />
          <Route path="/payroll" element={<DashboardLayout><Payroll /></DashboardLayout>} />
          <Route path="/performance" element={<DashboardLayout><Performance /></DashboardLayout>} />
          <Route path="/training" element={<DashboardLayout><Training /></DashboardLayout>} />
          <Route path="/documents" element={<DashboardLayout><Documents /></DashboardLayout>} />
          <Route path="/org-chart" element={<DashboardLayout><OrgChart /></DashboardLayout>} />
          <Route path="/reports" element={<DashboardLayout><Reports /></DashboardLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
