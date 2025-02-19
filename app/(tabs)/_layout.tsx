import { Stack } from "expo-router";
import React from "react";

export default function Applayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="aevform/components/createandedit"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="aevform/components/view"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
