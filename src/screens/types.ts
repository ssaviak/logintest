export type RootStackParamList = {
  Register: undefined;
  Verification: { phoneNumber: string; type: "login" | "register" } | undefined;
  Login: undefined;
};
