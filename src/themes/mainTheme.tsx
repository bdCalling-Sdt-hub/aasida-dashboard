import { ThemeConfig } from "antd";

const mainTheme: ThemeConfig = {
  token: {
    colorPrimary: "#232323",
    colorInfo: "#232323",
  },
  components: {
    Layout: {
      siderBg: "#232323",
      headerColor: "rgb(35,35,35)",
      bodyBg: "#232323",
      algorithm: true,
      lightTriggerBg: "rgb(87,88,88)",
      lightSiderBg: "rgb(35,35,35)",
      triggerColor: "rgb(35,35,35)",
    },
    Menu: {
      colorPrimaryBorder: "#232323",
      itemColor: "rgb(248,250,252)",
      itemBg: "",
      itemBorderRadius: 4,
      itemHoverColor: "rgb(35,35,35)",
      itemHoverBg: "rgb(248,250,252)",
      itemSelectedColor: "rgb(35,35,35)",
      itemSelectedBg: "rgb(248,250,252)",
    },
    Table: {
      colorBgContainer: "rgb(248,250,252)",
      colorText: "#232323",
      colorTextHeading: "rgb(248,250,252)",
      headerBg: "#232323",
      headerSplitColor: "#232323",
    },
    Popconfirm: {
      colorWarning: "rgb(245,34,45)",
    },
    Tabs: {
      itemSelectedColor: "rgb(0,176,71)",
      itemHoverColor: "rgb(0,176,71)",
      itemColor: "white",
    },
    Form: {
      labelColor: "rgba(255,255,255,0.88)",
    },
    Spin: {
      colorPrimary: "#232323",
  },
  Input: {
    colorTextPlaceholder: "rgb(192, 199, 202)",
  },
  },
};

export default mainTheme;
