import * as Yup from "yup";

export const phoneNumberSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^\+\d{1,3}\s?\d{3}\s?\d{3}\s?\d{4}$/, "Invalid phone number")
    .min(12, "Phone number is too short")
    .required("Phone number is required"),
});

export const nameSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .max(50, "Too long")
    .min(2, "Too short"),
  lastName: Yup.string().required("Last name is required").min(2, "Too short"),
  phoneNumber: Yup.string()
    .matches(/^\+\d{1,3}\s?\d{3}\s?\d{3}\s?\d{4}$/, "Invalid phone number")
    .required("Phone number is required")
    .max(13, "Too long"),
});
