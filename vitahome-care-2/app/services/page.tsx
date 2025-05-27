import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Shield, Home, Clock, Activity, ArrowRight, PhoneCall } from "lucide-react"

export const metadata = {
  title: "Our Services | VITAHOME CARE",
  description:
    "Explore VITAHOME CARE's range of domiciliary care services including personal care, companionship, specialist care, and more across England and Wales.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-teal-700 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Care Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Personalized domiciliary care services tailored to your individual needs and preferences.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Care Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At VITAHOME CARE, we offer a wide range of domiciliary care services designed to support you or your loved
              one to live independently at home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Personal Care</CardTitle>
                <CardDescription>Support with daily living activities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our personal care services include assistance with bathing, dressing, grooming, medication management,
                  mobility support, and other daily activities to help maintain independence and dignity.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Morning and evening routines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Medication reminders and administration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Continence care and support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Mobility assistance and fall prevention</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="/services/personal-care">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service Card 2 */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Companionship</CardTitle>
                <CardDescription>Reducing loneliness and isolation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our companionship services provide social interaction, emotional support, and assistance with
                  activities to help combat loneliness and improve overall wellbeing and quality of life.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Friendly conversation and social engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Accompaniment to social events and appointments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Support with hobbies and interests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Assistance with correspondence and communication</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="/services/companionship">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service Card 3 */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Specialist Care</CardTitle>
                <CardDescription>Support for complex health needs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our specialist care services provide tailored support for individuals with complex health conditions,
                  ensuring they receive the appropriate care while maintaining their independence at home.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Dementia and Alzheimer's care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Parkinson's disease support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Stroke recovery assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Multiple sclerosis and motor neurone disease care</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="/services/specialist-care">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service Card 4 */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Live-in Care</CardTitle>
                <CardDescription>24-hour support at home</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our live-in care services provide round-the-clock support from a dedicated carer who lives in your
                  home, offering peace of mind and continuous assistance with all aspects of daily living.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>24/7 personal care and support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Household management and meal preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Companionship and emotional support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Complex care management</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="/services/live-in-care">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service Card 5 */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Respite Care</CardTitle>
                <CardDescription>Short-term relief for caregivers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our respite care services provide temporary relief for family caregivers, allowing them to take a
                  break while ensuring their loved one continues to receive quality care and support.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Planned short-term care arrangements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Emergency cover when needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Continuation of existing care routines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Flexible duration from a few hours to several weeks</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="/services/respite-care">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service Card 6 */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>End of Life Care</CardTitle>
                <CardDescription>Compassionate palliative support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our end of life care services provide compassionate support for individuals in the final stages of
                  life, focusing on comfort, dignity, and quality of life while supporting both the individual and their
                  family.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Pain management and symptom control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Emotional and psychological support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Coordination with healthcare professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Support for family members</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="/services/end-of-life">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our Care Service Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We make accessing quality care simple and straightforward with our personalized approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4">Initial Assessment</h3>
                <p className="text-gray-600">
                  We begin with a free, no-obligation care assessment to understand your needs, preferences, and
                  circumstances.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4">Personalized Care Plan</h3>
                <p className="text-gray-600">
                  We develop a tailored care plan that outlines the specific services, schedule, and support that will
                  be provided.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                3
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4">Care Delivery</h3>
                <p className="text-gray-600">
                  Our professional care team delivers the agreed services, with regular reviews to ensure your needs
                  continue to be met.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-teal-600 hover:bg-teal-700">Book a Care Assessment</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from families who have experienced the difference our care services make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold">Margaret W.</p>
                  <p className="text-sm text-gray-500">Client's Daughter, Cardiff</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "The care provided to my mother has been exceptional. The carers are not just professional but genuinely
                caring and compassionate. They have become like family to us, and I have complete peace of mind knowing
                my mother is in such good hands."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold">Robert T.</p>
                  <p className="text-sm text-gray-500">Client, Manchester</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "After my stroke, I was determined to stay in my own home. VITAHOME CARE has made this possible with
                their excellent support. My carers are reliable, skilled, and always go the extra mile. They've helped
                me regain my independence and confidence."
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
              Read More Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Care Needs?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free, no-obligation care assessment. Our friendly team is here to help you find the
            right care solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100">
              Request Care Assessment
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-teal-700">
              <PhoneCall className="mr-2 h-4 w-4" /> Call 0800 123 4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
