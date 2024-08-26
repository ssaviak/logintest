import { COLORS } from "@/constants/Colors";
import { View, Text, StyleSheet } from "react-native";

export const LoginTitle = ({
  title,
  description,
  isLogin = false,
}: {
  title?: string;
  description: string;
  isLogin?: boolean;
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, isLogin && styles.loginTitle]}>
        {title || "Welcome to App"}
      </Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontFamily: "Outfit-Bold",
    fontSize: 24,
    lineHeight: 28.8,
  },
  description: {
    fontFamily: "Inter",
    fontSize: 16,
    lineHeight: 22.4,
    color: COLORS.grey,
    textAlign: "center",
  },
  loginTitle: {
    color: COLORS.darkGrey,
  },
});
