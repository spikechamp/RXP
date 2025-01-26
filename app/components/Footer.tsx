export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} RXP Compliance Private Limited. All rights reserved.</p>
        <p className="mt-2">Compliance Professional Partner</p>
      </div>
    </footer>
  )
}

