import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, PhoneCall } from "lucide-react"

export const metadata = {
  title: "Specialist Care Services | VITAHOME CARE",
  description:
    "VITAHOME CARE provides specialist care services for complex health conditions including dementia, Parkinson's, stroke recovery, and more.",
}

export default function SpecialistCarePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <Link
                href="/services"
                className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Specialist Care Services</h1>
              <p className="text-xl text-white/90 mb-6">
                Expert care for complex health conditions, delivered with compassion and expertise.
              </p>
              <Button className="bg-white text-primary hover:bg-gray-100">Request Specialist Care</Button>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Specialist care being provided"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Specialized Support for Complex Needs</h2>
              <div className="prose max-w-none mb-8">
                <p>
                  Our specialist care services provide tailored support for individuals with complex health conditions,
                  ensuring they receive the appropriate care while maintaining their independence at home. Our team of
                  specially trained carers has the expertise and experience to provide high-quality care for a range of
                  conditions.
                </p>
                <p>
                  We understand that each condition requires a specific approach to care, which is why we develop
                  personalized care plans that address the unique challenges and needs associated with different health
                  conditions. Our specialist carers receive ongoing training to ensure they're up-to-date with the
                  latest care techniques and best practices.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Dementia care"
                      width={400}
                      height={200}
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-3">Dementia Care</h3>
                    <p className="text-gray-600">
                      Specialized support for individuals with Alzheimer's and other forms of dementia, focusing on
                      maintaining dignity, reducing anxiety, and promoting wellbeing.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Neurological care"
                      width={400}
                      height={200}
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-3">Neurological Conditions</h3>
                    <p className="text-gray-600">
                      Expert care for conditions such as Parkinson's disease, multiple sclerosis, and motor neurone
                      disease, tailored to individual symptoms and needs.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Our Specialist Care Services Include:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Dementia and Alzheimer's care</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Parkinson's disease support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Stroke recovery assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Multiple sclerosis care</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Motor neurone disease support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Cancer care and support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Complex medication management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Palliative and end-of-life care</span>
                </li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Client Story: Living Well with Parkinson's</h3>
                <div className="flex gap-4 items-start">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Client portrait"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <p className="italic text-gray-600 mb-4">
                      "Since being diagnosed with Parkinson's, I was determined to stay in my own home. The specialist
                      care team from VITAHOME CARE has made this possible. They understand my condition and how it
                      affects me day-to-day. They've helped me adapt my home and daily routines, and they know exactly
                      how to help when my symptoms are more challenging. Their expertise has been invaluable."
                    </p>
                    <p className="font-semibold">— David, 65, Cardiff</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Our Specialist Care Approach</h3>
              <div className="prose max-w-none mb-8">
                <p>
                  Our approach to specialist care is built on a foundation of expertise, compassion, and person-centered
                  care. We ensure that:
                </p>
                <ul>
                  <li>
                    All specialist carers receive condition-specific training and ongoing professional development
                  </li>
                  <li>Care plans are developed in consultation with healthcare professionals and regularly reviewed</li>
                  <li>We work closely with multidisciplinary teams, including GPs, district nurses, and therapists</li>
                  <li>We focus on maximizing independence and quality of life, not just managing symptoms</li>
                  <li>Family members are supported and involved in care decisions as appropriate</li>
                </ul>
                <p>
                  Our specialist care services can be provided on a flexible basis, from a few hours of support each
                  week to more intensive care packages, including live-in care for those with more complex needs.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
                <h3 className="text-xl font-semibold mb-4">Request Specialist Care</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today to discuss how our specialist care services can support you or your loved one.
                </p>
                <div className="space-y-4">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                    Request Care Assessment
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <PhoneCall className="h-4 w-4" /> Call 0800 123 4567
                  </Button>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Related Services</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services/personal-care" className="text-primary hover:underline">
                        Personal Care Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/live-in-care" className="text-primary hover:underline">
                        Live-in Care Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/end-of-life" className="text-primary hover:underline">
                        End of Life Care Services
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Did you know?</h4>
                  <p className="text-sm text-gray-600">
                    Many people with complex health conditions qualify for funding support. Our team can provide
                    guidance on NHS Continuing Healthcare funding, disability benefits, and other financial assistance
                    that may be available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Specialist Care Needs?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free, no-obligation care assessment. Our friendly team is here to help you find the
            right specialist care solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Request Care Assessment
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-primary/90">
              <PhoneCall className="mr-2 h-4 w-4" /> Call 0800 123 4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
