/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Error_Modal, Success_model } from "@/utils/modalHook";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

type FieldType = {
  otp?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const VerifyEmailForm = () => {
  //handle password change
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log(values);
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
        label="OTP"
        name="otp"
        style={{display: "flex", justifyContent: "center", alignItems: "center"}}
        rules={[
          { required: true, message: "Please input OPT" },
        ]}
      >
        <Input.OTP size="large" length={4}/>
      </Form.Item>

      <Form.Item style={{ display: "flex", justifyContent: "center" }}>
        <Button
          htmlType="submit"
          size="large"
          style={{ backgroundColor: "#232323", color: "#F8FAFC" }}
        >
          Verify 
        </Button>
      </Form.Item>
    </Form>
  );
};

export default VerifyEmailForm;
