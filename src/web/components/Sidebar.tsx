import Link from "@/web/components/Link"
import { Menu, Transition } from "@headlessui/react"
import { Bars3Icon } from "@heroicons/react/24/solid"
import { Fragment } from "react"

const links = [
  { href: "/sign", label: "navigation 1" },
  { href: "/", label: "navigation 2" },
  { href: "/", label: "navigation 3" },
]

const Sidebar = () => {
  return (
    <Menu as="div" className="relative inline-block">
      {({ open }) => (
        <>
          <Menu.Button className="flex hover:bg-amber-600">
            <Bars3Icon className="ml-2 h-10 w-10 sm:hidden" />
          </Menu.Button>

          <Menu.Items
            className="bg-gradient-primary absolute mt-4 h-screen w-56 origin-top-left rounded-r-lg opacity-90 shadow-md shadow-black"
            unmount
          >
            <Transition.Root
              show={open}
              appear
              enter="ease-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Transition.Child as={Fragment}>
                <div className="flex flex-col gap-y-2 px-10 py-5">
                  {links.map(({ href, label }, i) => (
                    <Menu.Item key={i}>
                      <Link href={href}>{label}</Link>
                    </Menu.Item>
                  ))}
                </div>
              </Transition.Child>
            </Transition.Root>
          </Menu.Items>
        </>
      )}
    </Menu>
  )
}
export default Sidebar
