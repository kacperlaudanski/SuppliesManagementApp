import {
  LayoutDashboard,
  Warehouse,
  Search,
  Bell,
  Settings,
} from "lucide-react";

export const navTopButtons = [
  {
    name: "Dashboard",
    id: "dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    name: "Items",
    id: "items",
    path: "/dashboard/items",
    icon: <Warehouse />
  },
  {
    name: "Search",
    id: "search",
    path: "/dashboard/search",
    icon: <Search /> 
  },
];

export const navBottomButtons = [
  {
    name: "Notifications",
    id: "notifications",
    icon: <Bell />,
  },
  {
    name: "Settings",
    id: "settings",
    icon: <Settings />
  },
]