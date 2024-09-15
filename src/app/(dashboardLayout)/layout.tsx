"use client";
import Sidebar from "@/components/shared/Sidebar";
import { Layout } from "antd";
import { ReactNode, useState } from "react";
import Navbar from "@/components/shared/Navbar";
const { Content } = Layout;

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);


  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed}></Navbar>
        <Content className="bg-info rounded-tl-lg p-4">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
