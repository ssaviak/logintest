import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "@/constants/colors";
import { Button } from "@/components";

export const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/welcome_image.png")}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>Welcome to App</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. A ut pellentesque amet
          phasellus augue. Neque at felis pulvinar malesuada varius egestas dis
          cras.
        </Text>
      </View>
      <View style={styles.actionsContainer}>
        <Button
          title="Login"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
        <Button
          title="Register"
          onPress={() => {
            navigation.navigate("Register");
          }}
          secondary
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 49,
    gap: 32,
    backgroundColor: COLORS.white,
  },
  image: {
    alignContent: "center",
    alignItems: "center",
    width: 358,
    height: 358,
  },
  title: {
    fontFamily: "Outfit-Bold",
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    fontFamily: "Inter",
    fontSize: 16,
    lineHeight: 19.2,
  },
  actionsContainer: {
    gap: 8,
  },
});
