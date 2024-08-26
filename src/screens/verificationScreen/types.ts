export type VerificationScreenProps = {
  route: {
    params: {
      phoneNumber: string;
      type: "login" | "register";
    };
  };
  navigation: any;
};
