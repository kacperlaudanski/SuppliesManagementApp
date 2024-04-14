import { Metadata } from "next";
import { ReactNode } from "react";
import NavigationBar from "../components/dashboard/NavigationBar";

export const metadata: Metadata = {
  title: "Dashboard - StockWise",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <div className="w-full min-h-screen flex">
          <NavigationBar />
          {children}
        </div>
      </body>
    </html>
  );
}
