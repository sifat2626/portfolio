import Link from "next/link"
import Nav from "./Nav"
import { Button } from "./ui/button"
import MobileNav from "./MobileNav"

function Header() {
  return (
    <header className="py-8 xl-py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={""}>
          <h1 className="text-4xl font-semibold">
            Sifat <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}></Link>
          <Button>
            <Link href={"https://www.linkedin.com/in/md-ashraful-alam-sifat/"}>
              Hire me
            </Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
