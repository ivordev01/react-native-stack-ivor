import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="Home" options={{ title: "home" }} />
      <Stack.Screen name="Tela Adição" options={{ title: "TelaAdicao" }} />
    </Stack>


  
  );
}
