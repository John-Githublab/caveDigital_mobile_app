import ConfigAPIUrl from "@/constants/ConfigApiUrl";
import APIRequest from "@/utils/ApiRequest";
import { useEffect, useState } from "react";

interface Task {
  _id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
}

const useTask = (initailFetch: boolean) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);

  const getTaskDetails = async () => {
    try {
      setLoading(true);
      const response = await APIRequest.request("GET", ConfigAPIUrl.tasks, "");
      if (!response) return;
      setTasks(response?.data?.result);
    } catch {
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (!initailFetch) return;
    getTaskDetails();
    return () => {
      setTasks([]);
    };
  }, [JSON.stringify(initailFetch)]);
  return {
    loading,
    getTaskDetails,
    tasks,
  };
};

export default useTask;
