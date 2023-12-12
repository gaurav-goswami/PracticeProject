import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useState } from "react";
import { IUserDetails } from "../types";
import { login } from "../lib/Auth";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [form] = useForm();

  // console.log("form" , form.getFieldValue("email"));

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  form.setFieldsValue({ email: "eve.holt@reqres.in", password: "cityslicka" });

  const handleLogin = (value: IUserDetails) => {
    login(value, setLoading, navigate);
  };

  return (
    <>
      <Form
        autoComplete="off"
        form={form}
        className="w-[300px] p-2 flex flex-col gap-4"
        onFinish={handleLogin}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Email is required",
            },
            {
              type: "email",
              message: "Invalid email",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter email" allowClear />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Password is required",
            },
            {
              min: 8,
              message: "Password should be of min. 8 characters",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Enter password" allowClear />
        </Form.Item>
        <Form.Item>
          <Button
            block
            htmlType="submit"
            name="submit"
            disabled={loading}
            loading={loading}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
