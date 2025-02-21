import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { Context } from "./Authprovider";
import { router } from "expo-router";

const PrivateProvider = ({ children }: any) => {
  const { isAuthenticated } = useContext(Context);

  // useEffect(() => {
  //   if (!isAuthenticated) router.push("/login");
  // }, [isAuthenticated]);

  return <>{children}</>;
};

export default PrivateProvider;
