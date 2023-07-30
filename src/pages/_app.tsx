import type { AppProps } from "next/app"
import MainLayout from "@/web/components/layout/MainLayout"

import "@/web/styles/tailwind.css"

const App = ({ Component, pageProps, ...otherProps }: AppProps) => {
  return (
    <MainLayout>
      <Component {...pageProps} {...otherProps} />
    </MainLayout>
  )
}

export default App
