import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Provider } from "react-redux";
import store from "./src/reduxContainer/store/store";
import StackScreens from "./src/components/screens/NavScreens";

export default function App() {
  return (
    <Provider store={store}>
      <StackScreens />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
