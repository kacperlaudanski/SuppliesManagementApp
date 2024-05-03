import { Metadata } from "next";
import { ReactNode } from "react";
import NavigationBar from "./_components/NavigationBar";
import TitleBar from "./_components/TitleBar";

export const metadata: Metadata = {
  title: "Dashboard - StockWise",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen flex">
      <NavigationBar />
      <div className="w-full min-h-screen flex flex-col">
        <TitleBar />
        {children}
      </div>
    </div>
  );
}
