"use client";

import { useUpdateUserMutation } from "@/redux/api/authApi";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetAllUsersQuery } from "@/redux/api/usersApi";
import { Error_Modal, Success_model } from "@/utils/modalHook";
import { Input, Popconfirm, Table, TableProps, Tag } from "antd";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { LiaUserTimesSolid } from "react-icons/lia";

export default function UsersManagementContainer() {
  const [searchValue, setSearchValue] = useState("");
  const [updateUser] = useUpdateUserMutation();

  // Query
  const query: any = {};
  query["searchTerm"] = searchValue;

  console.log(searchValue);

  // Get users data
  const { data: usersRes, isLoading, refetch } = useGetAllUsersQuery(query);
  const users: any = usersRes?.data || [];
  console.log(users);

  // Block / Unblock user
  const handleChangeUserStatus: any = async (id: string, status: string) => {
    try {
      await updateUser({
        id,
        body: { isActive: status === "block" ? false : true },
      }).unwrap();

      refetch();

      Success_model({ title: "Profile blocked Successfully" });
    } catch (error: any) {
      Error_Modal(error?.data?.message);
    }
  };

  // Table columns
  type TDataType = {
    key: number;
    name: string;
    email: string;
    date: string;
    status: string;
    isActive: boolean;
  };

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      render: (data) => <p>{data?.firstName + " " + data?.middleName}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Account Status",
      dataIndex: "isActive",
      filters: [
        {
          text: "Active",
          value: true,
        },
        {
          text: "Blocked",
          value: false,
        },
      ],
      onFilter: (value, record) => record.isActive === value,
      render: (data) => (
        <Tag color={data ? "green" : "red"}>{data ? "Active" : "Blocked"}</Tag>
      ),
    },
    {
      title: "Action",

      render: (data) => (
        <div className="ml-4 flex gap-x-3">
          {data?.isActive ? (
            <Popconfirm
              title="Block the User"
              description="Are you sure to block this user?"
              onConfirm={() => handleChangeUserStatus(data?._id, "block")}
              okText="Yes"
              cancelText="No"
            >
              <LiaUserTimesSolid
                className="cursor-pointer"
                size={20}
                color="red"
              />
            </Popconfirm>
          ) : (
            <Popconfirm
              title="Unblock the User"
              description="Are you sure to block this user?"
              onConfirm={() => handleChangeUserStatus(data?._id, "unblock")}
              okText="Yes"
              cancelText="No"
            >
              <LiaUserTimesSolid
                className="cursor-pointer"
                size={20}
                color="green"
              />
            </Popconfirm>
          )}
        </div>
      ),
    },
  ];

  return (
    <div>
      <section className="flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold w-full">Users List</h1>
        <Input
          onChange={(e: any) => setSearchValue(e.target.value)}
          type="search"
          placeholder="Search user..."
          prefix={<IoIosSearch size={20} />}
          className="max-w-md bg-black text-[#F8FAFC] placeholder:!text-white py-2"
        />
      </section>

      <Table
        columns={columns}
        dataSource={users}
        pagination={{ pageSize: 10, responsive: true }}
        loading={isLoading}
      ></Table>
    </div>
  );
}
