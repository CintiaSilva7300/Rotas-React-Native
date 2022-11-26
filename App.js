import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Routes } from "./src/routes";
// import { ScreanA } from "./src/screens/Home/ScreanA";
// import { ScreanB } from "./src/screens/Home/ScreanB";

export default function App() {
  return <Routes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
