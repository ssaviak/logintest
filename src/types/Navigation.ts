import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Register: undefined;
  Verification: { phoneNumber: string; type: "login" | "register" } | undefined;
  Login: undefined;
};

export type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Register"
>;

export type RegisterScreenRouteProp = RouteProp<RootStackParamList, "Register">;
