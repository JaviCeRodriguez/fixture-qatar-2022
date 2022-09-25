import React, { useContext, useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "../utils/supabaseClient";

const AuthContext = React.createContext<any>(null); // TODO: Change type

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then((authSession) => {
      setUser(authSession?.data?.session?.user ?? null);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const value = {
    singUp: (data: { email: string; password: string }) =>
      supabase.auth.signUp(data),
    signInPassword: (data: { email: string; password: string }) =>
      supabase.auth.signInWithPassword(data),
    signOut: () => supabase.auth.signOut(),
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
