export default function Products() {
  const products = [
    "Pharmaceutical Formulations",
    "APIs",
    "Dietary Supplement",
    "Nutraceuticals",
    "Medical Devices",
    "Cosmetics",
    "Food Products",
    "Fertilizers",
  ]

  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Array of Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded shadow text-center">
              {product}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

