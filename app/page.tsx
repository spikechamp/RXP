import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Products from "./components/Products"
import ExtendedServices from "./components/ExtendedServices"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <ExtendedServices />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

