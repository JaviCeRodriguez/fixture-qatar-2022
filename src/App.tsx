import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from "./contexts/AuthContext";
import GroupStage from "./pages/GroupStage";
import Home from "./pages/Home";
import { supabase } from "./utils/supabaseClient";

const App: React.FC = () => {
  // const [session, setSession] = useState<Session | null>(null);
  // const [loading, setLoading] = useState(true);

  // const getSession = async () => {
  //   setLoading(true);
  //   await supabase.auth.getSession().then((authSession) => {
  //     console.log(authSession);
  //     if (authSession.error || !authSession.data.session) {
  //       setSession(null);
  //     } else {
  //       setSession(authSession.data.session);
  //     }
  //   });
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getSession();
  // }, []);

  return (
    <AuthProvider>
      {/* <Layout session={session} loading={loading}> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fase-grupos" element={<GroupStage />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
};

export default App;
