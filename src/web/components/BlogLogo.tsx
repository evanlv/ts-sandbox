import Link from "@/web/components/Link"
import clsx from "clsx"
import Image from "next/image"

type LogoProps = {
  className?: string
}

const BlogLogo = (props: LogoProps) => {
  const { className, ...otherProps } = props

  return (
    <Link {...otherProps} href="/">
      <Image
        src="/baka-bird.svg"
        className={clsx(
          "mx-4 rounded-2xl hover:bg-amber-600 hover:ring-1 hover:ring-amber-600",
          className
        )}
        width={40}
        height={40}
        alt="Blog Logo"
        priority
      />
    </Link>
  )
}

export default BlogLogo
