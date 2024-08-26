import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Platform, Alert } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { verifyUser } from "@/api/api";
import { Button } from "@/components/button/Button";
import { LoginTitle } from "@/components/loginTitle/LoginTitle";

import styles from "./VerificationScreen.styles";

interface VerificationScreenProps {
  route: {
    params: {
      phoneNumber: string;
      type: "login" | "register";
    };
  };
  navigation: any;
}

const VerificationScreen: React.FC<VerificationScreenProps> = ({
  route,
  navigation,
}) => {
  const { phoneNumber, type } = route.params;
  const CELL_COUNT = 6;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleVerification = async () => {
    try {
      const response = await verifyUser(phoneNumber, value);

      if (type === "login") {
        console.log("Login process completed");
      } else {
        console.log("Registration process completed");
      }
      setValue("");

      Alert.alert("Verification successful", "You can now login");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Verification failed", error);
    }
  };

  useEffect(() => {
    setValue("");
  }, [route.params.phoneNumber, route.params.type]);

  return (
    <View style={styles.container}>
      <LoginTitle description="Enter the confirmation code that will be sent to you by SMS" />

      <View style={styles.content}>
        <View style={styles.codeContainer}>
          <Text style={styles.label}>Secure code</Text>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            autoComplete={Platform.select({
              android: "sms-otp",
              default: "one-time-code",
            })}
            testID="my-code-input"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>

        <TouchableOpacity
          style={styles.resendButton}
          onPress={() => console.log("Resend The Code")}
        >
          <Text style={styles.resendText}>Resend the Code</Text>
        </TouchableOpacity>

        <Button
          title={type === "login" ? "Login" : "SignUp"}
          onPress={handleVerification}
          disabled={value.length < CELL_COUNT}
        />
      </View>
    </View>
  );
};

export default VerificationScreen;
