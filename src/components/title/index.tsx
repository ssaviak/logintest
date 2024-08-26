import { COLORS } from "@/constants/colors";
import { View, Text, StyleSheet } from "react-native";

export const Title = ({
  title,
  description,
  isGrey = false,
}: {
  title?: string;
  description: string;
  isGrey?: boolean;
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, isGrey && styles.loginTitle]}>{title}</Text>
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
