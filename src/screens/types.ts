export type RootStackParamList = {
  Register: undefined;
  Verification: { phoneNumber: string; type: "login" | "register" };
  Login: undefined;
  Welcome: undefined;
};
