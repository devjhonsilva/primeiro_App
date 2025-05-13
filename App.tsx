import { StatusBar } from "expo-status-bar";
import { Groups } from "./src/screens/Groups";

import { ThemeProvider } from "styled-components/native";
import theme from "@theme/theme";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <ThemeProvider theme={theme}>
      {!fontsLoaded ? <Groups /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
