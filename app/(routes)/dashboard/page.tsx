"use client";

import { DashboardLayout } from "@/app/layouts/DashboardLayout";
import RootLayout from "@/app/layouts/RootLayout";
import { usePathname } from "next/navigation";

const Dashboard = () => {
  const pathname = usePathname();

  return (
    <RootLayout>
      <DashboardLayout />
    </RootLayout>
  );
};

export default Dashboard;
