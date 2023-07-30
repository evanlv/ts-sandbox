import Head from "next/head"
import { ReactNode } from "react"

export type PageProps = {
  children?: ReactNode
  title?: string
}

const Page = (props: PageProps) => {
  const { title, children, ...otherProps } = props

  //create a const to resolve hydratation warn
  const pageName = `Blog Project - ${title}`

  return (
    <div {...otherProps}>
      <Head>
        <title>{pageName}</title>
        <meta charSet="utf-8" />
      </Head>
      {children}
    </div>
  )
}

export default Page
