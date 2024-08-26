import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

export type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login",
  "Register"
>;
