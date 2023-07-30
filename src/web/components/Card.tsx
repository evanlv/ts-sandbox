import { ReactNode } from "react"

type CardProps = {
  children: ReactNode
}

const Card = (props: CardProps) => {
  const { children } = props

  return (
    <div className="my-10 mx-auto flex w-full flex-col gap-y-2 rounded-lg bg-gray-100 p-8 md:w-1/2">
      {children}
    </div>
  )
}

export default Card
