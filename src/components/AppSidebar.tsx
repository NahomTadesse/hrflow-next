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
  BarChart3,
  Menu,
  ChevronLeft,
  ChevronRight,
  User, // Added User icon
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
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Add "Self Service" to menuItems array
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
  { title: "Self Service", url: "/employee-self-service", icon: User }, // Added this line
];

export function AppSidebar() {
  const { toggleSidebar, state, isMobile, openMobile, setOpenMobile } =
    useSidebar();
  const isCollapsed = state === "collapsed";

  // Toggle handler (desktop: collapse/expand icons, mobile: open/close drawer)
  const handleToggle = () => {
    if (isMobile) {
      setOpenMobile(!openMobile);
    } else {
      toggleSidebar();
    }
  };

  // Close mobile sidebar when clicking a link
  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <>
      {/* Mobile menu button (only visible on mobile) */}
      {isMobile && (
        <Button
          variant="outline"
          size="icon"
          className="fixed left-4 top-4 z-50 md:hidden"
          onClick={handleToggle}
        >
          <Menu className="h-5 w-5" />
        </Button>
      )}

      <Sidebar collapsible="icon" className="border-r border-sidebar-border">
        <SidebarHeader className="border-b border-sidebar-border">
          <div className="flex items-center justify-between px-3 py-4">
            <h2
              className={`font-bold text-sidebar-foreground transition-all ${
                isCollapsed ? "text-center text-lg" : "text-xl"
              }`}
            >
              {isCollapsed ? "HR" : "HR ERP System"}
            </h2>

            {/* Desktop collapse/expand button */}
            {!isMobile && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={toggleSidebar}
              >
                {isCollapsed ? (
                  <ChevronRight className="h-4 w-4" />
                ) : (
                  <ChevronLeft className="h-4 w-4" />
                )}
              </Button>
            )}
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>
              Main Menu
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      tooltip={isCollapsed ? item.title : undefined}
                    >
                      <NavLink
                        to={item.url}
                        end={item.url === "/"}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                            isActive
                              ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                              : "hover:bg-sidebar-accent/50"
                          }`
                        }
                        onClick={handleLinkClick}
                      >
                        <item.icon className="h-4 w-4 flex-shrink-0" />
                        {!isCollapsed && (
                          <span className="truncate">{item.title}</span>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Optional: Mobile close button in footer */}
        {isMobile && openMobile && (
          <SidebarFooter className="border-t border-sidebar-border p-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setOpenMobile(false)}
            >
              Close Menu
            </Button>
          </SidebarFooter>
        )}
      </Sidebar>
    </>
  );
}
