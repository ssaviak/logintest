import { SafeAreaView, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { AppNavigator } from "@/components";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Outfit-Regular": require("@/assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Bold": require("@/assets/fonts/Outfit-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
