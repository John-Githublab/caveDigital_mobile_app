import CenterLoader from "@/components/loader/CenterLoader";
import ConfigAPIUrl from "@/constants/ConfigApiUrl";
import Constants from "@/constants/Constants";
import { Content } from "@/types/Modal";
import { User } from "@/types/User";
import APIRequest from "@/utils/ApiRequest";
import LocalStorage from "@/utils/LocalStorage";
import { toast } from "@/utils/Toast";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { useModal } from "./ConfirmationProvider";

export const Context = React.createContext<any>({});

const Authprovider = ({ children }: any) => {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState<User | null>();
  const [showModal] = useModal();

  useEffect(() => {
    checkAuthenticated();
  }, [isAuthenticated]);

  const checkAuthenticated = async () => {
    try {
      setLoading(true);
      const response: any = await APIRequest.request(
        "GET",
        ConfigAPIUrl.islogin,
        ""
      );

      if (!response) return;
      const data: any = response?.data;
      const result = data?.result;
      setIsAuthenticated(true);
      setUserDetails(result);
      await LocalStorage.storeData("user", result);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await LocalStorage.removeData("user");
    await LocalStorage.removeData("token");
    setUserDetails(null);
    toast("Logged out successfully");
    router.push("/login");
  };

  const handleLogout = () => {
    showModal({
      ...Constants.modalConfig.logout,
      handleConfirm: logout,
    } as Content);
  };

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        handleLogout,
        userDetails,
        setUserDetails,
        setIsAuthenticated,
      }}
    >
      {loading ? <CenterLoader /> : children}
    </Context.Provider>
  );
};

export default Authprovider;
