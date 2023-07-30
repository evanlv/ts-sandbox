import Link from "@/web/components/Link"

export type Item = {
  href: string
  name?: string
}

const navigationItems: Item[] = [
  { href: "/", name: "navigation 1" },
  { href: "/", name: "navigation 2" },
  { href: "/test", name: "navigation 3" },
]

const Navbar = () => {
  return (
    <>
      <div className="hidden sm:flex sm:grow">
        {navigationItems.map(({ href, name }, index) => (
          <Link key={index} href={href}>
            <span className="mx-3">{name}</span>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Navbar
