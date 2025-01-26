import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { FileText, Zap, FileSearch, MessageCircle, Shield } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Dossier Compilation",
      description:
        "Precision-driven compilation of regulatory dossiers tailored to the unique specifications of various global markets.",
      icon: <FileText className="h-8 w-8 text-primary" />,
    },
    {
      title: "Fast Track Submission",
      description:
        "Streamlined submission services to expedite the regulatory approval process, facilitating prompt market access.",
      icon: <Zap className="h-8 w-8 text-primary" />,
    },
    {
      title: "Customized Dossier Formats",
      description:
        "Tailor-made dossier formats aligned with specific requirements of key regulatory jurisdictions, including CTD formats.",
      icon: <FileSearch className="h-8 w-8 text-primary" />,
    },
    {
      title: "Query Resolution",
      description:
        "Efficient and accurate handling of queries from regulatory authorities, providing timely and precise responses.",
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
    },
    {
      title: "Comprehensive Regulatory Support",
      description:
        "Assistance from document compilation to post-approval compliance for pharmaceutical, nutraceutical, and food products.",
      icon: <Shield className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {service.icon}
                  <span className="ml-2">{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

