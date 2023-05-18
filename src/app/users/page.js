"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { headers } from "../../../next.config";
export default function User() {
  //validation form input
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email address"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
      role: yup.string().nonNullable().required("role must be one of the following values: admin, customer")
    // description: yup.string().required("Description is required"),
    // categoryId: yup.number().positive().integer(),
  });
  //insert data to server
  const postUser = (user) => {
    fetch("https://api.escuelajs.co/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((res) => console.log(res));
  };
  return (
    <>
      <h1 className="text-center">Form Register</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          role: "",
          avatar: "https://picsum.photos/640/640?r=8213",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting,resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            postUser(values);
            resetForm({values:{name:'',email:'',password:'',role:'',avatar: "https://picsum.photos/640/640?r=8213"}});
            
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <div className="block max-w-sm rounded-lg m-auto  p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <Form>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <Field
                  className="peer mb-2 border-2 bg-white block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  type="text"
                  name="name"
                />
                <ErrorMessage name="name" />
                <Field
                  className="peer mb-2 border-2 block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  type="email"
                  name="email"
                />
                <ErrorMessage name="email" />
                <Field
                  className="peer mb-2  block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  type="password"
                  name="password"
                />
                <ErrorMessage name="password" />
                {/* <Field
                  className="peer mb-2  block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  type="description"
                  as="textarea"
                  name="description"
                />
                <ErrorMessage name="description" /> */}
                <Field
                  className="peer mb-2  block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  data-te-select-init
                  as="select"
                  name="role"
                >
                  <option value="null">Please select option</option>
                  <option value="admin">Admin</option>
                  <option value="customer">Customer</option>
                </Field>
                <ErrorMessage name="role" />
                <button
                  className="bg-blue-500 dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  type="submit"
                  disabled={isSubmitting}
                  onReset={null}
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        )}  
      </Formik>
    </>
  );
}
