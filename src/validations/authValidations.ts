import * as Yup from "yup";

export const registrationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    ),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters long"),
});

export const newSchoolSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  county: Yup.string().required("County is required"),
  contact: Yup.string().required("Contact is required"),
  address: Yup.string().required("Address is required"),
  type: Yup.string().required("Type is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});
