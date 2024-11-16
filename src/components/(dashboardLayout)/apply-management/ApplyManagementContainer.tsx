/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  useGetAllApplicationsQuery,
  useGetSingleApplicationQuery,
} from "@/redux/api/applicationApi";
import { useUpdateUserMutation } from "@/redux/api/authApi";
import { Error_Modal, Success_model } from "@/utils/modalHook";
import {
  Input,
  Popconfirm,
  PopconfirmProps,
  Table,
  TableProps,
  Tag,
} from "antd";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { LiaUserTimesSolid } from "react-icons/lia";
import StudentDetailsModal from "./StudentDetailsModal";

const ApplyManagementContainer = () => {
  const [open, setOpen] = useState(false);
  const [searchvalue, setsearchvalue] = useState();
  const [updateUser] = useUpdateUserMutation();

  const [id, setId] = useState("");
  const query: any = {};
  if (searchvalue) {
    query["searchTerm"] = searchvalue;
  }
  const { data: Adata, refetch } = useGetAllApplicationsQuery(query);
  const { data: ASdata } = useGetSingleApplicationQuery(id);

  const confirm: any = async (id: string, status: string) => {
    try {
      const res = await updateUser({
        id,
        body: { isActive: status === "block" ? false : true },
      }).unwrap();
      Success_model({ title: "Profile blocked Successfully" });
      refetch();
    } catch (error: any) {
      Error_Modal(error?.data?.message);
    }
  };
  type TDataType = {
    key: number;
    name: string;
    email: string;
    date: string;
    status: string;
  };

  const columns: TableProps<TDataType>["columns"] = [
    // {
    //   title: "Serial",
    //   render: (value, index) => <p>#{index}</p>,
    // },
    {
      title: "Applicant Name",
      dataIndex: "applicant",
      render: (data) => (
        <p>{data?.name?.firstName + " " + data?.name?.middleName}</p>
      ),
    },
    {
      title: "Email",
      dataIndex: "applicant",
      render: (data) => <p>{data?.email}</p>,
    },
    {
      title: "Account Status",
      dataIndex: "applicant",
      render: (data) => (
        <Tag color={data?.isActive === true ? "green" : "red"}>
          {data?.isActive ? "Active" : "Blocked"}
        </Tag>
      ),
    },
    {
      title: "Application Date",
      dataIndex: "createdAt",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (value) => {
        if (value === "pending") {
          return <p>{value}</p>;
        }
        if (value === "approved") {
          return <p className="text-[#00B047]">{value}</p>;
        }
        if (value === "rejected") {
          return <p className="text-red-700">{value}</p>;
        }
      },
      filters: [
        {
          text: "Pending",
          value: "pending",
        },
        {
          text: "Approved",
          value: "approved",
        },
        {
          text: "Rejected",
          value: "rejected",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value as string) == 0,
    },
    {
      title: "Action",

      render: (data) => (
        <div className="ml-4 flex gap-x-3">
          <IoEyeOutline
            className="cursor-pointer"
            size={20}
            onClick={() => {
              setId(data?._id);
              setOpen(true);
            }}
          />
          {data?.applicant?.isActive ? (
            <Popconfirm
              title="Block the User"
              description="Are you sure to block this user?"
              onConfirm={() => confirm(data?.applicant?._id, "block")}
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
              onConfirm={() => confirm(data?.applicant?._id, "unblock")}
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
      <div className="flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold w-full">Applicants List</h1>
        <Input
          onChange={(e: any) => setsearchvalue(e.target.value)}
          type="search"
          placeholder="Search..."
          prefix={<IoIosSearch size={20} />}
          className="max-w-md bg-black text-[#F8FAFC] placeholder:!text-white py-2"
        />
      </div>

      <Table
        columns={columns}
        dataSource={Adata?.data}
        pagination={{ pageSize: 10, responsive: true }}
      ></Table>
      <StudentDetailsModal
        open={open}
        setOpen={setOpen}
        data={ASdata?.data}
      ></StudentDetailsModal>
    </div>
  );
};

export default ApplyManagementContainer;
