"use client";
import mainTheme from "@/themes/mainTheme";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";

import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider theme={mainTheme}>{children}</ConfigProvider>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
