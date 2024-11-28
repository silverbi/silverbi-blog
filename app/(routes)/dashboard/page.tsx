"use client";

import React from "react";
import RootLayout from "@layouts/RootLayout";
import { Container } from "@/components/atoms/Container";
import { usePathname } from "next/navigation";
import { DashboardLayout } from "@layouts/DashboardLayout";
import Title from "@/components/atoms/Title";

const Dashboard = () => {
  const pathname = usePathname();

  return (
    <RootLayout>
      <Container className="my-20">
        <DashboardLayout />
        <Title className={"mt-8"}>Dashboard</Title>
      </Container>
    </RootLayout>
  );
};

export default Dashboard;
