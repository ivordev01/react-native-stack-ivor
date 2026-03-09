import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="Home" options={{ title: "Home" }} />
      <Stack.Screen name="Tela Adição" options={{ title: "Tela Adicao" }} />
    </Stack>
  );
}
