import { 
  LayoutDashboard, 
  Users, 
  UserPlus, 
  Briefcase, 
  Calendar, 
  Clock, 
  DollarSign,
  TrendingUp,
  GraduationCap,
  FileText,
  Network,
  BarChart3
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Employees", url: "/employees", icon: Users },
  { title: "Recruitment", url: "/recruitment", icon: UserPlus },
  { title: "Onboarding", url: "/onboarding", icon: Briefcase },
  { title: "Leave Management", url: "/leave", icon: Calendar },
  { title: "Attendance", url: "/attendance", icon: Clock },
  { title: "Payroll", url: "/payroll", icon: DollarSign },
  { title: "Performance", url: "/performance", icon: TrendingUp },
  { title: "Training", url: "/training", icon: GraduationCap },
  { title: "Documents", url: "/documents", icon: FileText },
  { title: "Org Chart", url: "/org-chart", icon: Network },
  { title: "Reports", url: "/reports", icon: BarChart3 },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent>
        <div className="px-3 py-4">
          <h2 className={`font-bold text-sidebar-foreground transition-all ${isCollapsed ? "text-center text-lg" : "text-xl"}`}>
            {isCollapsed ? "HR" : "HR ERP System"}
          </h2>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) => 
                        isActive 
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                          : "hover:bg-sidebar-accent/50"
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
