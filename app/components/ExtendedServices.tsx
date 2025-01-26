export default function ExtendedServices() {
  const services = ["Regulatory Affairs", "Medical coding", "Pharmacovigilance"]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Extended Services</h2>
        <div className="flex justify-center space-x-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-4xl font-bold">{index + 1}</span>
              </div>
              <p className="font-semibold">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

