import clsx from "clsx"
import NextLink from "next/link"
import { ReactNode } from "react"

type LinkProps = {
  href: string
  className?: string
  children: ReactNode
  passHref?: boolean
  noStyle?: boolean
}

const Link = (props: LinkProps) => {
  const { href, children, passHref, noStyle, className, ...otherProps } = props

  return (
    <NextLink
      {...otherProps}
      href={href}
      passHref={passHref}
      className={clsx(
        { "text-white hover:text-amber-700 hover:underline": !noStyle },
        className,
        otherProps
      )}
    >
      {children}
    </NextLink>
  )
}

export default Link
