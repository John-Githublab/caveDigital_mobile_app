import CreateAndEdit from "@/screens/aevform/components/createandedit";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const Edit = () => {
  const params = useLocalSearchParams();
  const record = params?.record;

  return <CreateAndEdit recordId={record} isEdit={true} />;
};

export default Edit;
