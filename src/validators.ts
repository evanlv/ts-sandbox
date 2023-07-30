import * as yup from "yup"

export const emailValidator = yup
  .string()
  .label("E-mail")
  .email("Must be a valid email.")
  .lowercase()
  .trim()

export const passwordValidator = yup
  .string()
  .label("Password")
  .min(8)
  .matches(/[a-zA-z1-9]/, "Password can only contain letters or numbers.") //need to learn regex
  .trim()
