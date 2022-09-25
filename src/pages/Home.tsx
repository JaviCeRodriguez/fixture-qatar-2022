import React from "react";
import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";

const Home: React.FC = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <LoginForm />
    </Layout>
  );
};

export default Home;
