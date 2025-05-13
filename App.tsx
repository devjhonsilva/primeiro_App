import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { Groups } from "./src/screens/Groups";
import theme from "@theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}
