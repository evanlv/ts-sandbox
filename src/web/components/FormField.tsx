import Input, { InputProps } from "@/web/components/Input"
import { Field, FieldProps } from "formik"

export interface FormFieldProps extends InputProps {
  name: string
  label: string
}

const FormField = (props: FormFieldProps) => {
  const { name, label, type } = props

  return (
    <Field name={name}>
      {({ field, meta: { touched, error } }: FieldProps) => (
        <label className="flex flex-col">
          <span className="px-1 text-sm font-bold text-gray-800">{label}</span>
          <Input {...field} type={type} />
          {touched && error ? (
            <span className="text-red-600">{error}</span>
          ) : null}
        </label>
      )}
    </Field>
  )
}

export default FormField
