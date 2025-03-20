import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Main } from "./components/Main";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <View style={styles.emptyDiv}>
          <StatusBar style="light" />
          <Main />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    //backgroundColor: "#dcdcdc",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  emptyDiv: {},
});
