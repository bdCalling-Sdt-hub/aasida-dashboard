/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { Error_Modal, Success_model } from "@/utils/modalHook";
import { Button, ConfigProvider, Form, Input } from "antd";

const ChangePasswordForm = () => {
  const [changePasword] = useChangePasswordMutation();
  // @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
  const onFinishChangePassword = async (values) => {
    try {
      await changePasword(values).unwrap();
      Success_model({ title: "Password Changed Successfully." });
    } catch (error: any) {
      Error_Modal(error?.data?.message);
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: "transparent",
            activeBorderColor: "#243A40",
            hoverBorderColor: "#46A39D",
            colorTextPlaceholder: "rgb(192, 199, 202)",
            colorIcon: "rgba(255,255,255,0.45)",
            colorBorder: "#D9D9D9",
            colorText: "white",
          },
          Form: {
            labelColor: "white",
          },
        },
      }}
    >
      <Form layout="vertical" onFinish={onFinishChangePassword}>
        <Form.Item
          label="Current Password"
          name="oldPassword"
          rules={[
            {
              required: true,
              message: "Please enter your current password!",
            },
          ]}
        >
          <Input.Password size="large" placeholder="Current Password" />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="password"
          rules={[{ required: true, message: "Please enter a new password!" }]}
        >
          <Input.Password size="large" placeholder="New Password" />
        </Form.Item>

        <Form.Item
          label="Confirm New Password"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Please confirm your new password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password size="large" placeholder="Confirm New Password" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            style={{ backgroundColor: "#F8FAFC", color: "#232323" }}
            htmlType="submit"
            block
            size="large"
          >
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default ChangePasswordForm;
