import { emailValidator, passwordValidator } from "@/validators"
import EmailFormField from "@/web/components/EmailFormField"
import Card from "@/web/components/Card"
import { Form, Formik } from "formik"
import { useCallback } from "react"
import { object } from "yup"
import PasswordFormField from "@/web/components/PasswordFormField"
import SubmitButton from "@/web/components/SubmitButton"
import Link from "next/link"

const initialValues = { email: "", password: "" }
const validationSchema = object().shape({
  email: emailValidator.required(),
  password: passwordValidator.required(),
})

const SignCard = () => {
  // eslint-disable-next-line no-console
  const handleSubmit = useCallback(() => console.log("submitted"), [])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Card>
          <EmailFormField />
          <PasswordFormField />
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            Forget my password
          </Link>
          <SubmitButton />
        </Card>
      </Form>
    </Formik>
  )
}

export default SignCard
