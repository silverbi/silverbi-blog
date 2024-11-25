"use client";

import { createClient } from "@/lib/supabase/client";
import React, { useEffect } from "react";
import { useUser } from "store/user";

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
