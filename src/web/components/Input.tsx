import clsx from "clsx"

export type InputProps = {
  type?: string
  autoComplete?: string
}

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className={clsx(
        " hover:shadow-focus focus:shadow-focus hover:border-focus focus:border-focus rounded-lg border border-gray-300 bg-white p-2 text-gray-800 outline-none"
      )}
    />
  )
}

export default Input
