import * as React from "react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  LayoutDashboardIcon,
  Compass,
  FlaskConical,
  BarChart3,
  Settings2Icon,
  CircleHelpIcon,
  FileChartColumnIcon,
} from "lucide-react"
import logoEversight from "@/assets/logo_eversight.svg"
import logoEversightIcon from "@/assets/logo_eversight_icon.png"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      basePath: "/dashboard",
      icon: <LayoutDashboardIcon />,
    },
    {
      title: "Guidance",
      url: "/guidance/recommendations",
      basePath: "/guidance",
      icon: <Compass />,
    },
    {
      title: "Test",
      url: "/test/opportunities",
      basePath: "/test",
      icon: <FlaskConical />,
    },
    {
      title: "Track",
      url: "/track/performance",
      basePath: "/track",
      icon: <BarChart3 />,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      basePath: "/settings",
      icon: <Settings2Icon />,
    },
    {
      title: "Get Help",
      url: "/help",
      basePath: "/help",
      icon: <CircleHelpIcon />,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: <FileChartColumnIcon />,
    },
    {
      name: "Reports",
      url: "#",
      icon: <FileChartColumnIcon />,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: <FileChartColumnIcon />,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5! h-auto!"
            >
              <a href="#" className="relative">
                <img
                  src={logoEversight}
                  alt="Eversight"
                  width={180}
                  className="transition-opacity duration-200 ease-linear group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:w-0"
                />
                <img
                  src={logoEversightIcon}
                  alt="Eversight"
                  className="size-6! object-contain opacity-0 transition-opacity duration-200 ease-linear absolute left-0 top-1/2 -translate-y-1/2 group-data-[collapsible=icon]:relative group-data-[collapsible=icon]:opacity-100"
                />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
