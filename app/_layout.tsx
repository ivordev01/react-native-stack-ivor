import { Drawer } from "expo-router/drawer";
import React from "react";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="Home" options={{ title: "index" }} />
      <Drawer.Screen name="Tela Dois" options={{ title: "teladois" }} />
    </Drawer>

  )



  // <Stack>
  //   <Stack.Screen name="index" options={{title: "Home"}}></Stack.Screen>
  //   <Stack.Screen name="telaDois" options={{title: "Segunda Tela"}}></Stack.Screen>
  // </Stack>
}
