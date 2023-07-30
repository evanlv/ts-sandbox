import BlogLogo from "@/web/components/BlogLogo"
import Navbar from "@/web/components/Navbar"
import SignLayout from "@/web/components/layout/SignLayout"
import Page, { PageProps } from "@/web/components/Page"
import Footer from "@/web/components/Footer"
import Sidebar from "@/web/components/Sidebar"

const MainLayout = (props: PageProps) => {
  const { children } = props

  return (
    <Page>
      <div className="sm:bg-gradient-primary flex h-20 w-full items-center justify-between gap-x-2 rounded-b py-5 opacity-90 sm:shadow-sm sm:shadow-black">
        <Sidebar />
        <BlogLogo />
        <Navbar />
        <SignLayout />
      </div>

      <div className="h-screen">{children}</div>
      <Footer />
    </Page>
  )
}

export default MainLayout
