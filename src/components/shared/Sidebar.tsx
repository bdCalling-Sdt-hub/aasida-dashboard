"use client";
import { logout } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Success_model } from "@/utils/modalHook";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { LuLogOut, LuUser, LuUsers } from "react-icons/lu";
import { SlBookOpen } from "react-icons/sl";

type TSidebarType = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "users",
    label: <Link href="/users">Users Management</Link>,
    icon: <LuUsers size={20} />,
  },
  {
    key: "apply-management",
    label: <Link href="/apply-management">Apply Management</Link>,
    icon: <SlBookOpen size={18} />,
  },
  // {
  //   key: "draft-agreement",
  //   label: <Link href="/draft-agreement">Draft Agreement</Link>,
  //   icon: <TbMessage2Dollar size={24} />,
  // },
  // {
  //   key: "setting",
  //   label: "Setting",
  //   icon: <MdOutlineManageHistory size={24} />,
  //   children: [
  //     {
  //       key: "privacyPolicy",
  //       label: <Link href="/privacyPolicy">Privacy Policy</Link>,
  //       icon: <HiOutlineCircleStack size={24} />,
  //     },
  //     {
  //       key: "faqs",
  //       label: <Link href="/faqs">FAQs</Link>,
  //       icon: <FaQ size={24} />,
  //     },
  //   ],
  // },
  {
    key: "Profile",
    label: <Link href="/profile">Profile</Link>,
    icon: <LuUser size={20} />,
  },
  {
    key: "logout",
    label: "Logout",
    icon: <LuLogOut size={20} />,
  },
];

const Sidebar = ({ collapsed, setCollapsed }: TSidebarType) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // Get current path name for active menu item
  const pathName = usePathname()?.replace("/", "");

  const OnClick: MenuProps["onClick"] = (e) => {
    if (e.key === "logout") {
      dispatch(logout());
      router.refresh();

      Success_model({ title: "Logout successful" });
    }
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(!value)}
      className={`px-4 overflow-hidden ${!collapsed ? "min-w-[280px]" : ""}`}
    >
      <div>
        <div className="demo-logo-vertical pb-4 pt-20"></div>
        <Menu
          onClick={OnClick}
          defaultSelectedKeys={[pathName]}
          mode="inline"
          items={items}
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
