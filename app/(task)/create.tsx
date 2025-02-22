import CreateAndEdit from "@/screens/aevform/components/createandedit";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const create = () => {
  const params = useLocalSearchParams();
  const record = params?.record;

  return <CreateAndEdit recordId={record} />;
};

export default create;
