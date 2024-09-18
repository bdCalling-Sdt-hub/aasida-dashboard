/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useResetPassMutation } from "@/redux/api/authApi";
import { Error_Modal, Success_model } from "@/utils/modalHook";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";

type FieldType = {
  newPassword?: string;
  confirmPassword?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SetNewPassForm = () => {
  const [resetPassword, {isLoading}] = useResetPassMutation();
  const route = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      await resetPassword(values).unwrap();
      Success_model({ title: "Password reset successfully!!" });
    } catch (error: any) {
      console.log(error?.data?.message);
      Error_Modal(error?.data?.message);
    }

    // Navigate to `/login` to login with new password
    route.push("/login");
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
      className="md:w-[481px]"
    >
      <Form.Item<FieldType>
        label="New Password"
        name="newPassword"
        rules={[{ required: true, message: "Please input your new passowrd" }]}
      >
        <Input.Password size="large" placeholder="*******" />
      </Form.Item>

      <Form.Item<FieldType>
        name="confirmPassword"
        label="Confirm Password"
        rules={[{ required: true, message: "Please confirm your password" }]}
      >
        <Input.Password size="large" placeholder="*******" />
      </Form.Item>

      <Form.Item style={{ display: "flex", justifyContent: "center" }}>
        <Button
        loading={isLoading}
          htmlType="submit"
          size="large"
          style={{ backgroundColor: "#232323", color: "#F8FAFC" }}
        >
          Update Password
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SetNewPassForm;
