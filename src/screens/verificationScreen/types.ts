import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { RouteProp } from "@react-navigation/native";

export type VerificationScreenRouteProp = RouteProp<
  RootStackParamList,
  "Verification"
>;

export type VerificationScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "Verification"
>;
