import { COLORS } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 40,
    paddingTop: 120.42,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#6b7280",
    marginBottom: 20,
  },
  inputContainer: {
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "500",
    color: COLORS.darkGrey,
  },
  hint: {
    fontSize: 12,
    color: "#9ca3af",
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: "#6b7280",
  },
  footerLink: {
    fontSize: 14,
    color: COLORS.secondaryTorquoise,
    marginLeft: 5,
  },
});

export default styles;
