import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Platform, Alert } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { verifyUser } from "@/api";
import { Button, Title } from "@/components";
import {
  VerificationScreenNavigationProps,
  VerificationScreenRouteProp,
} from "./types";

import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

const CELL_COUNT = 7;

export const VerificationScreen = () => {
  const route = useRoute<VerificationScreenRouteProp>();
  const navigation = useNavigation<VerificationScreenNavigationProps>();

  const { phoneNumber, type } = route.params;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onHandleChangeText = (text: string) => {
    setValue(text.length === 3 && value.length === 2 ? `${text}-` : text);
  };

  const handleVerification = async () => {
    try {
      const response = await verifyUser(phoneNumber, value);
      console.log(
        type === "login"
          ? "Login process completed"
          : "Registration process completed"
      );
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
      <Title
        description="Enter the confirmation code that will be sent to you by SMS"
        title="Welcome to App"
      />

      <View style={styles.content}>
        <View style={styles.codeContainer}>
          <Text style={styles.label}>Secure code</Text>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={onHandleChangeText}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            testID="my-code-input"
            renderCell={({ index, symbol, isFocused }) =>
              index === 3 ? (
                <View style={styles.dividerContainer} key={index}>
                  <Text style={styles.divider}>-</Text>
                </View>
              ) : (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )
            }
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
