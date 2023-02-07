import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./sotre/store";
import MainScreen from "./screens/MainScreen";

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
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
