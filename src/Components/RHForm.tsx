import React from "react";
import { useForm } from "react-hook-form";

const RHForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    getValues,
  } = useForm();

  const submitForm = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <div className="w-screen h-screen grid place-items-center">
        <form
          className="flex flex-col gap-4 w-[300px]"
          onSubmit={handleSubmit(submitForm)}
          autoComplete="off"
        >
          <input
            type="text"
            placeholder="Enter first name"
            className="p-1 border border-gray-400 rounded-sm"
            {...register("first_name", {
              required: "First name is required",
              minLength: {
                value : 2,
                message : "Minimum 2 characters is required"
              },
            })}
          />
          {errors.first_name && (
            <span className="text-red-500">{`${errors.first_name.message}`}</span>
          )}
          <input
            type="text"
            placeholder="Enter last name"
            className="p-1 border border-gray-400 rounded-sm"
            {...register("last_name", {
              required: "Last name is required",
              minLength: {
                value : 2,
                message : "Minimum 2 characters is required"
              },
            })}
          />
          {errors.last_name && (
            <span className="text-red-500">{`${errors.last_name.message}`}</span>
          )}
          <input
            type="email"
            placeholder="Enter email"
            className="p-1 border border-gray-400 rounded-sm"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-500">{`${errors.email.message}`}</span>
          )}
          <input
            type="password"
            placeholder="Enter password"
            className="p-1 border border-gray-400 rounded-sm"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value : 8,
                message : "Minimum 8 characters is required"
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{`${errors.password.message}`}</span>
          )}
          <input
            type="password"
            placeholder="Confirm password"
            className="p-1 border border-gray-400 rounded-sm"
            {...register("confirm_password", {
              required: "Confirm password is required",
              validate: (value) =>
                value === getValues("password") || "Password must match",
            })}
          />
          {errors.confirm_password && (
            <span className="text-red-500">{`${errors.confirm_password.message}`}</span>
          )}
          <button className="bg-blue-400 p-1 text-white" disabled={isLoading}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default RHForm;
