import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { loginUser } from "@/api";
import { phoneNumberSchema } from "@/constants";
import { Button, Title } from "@/components";
import { LoginScreenNavigationProp } from "./types";

import styles from "./styles";

export const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = async (values: { phoneNumber: string }) => {
    try {
      const response = await loginUser(values.phoneNumber);
      console.log("Login successful:", response);
      navigation.navigate("Verification", {
        phoneNumber: values.phoneNumber,
        type: "login",
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Title description="Please enter your details." title="Welcome to App" />
      <Formik
        initialValues={{ phoneNumber: "" }}
        validationSchema={phoneNumberSchema}
        onSubmit={handleLogin}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.content}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Phone number</Text>
              <TextInput
                style={styles.input}
                placeholder="+33 222 111 2222"
                onChangeText={(text) => {
                  handleChange("phoneNumber")(
                    !text.startsWith("+") && values.phoneNumber.length === 0
                      ? `+${text}`
                      : text
                  );
                }}
                onBlur={handleBlur("phoneNumber")}
                value={values.phoneNumber}
                keyboardType="phone-pad"
                maxLength={13}
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
              )}
            </View>

            <Button
              title="Continue"
              onPress={handleSubmit}
              disabled={
                !values.phoneNumber ||
                Boolean(errors.phoneNumber) ||
                values.phoneNumber.length < 12
              }
              style={styles.button}
            />

            <View style={styles.footer}>
              <Text style={styles.footerText}>Don’t have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.footerLink}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
