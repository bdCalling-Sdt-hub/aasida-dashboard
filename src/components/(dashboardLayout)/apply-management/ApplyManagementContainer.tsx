"use client";
import {
  Input,
  message,
  Popconfirm,
  PopconfirmProps,
  Table,
  TableProps,
} from "antd";
import { IoIosSearch } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { LiaUserTimesSolid } from "react-icons/lia";
import { useState } from "react";
import StudentDetailsModal from "./StudentDetailsModal";

const confirm: PopconfirmProps["onConfirm"] = (e) => {
  console.log(e);
  message.success("Successfully blocked this user");
};

const ApplyManagementContainer = () => {
  const [open, setOpen] = useState(false);

  type TDataType = {
    key: number;
    name: string;
    email: string;
    date: string;
    status: string;
  };
  const data: TDataType[] = Array.from({ length: 50 }).map((_, inx) => ({
    key: inx + 1,
    name: "Opu",
    email: "email@gmailcom",
    date: "11 oct 24, 11.10PM",
    status: inx % 2 === 0 ? "Approved" : "Pending",
  }));

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Serial",
      dataIndex: "key",
      render: (value) => `#${value}`,
    },
    {
      title: "Student Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (value) => {
        if (value === "Pending") {
          return <p>{value}</p>;
        }
        if (value === "Approved") {
          return <p className="text-[#00B047]">{value}</p>;
        }
      },
      filters: [
        {
          text: "Pending",
          value: "Pending",
        },
        {
          text: "Approved",
          value: "Approved",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value as string) == 0,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="ml-4 flex gap-x-3">
          <IoEyeOutline size={20} onClick={() => setOpen(true)} />
          <Popconfirm
            title="Block the User"
            description="Are you sure to block this user?"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <LiaUserTimesSolid size={20} color="red" />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold w-full">Applicants List</h1>
        <Input
          type="search"
          placeholder="Search..."
          prefix={<IoIosSearch size={20} />}
          className="max-w-md bg-black text-[#F8FAFC] placeholder:!text-white py-2"
        />
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10, responsive: true }}
      ></Table>
      <StudentDetailsModal open={open} setOpen={setOpen}></StudentDetailsModal>
    </div>
  );
};

export default ApplyManagementContainer;
