import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="RXP Compliance Logo" width={50} height={50} />
          <span className="ml-2 text-2xl font-bold text-primary">RXP COMPLIANCE</span>
        </Link>
        <div className="space-x-4">
          <Link href="#services" className="text-gray-600 hover:text-primary">
            Services
          </Link>
          <Link href="#products" className="text-gray-600 hover:text-primary">
            Products
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-primary">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

