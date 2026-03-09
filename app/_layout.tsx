import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Calculadora - Home", headerStyle: { backgroundColor: "#363636" }, headerTintColor: "#FFFFFF" }} />
      <Stack.Screen name="telaadicao" options={{ title: "Calculadora - Adição", headerStyle: { backgroundColor: "#363636" }, headerTintColor: "#FFFFFF" }} />
      <Stack.Screen name="telasubtracao" options={{ title: "Calculadora - Subtração", headerStyle: { backgroundColor: "#363636" }, headerTintColor: "#FFFFFF" }} />
      <Stack.Screen name="telamultiplicacao" options={{ title: "Calculadora - Multiplicação", headerStyle: { backgroundColor: "#363636" }, headerTintColor: "#FFFFFF" }} />
      <Stack.Screen name="teladivisao" options={{ title: "Calculadora - Divisão", headerStyle: { backgroundColor: "#363636" }, headerTintColor: "#FFFFFF" }} />
    </Stack>
  );
}
