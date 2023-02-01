import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TRPCProvider } from "./utils/trpc";
import AuthContextProvider from "./utils/authContext";
export default function App() {
  return (
    <TRPCProvider>
      <AuthContextProvider>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text>This is expo test app</Text>
        </View>
      </AuthContextProvider>
    </TRPCProvider>
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
