"use client";
import { ConfigProvider } from "antd";
import { Form, Input, Button } from "antd";

const EditProfileForm = () => {
// @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
  const onFinishEditProfile = (values) => {
    console.log("Edit Profile values:", values);
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
          },
          Form: {
            labelColor: "white",
          },
        },
      }}
    >
      <Form
        layout="vertical"
        onFinish={onFinishEditProfile}
        initialValues={{
          userName: "Akash Sharif",
          email: "akash@gmail.com",
          contactNo: "99007007007",
        }}
      >
        <Form.Item
          label="User Name"
          name="userName"
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
         
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="Contact no"
          name="contactNo"
        >
          <Input size="large" />
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
