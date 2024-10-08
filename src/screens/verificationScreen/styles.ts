import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 120.42,
    gap: 40,
  },
  content: { gap: 32 },
  cell: {
    width: 52.5,
    height: 64,
    fontSize: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#EEE8F0",
    textAlign: "center",
    lineHeight: 64,
  },
  codeFieldRoot: {},
  codeContainer: {
    gap: 6,
  },
  focusCell: {
    borderColor: "#A180DC",
  },
  label: {
    fontFamily: "Inter",
    fontSize: 12,
    lineHeight: 16.8,
    fontWeight: "500",
  },
  resendButton: {
    alignSelf: "center",
  },
  resendText: {
    color: COLORS.secondaryTorquoise,
    textDecorationLine: "underline",
  },
  dividerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: "600",
    color: COLORS.lightGrey,
    textAlign: "center",
  },
});

export default styles;
