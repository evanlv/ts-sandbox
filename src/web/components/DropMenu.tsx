import { XMarkIcon } from "@heroicons/react/24/solid"
import clsx from "clsx"
import { ReactNode } from "react"

export type DropMenuProps = {
  children?: ReactNode
  className?: string
  onClick?: () => void
}

const DropMenu = (props: DropMenuProps) => {
  const { children, className, onClick, ...otherProps } = props

  return (
    <div
      {...otherProps}
      className={clsx("bg-gradient-primary h-screen w-1/2", className)}
    >
      {children}
      <XMarkIcon className="m-4 h-10 w-10" onClick={onClick} />
    </div>
  )
}

export default DropMenu
