import { useRouter, useSegments } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Authprovider";
import CenterLoader from "@/components/loader/CenterLoader";

const PrivateProvider = ({ children }: any) => {
  const { isAuthenticated } = useContext(Context);
  const router = useRouter();
  const segments = useSegments();
  const isNavigationReady = segments[0] === "(task)";

  useEffect(() => {
    // check is the expo router is mounted
    if (isNavigationReady && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isNavigationReady]);

  return <>{isNavigationReady ? children : <CenterLoader />}</>;
};

export default PrivateProvider;
