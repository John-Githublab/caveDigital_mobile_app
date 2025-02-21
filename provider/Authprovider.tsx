import ConfigAPIUrl from "@/constants/ConfigApiUrl";
import APIRequest from "@/utils/ApiRequest";
import LocalStorage from "@/utils/LocalStorage";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import Icons from "react-native-vector-icons/";

export const Context = React.createContext({ isAuthenticated: true });

const Authprovider = ({ children }: any) => {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const checkAuthenticated = async () => {
    try {
      setLoading(true);
      const response: any = await APIRequest.request(
        "GET",
        ConfigAPIUrl.islogin,
        ""
      );

      if (!response) return router.replace("/login");
      const data: any = response?.data;
      const result = data?.result;
      setIsAuthenticated(true);
      await LocalStorage.storeData("user", result);
    } catch {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    checkAuthenticated();
  }, [isAuthenticated]);

  return (
    <Context.Provider value={{ isAuthenticated: isAuthenticated }}>
      {loading ? <ActivityIndicator size="large" /> : children}
    </Context.Provider>
  );
};

export default Authprovider;
