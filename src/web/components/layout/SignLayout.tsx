import Link from "@/web/components/Link"
import { UserCircleIcon } from "@heroicons/react/24/solid"

const SignLayout = () => {
  return (
    <div className="items-center§§ order-last flex">
      <Link href="/sign" noStyle>
        <UserCircleIcon className="mx-2 flex h-10 w-10 hover:text-amber-700 sm:hidden" />
      </Link>

      <div className="order-last mx-4 hidden shrink place-self-end sm:ml-5 sm:flex">
        <Link href="/sign">Sign</Link>
      </div>
    </div>
  )
}

export default SignLayout
