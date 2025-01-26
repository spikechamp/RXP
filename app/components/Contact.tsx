import { Button } from "@/components/ui/button"
import { Phone, Mail, Globe } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Contact Information</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex items-center">
            <Phone className="h-6 w-6 text-primary mr-2" />
            <span>+91 9923105003</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-6 w-6 text-primary mr-2" />
            <span>+91 7778066573</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-6 w-6 text-primary mr-2" />
            <a href="mailto:support@rxpcompliance.com" className="hover:underline">
              support@rxpcompliance.com
            </a>
          </div>
          <div className="flex items-center">
            <Globe className="h-6 w-6 text-primary mr-2" />
            <a
              href="https://www.rxpcompliance.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              www.rxpcompliance.com
            </a>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="mr-4">
            <a href="https://www.linkedin.com/company/rxpcompliance" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg">
            <a href="https://www.facebook.com/rxpcompliance" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

