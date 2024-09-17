"use client";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { MdPeopleOutline } from "react-icons/md";

type TSidebarType = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "apply-management",
    label: <Link href="/apply-management">Apply Management</Link>,
    icon: <MdPeopleOutline size={24} />,
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
    icon: <FaUser size={24} />,
  },
  {
    key: "logout",
    label: <Link href="/login">Logout</Link>,
    icon: <BiLogOut size={24} />,
  },
];

const Sidebar = ({ collapsed, setCollapsed }: TSidebarType) => {
  const [current, setCurrent] = useState("apply-management");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
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
          onClick={onClick}
          defaultOpenKeys={["apply-management"]}
          selectedKeys={[current]}
          mode="inline"
          items={items}
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
