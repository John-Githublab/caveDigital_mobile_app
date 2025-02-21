import { View, Text } from "react-native";
import React from "react";
import ViewForm from "@/screens/aevform/components/view";
import { useLocalSearchParams } from "expo-router";
import useTaskForm from "@/screens/aevform/hooks/useTaskForm";

const view = (props: any) => {
  const params = useLocalSearchParams();
  const record = params?.record;

  return <ViewForm recordId={record} />;
};

export default view;
