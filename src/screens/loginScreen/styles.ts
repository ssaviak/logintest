import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120.21,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
  },
  content: {
    marginTop: 40,
  },
  inputContainer: {
    gap: 8,
  },
  input: {
    borderColor: COLORS.lightGrey,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  hint: {
    fontSize: 12,
    color: "#9ca3af",
    marginBottom: 20,
  },
  label: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "500",
    color: COLORS.darkGrey,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    marginTop: 24,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#6b7280",
  },
  footerLink: {
    marginLeft: 4,
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.secondaryTorquoise,
  },
});

export default styles;
