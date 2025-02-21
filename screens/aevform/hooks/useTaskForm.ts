import ConfigAPIUrl from "@/constants/ConfigApiUrl";
import APIRequest from "@/utils/ApiRequest";
import { router } from "expo-router";
import { useEffect, useState } from "react";

interface Task {
  _id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
}

const useTaskForm = (record: string) => {
  const [task, setTask] = useState<Task | null>();
  const [loading, setLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const getTaskDetails = async (record: string) => {
    try {
      setLoading(true);
      const response = await APIRequest.request(
        "GET",
        ConfigAPIUrl.tasks + "/" + record,
        ""
      );
      if (!response) return;
      setTask(response?.data?.result);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const sendToServer = async (record: string, form: any) => {
    try {
      setIsSubmit(true);
      let url = ConfigAPIUrl.tasks;
      let method = "POST";
      let body = form;

      if (record) {
        url = ConfigAPIUrl.tasks + "/" + record;
        body = form;
        method = "PUT";
      }

      const response = await APIRequest.request(method, url, body);
      if (!response) return;

      router.push("/(task)");
    } catch {
    } finally {
      setIsSubmit(false);
    }
  };

  useEffect(() => {
    if (!record) return;
    getTaskDetails(record);
    return () => {
      setTask(null);
    };
  }, [record]);
  return {
    loading,
    getTaskDetails,
    task,
    sendToServer,
    isSubmit,
  };
};

export default useTaskForm;
