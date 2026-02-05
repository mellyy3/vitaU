import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall, Mail, Clock, Heart, Shield, Users, Award, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Compassionate Care in the Comfort of Your Home
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                VITAHOME CARE provides personalized domiciliary care services across England and Wales, helping you
                maintain independence and dignity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Request Care Assessment
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-primary/90">
                  <PhoneCall className="mr-2 h-4 w-4" /> 0800 123 4567
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Caregiver with elderly person"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        ></div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-white py-4 shadow-md relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <PhoneCall className="h-5 w-5 text-primary" />
              <span className="font-medium">
                Call us:{" "}
                <a href="tel:08001234567" className="hover:text-primary">
                  0800 123 4567
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span className="font-medium">
                Email:{" "}
                <a href="mailto:info@vitahome-care.com" className="hover:text-primary">
                  info@vitahome-care.com
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-medium">Available 24/7, 365 days a year</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Care Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide a wide range of personalized care services tailored to meet your individual needs and
              preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <Heart className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Personal Care</h3>
                <p className="text-gray-600 mb-4">
                  Assistance with daily activities including bathing, dressing, medication management, and mobility
                  support.
                </p>
                <Link
                  href="/services/personal-care"
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <Users className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Companionship</h3>
                <p className="text-gray-600 mb-4">
                  Friendly companionship, conversation, and social engagement to prevent loneliness and improve
                  wellbeing.
                </p>
                <Link
                  href="/services/companionship"
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <Shield className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Specialist Care</h3>
                <p className="text-gray-600 mb-4">
                  Specialized care for conditions like dementia, Parkinson's, stroke recovery, and palliative care
                  needs.
                </p>
                <Link
                  href="/services/specialist-care"
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-secondary hover:bg-secondary/90 text-white">View All Services</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white" id="why-choose-us">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose VITAHOME CARE?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">CQC Registered</h3>
                    <p className="text-gray-600">
                      We're fully registered with the Care Quality Commission, ensuring we meet the highest standards of
                      care.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Experienced Carers</h3>
                    <p className="text-gray-600">
                      Our care team consists of highly trained, DBS-checked professionals with extensive experience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Person-Centered Approach</h3>
                    <p className="text-gray-600">
                      We develop personalized care plans that respect individual preferences, needs, and dignity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Caregiver helping elderly person"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-lg font-medium italic">
                  "The care and support provided by VITAHOME CARE has been exceptional. They've helped my mother
                  maintain her independence."
                </p>
                <p className="mt-4 font-semibold">- Sarah T., Client's Daughter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Care Needs?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free, no-obligation care assessment. Our friendly team is here to help you find the
            right care solution.
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
