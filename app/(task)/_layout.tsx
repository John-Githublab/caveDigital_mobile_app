import TopHeader from "@/components/layout/TopHeader";
import { Colors } from "@/constants/Colors";
import PrivateProvider from "@/provider/PrivateProvider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function Applayout() {
  return (
    <PrivateProvider>
      <StatusBar style="auto" backgroundColor={Colors.light.primary} />
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, header: TopHeader }}
        />
        <Stack.Screen
          name="create"
          options={{ header: TopHeader, headerTitle: "Create Task" }}
        />
        <Stack.Screen
          name="edit"
          options={{ header: TopHeader, headerTitle: "Edit Task" }}
        />
        <Stack.Screen
          name="view"
          options={{ header: TopHeader, headerTitle: "View Task" }}
        />
      </Stack>
    </PrivateProvider>
  );
}
