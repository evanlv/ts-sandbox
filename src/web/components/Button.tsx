import clsx from "clsx"
import { ReactNode } from "react"

const variants = {
  primary:
    "text-white bg-gradient-primary hover:bg-gradient-secondary focus:ring-2 focus:ring-teal-600",
  secondary:
    "text-black bg-neutral border border-neutral hover:bg-gradient-secondary",
}

const buttonSizes = {
  xs: "px-2 py-1 text-sm",
  sm: "px-3 py-2 text-sm font-semibold",
  md: "px-6 py-3 text-base font-semibold",
  lg: "px-7 py-4 text-base font-semibold",
}

const buttonTypes = {
  submit: "submit",
  reset: "reset",
  button: "button",
}

type ButtonProps = {
  buttonName: string
  type?: keyof typeof buttonTypes | undefined
  variant?: keyof typeof variants
  size?: keyof typeof buttonSizes
  children?: ReactNode
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  const {
    buttonName,
    type,
    variant = "primary",
    size = "md",
    children,
    onClick,
    ...otherProps
  } = props

  return (
    <button
      {...otherProps}
      className={clsx(
        "rounded-md",
        variants[variant],
        buttonSizes[size],
        otherProps
      )}
      type={type}
      onClick={onClick}
    >
      <p>{buttonName}</p>
      {children}
    </button>
  )
}

export default Button
