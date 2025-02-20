import TopHeader from "@/components/layout/TopHeader";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function Applayout() {
  return (
    <>
      <StatusBar style="auto" backgroundColor={Colors.light.primary} />
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, header: TopHeader }}
        />
        <Stack.Screen
          name="create&edit"
          options={{ header: TopHeader, headerTitle: "Create" }}
        />
        <Stack.Screen name="view" options={{ header: TopHeader }} />
      </Stack>
    </>
  );
}
