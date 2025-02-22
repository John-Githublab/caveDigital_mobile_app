import { View, Text } from "react-native";
import React, { useState } from "react";
import APIRequest from "@/utils/ApiRequest";
import ConfigAPIUrl from "@/constants/ConfigApiUrl";
import { toast } from "@/utils/Toast";

const useForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const handleSendEmail = async (email: string) => {
    try {
      setLoading(true);
      const response = await APIRequest.request(
        "GET",
        ConfigAPIUrl.triggerMail + "/" + email,
        ""
      );
      if (!response) return;
      toast(response?.data?.message || "");
      return true;
    } catch {
    } finally {
      setLoading(false);
    }
  };
  return { loading, handleSendEmail };
};

export default useForgotPassword;
