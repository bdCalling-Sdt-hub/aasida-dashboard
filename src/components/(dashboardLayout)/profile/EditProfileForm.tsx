/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useUpdateProfileMutation } from "@/redux/api/authApi";
import { Error_Modal, Success_model } from "@/utils/modalHook";
import { Button, ConfigProvider, Form, Input } from "antd";
import { useEffect } from "react";

const EditProfileForm = ({ data }: any) => {
  const [form] = Form.useForm(); // Create form instance
  const [updateProfile] = useUpdateProfileMutation();
  useEffect(() => {
    // When 'data' is fetched or updated, set the form fields
    if (data) {
      form.setFieldsValue({
        firstName: data?.name?.firstName,
        middleName: data?.name?.middleName,
        email: data?.email,
        contactNo: data?.phoneNumber,
      });
    }
  }, [data, form]); // Re-run effect when 'data' changes

  const onFinishEditProfile = async (values: any) => {
    const data = {
      name: {
        firstName: values?.firstName,
        middleName: values?.middleName,
      },
    };
    try {
      const res = await updateProfile(data).unwrap();
      console.log(res);
      Success_model({ title: "Profile Updated Successfully" });
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
            colorText: "white",
            colorTextDisabled: "rgba(255,255,255,0.25)",
          },
          Form: {
            labelColor: "white",
          },
        },
      }}
    >
      <Form
        form={form} // Assign the form instance
        layout="vertical"
        onFinish={onFinishEditProfile}
      >
        <Form.Item label="First Name" name="firstName">
          <Input size="large" />
        </Form.Item>
        <Form.Item label="Last Name" name="middleName">
          <Input size="large" />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input size="large" type="email" disabled />
        </Form.Item>

        <Form.Item label="Contact no" name="contactNo">
          <Input size="large" disabled />
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

export default EditProfileForm;
