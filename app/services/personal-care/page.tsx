import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, PhoneCall } from "lucide-react"

export const metadata = {
  title: "Personal Care Services | VITAHOME CARE",
  description:
    "VITAHOME CARE provides personalized personal care services including assistance with daily activities, medication management, and mobility support.",
}

export default function PersonalCarePage() {
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
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Personal Care Services</h1>
              <p className="text-xl text-white/90 mb-6">
                Compassionate support with daily living activities to help maintain independence and dignity.
              </p>
              <Button className="bg-white text-primary hover:bg-gray-100">Request Personal Care</Button>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Caregiver helping with personal care"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How Our Personal Care Services Help</h2>
              <div className="prose max-w-none mb-8">
                <p>
                  Our personal care services are designed to support individuals who need assistance with daily living
                  activities. We understand that maintaining personal hygiene and independence is important for dignity
                  and wellbeing, which is why our trained carers provide compassionate, respectful support.
                </p>
                <p>
                  Whether you need assistance with bathing, dressing, or medication management, our personal care
                  services are tailored to your specific needs and preferences. We work closely with you to develop a
                  personalized care plan that respects your dignity and promotes your independence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Morning routine assistance"
                      width={400}
                      height={200}
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-3">Morning & Evening Routines</h3>
                    <p className="text-gray-600">
                      Assistance with getting up, washing, dressing, and preparing for the day, as well as support with
                      evening routines and preparing for bed.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Medication management"
                      width={400}
                      height={200}
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-3">Medication Management</h3>
                    <p className="text-gray-600">
                      Reminders to take medication at the right time, assistance with organizing medication, and
                      monitoring for side effects or changes in condition.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Our Personal Care Services Include:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Bathing and showering assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Dressing and grooming support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Toileting and continence care</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Medication management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Mobility assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Meal preparation and feeding assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Skin care and pressure sore prevention</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Assistance with prosthetics or medical equipment</span>
                </li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Client Story: Regaining Independence</h3>
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
                      "After my hip replacement, I was struggling with daily activities. The personal care team at
                      VITAHOME CARE has been wonderful. They've helped me with bathing and dressing while I recover, and
                      they've been so respectful of my dignity. I'm now much more mobile and regaining my independence."
                    </p>
                    <p className="font-semibold">— Margaret, 78, London</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Our Approach to Personal Care</h3>
              <div className="prose max-w-none mb-8">
                <p>
                  At VITAHOME CARE, we understand that receiving personal care can be a sensitive matter. Our approach
                  is built on respect, dignity, and compassion. We ensure that:
                </p>
                <ul>
                  <li>You're matched with carers who are compatible with your needs and preferences</li>
                  <li>Care is delivered at a pace that suits you, with no rushing</li>
                  <li>Your privacy and dignity are maintained at all times</li>
                  <li>We listen to your preferences and adapt our care accordingly</li>
                  <li>We promote independence by encouraging you to do what you can for yourself</li>
                </ul>
                <p>
                  Our personal care services can be provided as part of a regular care package or as a standalone
                  service. We offer flexible scheduling, from short visits to help with specific tasks to more
                  comprehensive support throughout the day.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
                <h3 className="text-xl font-semibold mb-4">Request Personal Care</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today to discuss how our personal care services can support you or your loved one.
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
                      <Link href="/services/companionship" className="text-primary hover:underline">
                        Companionship Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/specialist-care" className="text-primary hover:underline">
                        Specialist Care Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/live-in-care" className="text-primary hover:underline">
                        Live-in Care Services
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Did you know?</h4>
                  <p className="text-sm text-gray-600">
                    Personal care services can be funded through various means, including local authority funding,
                    personal budgets, and direct payments. Our team can provide guidance on funding options available to
                    you.
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
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Personal Care Needs?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free, no-obligation care assessment. Our friendly team is here to help you find the
            right personal care solution.
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
