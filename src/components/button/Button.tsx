import { COLORS } from "@/constants/Colors";
import { FC } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

interface CustomButtonProps {
  title?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  secondary?: boolean;
  disabled?: boolean;
}

export const Button: FC<CustomButtonProps> = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        props.style,
        props.secondary && styles.secondary,
        props.disabled && styles.disabled,
      ]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={[styles.text, props.secondary && styles.secondaryText]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 358,
    height: 44,
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,

    backgroundColor: COLORS.primary,
    borderRadius: 8,

    shadowColor: "#101828",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    fontFamily: "Inter",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.white,
  },
  secondary: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.silverSand,
    borderWidth: 1,
  },
  secondaryText: {
    color: COLORS.black,
  },
  disabled: {
    opacity: 0.25,
  },
});
