"use client";
import mainTheme from "@/themes/mainTheme";
import { ConfigProvider } from "antd";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ConfigProvider theme={mainTheme}>{children}</ConfigProvider>;
};

export default Providers;
