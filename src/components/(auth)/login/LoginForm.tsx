/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { setUser } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Error_Modal, Success_model } from "@/utils/modalHook";
import type { FormProps } from "antd";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "../../../redux/api/authApi";
type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [login, {isLoading: IsLoggingIn}] = useLoginMutation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onFinish: FormProps<FieldType>["onFinish"] = async (data: any) => {
    try {
      const res = await login(data).unwrap();
      if (res?.data?.accessToken) {
        Success_model({ title: "Login Successfull" });
        dispatch(
          setUser({
            user: jwtDecode(res?.data?.accessToken),
            token: res?.data?.accessToken,
          })
        );
        router.push("/");
        router.refresh();
      }
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
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
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          {
            type: "email",
            message: "Please enter a valid email address!",
          },
        ]}
      >
        <Input size="large" type="email" placeholder="Example@gamil.com" />
      </Form.Item>

      <Form.Item<FieldType>
        name="password"
        label="Password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password size="large" placeholder="*******" />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        style={{ color: "#F8FAFC" }}
      >
        <Flex justify="space-between" align="center">
          <Checkbox style={{ color: "#F8FAFC" }}>Remember me</Checkbox>
          <Link href={"/forgetPassword"} style={{ textDecoration: "" }}>
            <p className="text-[#8ABA51]">Forgot Password?</p>
          </Link>
        </Flex>
      </Form.Item>

      <Form.Item style={{ display: "flex", justifyContent: "center" }}>
        <Button
        loading={IsLoggingIn}
          htmlType="submit"
          size="large"
          style={{ backgroundColor: "#232323", color: "#F8FAFC" }}
        >
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
