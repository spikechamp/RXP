import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Compliance Professional Partner</h1>
        <p className="text-xl mb-8">
          Compliance solutions that protect consumers, promote sustainable practices and drive industry excellence
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Consultant Regulatory Affairs</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Expertise in diverse regulatory landscapes</li>
            <li>Commitment to precision and compliance</li>
            <li>Accelerated pathways to market solutions</li>
          </ul>
        </div>
        <Button variant="secondary" size="lg">
          Learn More
        </Button>
      </div>
    </section>
  )
}

