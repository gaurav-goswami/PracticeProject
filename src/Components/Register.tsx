import { Button, Form, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useState } from "react";
import { signup } from "../lib/Auth";
import { ISignUpData } from "../types";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const [messageApi, contentHandle] = message.useMessage();
  const handleSignup = (data: ISignUpData) => {
    const { email, password } = data;
    signup({ email, password }, setLoading, navigate, messageApi);
  };

  return (
    <>
    {contentHandle}
      <div className="flex flex-col">
        <Form
          form={form}
          className="w-[300px] py-4 flex flex-col gap-1"
          onFinish={handleSignup}
        >
          <Form.Item
            name="firstName"
            rules={[
              {
                required: true,
                message: "First name is required",
              },
              {
                min: 2,
                message: "First name should be of minimum 2 character",
              },
              {
                max: 25,
                message: "First name should not exceed 25 characters",
              },
            ]}
            hasFeedback
          >
            <Input allowClear placeholder="Enter first name" />
          </Form.Item>

          <Form.Item
            name="lastName"
            rules={[
              {
                required: true,
                message: "Last name is required",
              },
              {
                min: 2,
                message: "Last name should be of minimum 2 character",
              },
              {
                max: 25,
                message: "Last name should not exceed 25 characters",
              },
            ]}
            hasFeedback
          >
            <Input allowClear placeholder="Enter last name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Email is required" },
              {
                type: "email",
                message: "Provide a valid email",
              },
            ]}
            hasFeedback
          >
            <Input allowClear placeholder="Enter email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
            hasFeedback
          >
            <Input.Password allowClear placeholder="Enter password" />
          </Form.Item>

          <Button htmlType="submit" disabled={loading} loading={loading}>
            Register
          </Button>
        </Form>
        <Button block onClick={() => navigate("/")}>
          Login
        </Button>
      </div>
    </>
  );
};

export default Register;
