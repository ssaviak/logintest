import { COLORS } from "@/constants/Colors";
import { FC } from "react";
import { View, Text, TextInput } from "react-native";

interface InputProps {
  touched: any;
  errors: any;
  handleChange: any;
  value: any;
}

export const Input: FC<InputProps> = ({
  touched,
  errors,
  handleChange,
  value,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Phone number</Text>
      <TextInput
        style={styles.input}
        placeholder="+33 222 111 2222"
        onChangeText={handleChange("phoneNumber")}
        onBlur={handleBlur("phoneNumber")}
        value={values.phoneNumber}
        keyboardType="phone-pad"
      />
      {touched.phoneNumber && errors.phoneNumber && (
        <Text style={styles.errorText}>{errors.phoneNumber}</Text>
      )}
    </View>
  );
};

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
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
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
