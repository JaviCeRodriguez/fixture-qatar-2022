import React from "react";
import { Formik } from "formik";
import { Button, Input } from "@chakra-ui/react";
import { supabase } from "../utils/supabaseClient";

const LoginForm: React.FC = () => {
  const signInWithEmail = async (values: any) => {
    // @ts-ignore
    // const { user, error } = await supabase.auth.signIn({
    //   email: "example@email.com",
    //   password: "example-password",
    // });
    console.log(values);
  };

  return (
    <div>
      <h1>Login Form</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={signInWithEmail}
      >
        {({ handleSubmit, handleChange, handleBlur, values }) => (
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              name="email"
            />
            <Input
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              name="password"
            />
            <Button type="submit">Submit</Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
