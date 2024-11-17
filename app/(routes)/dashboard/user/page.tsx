import RootLayout from "@layouts/RootLayout";
import { Container } from "@/components/atoms/Container";
import { DashboardLayout } from "@layouts/DashboardLayout";
import React from "react";

const User = () => {
  return (
    <RootLayout>
      <Container className="my-20">
        <DashboardLayout />
      </Container>
    </RootLayout>
  );
};

export default User;
