import ConfigAPIUrl from "@/constants/ConfigApiUrl";
import Constants from "@/constants/Constants";
import { Statics } from "@/types/Task";
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
  const [statics, setStatics] = useState<Statics | undefined>();
  const [loading, setLoading] = useState(false);

  const getCount = (data: Task[]): any => {
    const statics: any = { ...Constants.staticsDefault };
    data?.forEach((value) => {
      statics[value?.status?.toLowerCase()] += 1;
    });
    statics["total"] = Object.keys(statics)?.reduce(
      (acc, key) => acc + statics[key],
      0
    );
    setStatics(statics);
  };

  const getTaskDetails = async () => {
    try {
      setLoading(true);
      const response = await APIRequest.request("GET", ConfigAPIUrl.tasks, "");
      if (!response) return;
      getCount(response?.data?.result);
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
    statics,
  };
};

export default useTask;
