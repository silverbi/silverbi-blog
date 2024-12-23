"use client";

import { createClient } from "@/lib/supabase/client";
import { useUser } from "@/store/user";
import React, { useEffect } from "react";

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const setUser = useUser(state => state.setUser);
  const supabase = createClient();

  const readUserSession = async () => {
    const { data } = await supabase.auth.getSession();
    setUser(data.session?.user);
  };

  useEffect(() => {
    readUserSession();
  }, []);

  return <>{children}</>;
};

export default SessionProvider;
