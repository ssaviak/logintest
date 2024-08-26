import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";

import { registerUser } from "@/api";

import { nameSchema } from "@/constants";
import { Button, Title } from "@/components";
import { RegisterScreenNavigationProp } from "./types";

import styles from "./styles";

export const RegisterScreen = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  const handleRegister = async (values: {
    name: string;
    lastName: string;
    phoneNumber: string;
  }) => {
    try {
      const response = await registerUser(values);
      navigation.navigate("Verification", {
        phoneNumber: values.phoneNumber,
        type: "register",
      });
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name: "", lastName: "", phoneNumber: "" }}
        validationSchema={nameSchema}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate("Verification", {
            phoneNumber: values.phoneNumber,
            type: "register",
          });
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <Title
              description="Please enter your details."
              title="Welcome to App"
            />

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter name"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                maxLength={30}
              />
              {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter last name"
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                value={values.lastName}
                maxLength={30}
              />
              {touched.lastName && errors.lastName && (
                <Text style={styles.errorText}>{errors.lastName}</Text>
              )}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Phone number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter phone number"
                onChangeText={(text) => {
                  if (!text.startsWith("+")) {
                    handleChange("phoneNumber")(`+${text}`);
                  } else {
                    handleChange("phoneNumber")(text);
                  }
                }}
                onBlur={handleBlur("phoneNumber")}
                value={values.phoneNumber}
                keyboardType="phone-pad"
                maxLength={12}
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
              )}
            </View>

            <Button
              title="Continue"
              onPress={handleSubmit}
              disabled={
                !values.name ||
                !values.lastName ||
                !values.phoneNumber ||
                Boolean(errors.name) ||
                Boolean(errors.lastName) ||
                Boolean(errors.phoneNumber)
              }
            />

            <View style={styles.footer}>
              <Text style={styles.footerText}>Do you have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text style={styles.footerLink}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
