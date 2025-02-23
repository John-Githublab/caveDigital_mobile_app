import ConfigAPIUrl from "@/constants/ConfigApiUrl";
import APIRequest from "@/utils/ApiRequest";
import LocalStorage from "@/utils/LocalStorage";
import { toast } from "@/utils/Toast";
import { router } from "expo-router";
import { useState } from "react";

const useForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const handleSendEmail = async (email: string) => {
    try {
      setLoading(true);
      const response = await APIRequest.request(
        "GET",
        ConfigAPIUrl.triggerMail + "?email=" + email,
        ""
      );

      if (!response) return;
      toast(response?.data?.message || "");
      return true;
    } catch {
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitOtp = async (email: string, otp: number | string) => {
    try {
      setLoading(true);
      const form = { email, otp };
      const response = await APIRequest.request(
        "POST",
        ConfigAPIUrl.verifyOtp,
        form
      );
      if (!response) return;
      // store the temporary token and make request with this for changing password
      await LocalStorage.storeData(
        "tempToken",
        response?.data?.result?.temporaryToken
      );
      toast(response?.data?.message || "");
      return true;
    } catch {
      return false;
    } finally {
      setLoading(false);
    }
  };
  const handleChangePassword = async (password: string) => {
    try {
      setLoading(true);
      const form = { password };
      const headers = { token: await LocalStorage.getData("tempToken") };
      const response = await APIRequest.request(
        "PUT",
        ConfigAPIUrl.updatePassword,
        form,
        headers
      );

      if (!response) return;
      await LocalStorage.removeData("tempToken");
      toast(response?.data?.message || "");
      router.push("/login");
      return true;
    } catch {
      return false;
    } finally {
      setLoading(false);
    }
  };
  return { loading, handleSendEmail, handleSubmitOtp, handleChangePassword };
};

export default useForgotPassword;
