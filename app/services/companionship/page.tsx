import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, PhoneCall } from "lucide-react"

export const metadata = {
  title: "Companionship Services | VITAHOME CARE",
  description:
    "VITAHOME CARE provides companionship services to reduce loneliness and isolation, offering social interaction, emotional support, and assistance with activities.",
}

export default function CompanionshipPage() {
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
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Companionship Services</h1>
              <p className="text-xl text-white/90 mb-6">
                Friendly companionship and social engagement to reduce loneliness and improve wellbeing.
              </p>
              <Button className="bg-white text-primary hover:bg-gray-100">Request Companionship</Button>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Caregiver providing companionship"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Importance of Companionship</h2>
              <div className="prose max-w-none mb-8">
                <p>
                  Loneliness and social isolation can have significant negative effects on both mental and physical
                  health, particularly for older adults. Our companionship services are designed to provide meaningful
                  social interaction, emotional support, and assistance with activities to help combat loneliness and
                  improve overall wellbeing.
                </p>
                <p>
                  Our compassionate companions do more than just provide a presence; they engage in conversation,
                  participate in hobbies and interests, accompany clients to social events or appointments, and provide
                  emotional support. The relationships formed between our companions and clients are built on trust,
                  respect, and genuine care.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Social engagement"
                      width={400}
                      height={200}
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-3">Social Engagement</h3>
                    <p className="text-gray-600">
                      Meaningful conversation, shared activities, and genuine connection to combat loneliness and
                      provide emotional support.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Outings and activities"
                      width={400}
                      height={200}
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-3">Outings & Activities</h3>
                    <p className="text-gray-600">
                      Accompaniment to social events, appointments, or community activities, as well as support with
                      hobbies and interests at home.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Our Companionship Services Include:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Friendly conversation and social interaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Accompaniment to social events and appointments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Support with hobbies and interests</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Assistance with correspondence and communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Light meal preparation and shared mealtimes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Reminiscence activities and memory support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Assistance with technology and digital communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Emotional support and reassurance</span>
                </li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Client Story: Rediscovering Joy</h3>
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
                      "Since my wife passed away, I was feeling very isolated and lonely. My companion from VITAHOME
                      CARE has made such a difference to my life. We go for walks, play chess, and have wonderful
                      conversations. She's helped me reconnect with old friends and even start a new hobby. I look
                      forward to her visits and feel much more positive about life."
                    </p>
                    <p className="font-semibold">— Robert, 82, Manchester</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Benefits of Companionship</h3>
              <div className="prose max-w-none mb-8">
                <p>
                  Research has shown that regular social interaction and companionship can have numerous benefits for
                  physical and mental health, including:
                </p>
                <ul>
                  <li>Reduced feelings of loneliness and isolation</li>
                  <li>Improved mood and reduced risk of depression</li>
                  <li>Enhanced cognitive function and mental stimulation</li>
                  <li>Increased motivation to engage in activities and self-care</li>
                  <li>Improved nutrition through shared mealtimes</li>
                  <li>Greater sense of purpose and meaning</li>
                  <li>Reduced stress and anxiety</li>
                </ul>
                <p>
                  Our companionship services can be provided on a flexible basis, from a few hours a week to more
                  regular visits, depending on your needs and preferences. We carefully match companions based on shared
                  interests, personality, and preferences to ensure meaningful connections are formed.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
                <h3 className="text-xl font-semibold mb-4">Request Companionship</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today to discuss how our companionship services can support you or your loved one.
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
                      <Link href="/services/specialist-care" className="text-primary hover:underline">
                        Specialist Care Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/respite-care" className="text-primary hover:underline">
                        Respite Care Services
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Did you know?</h4>
                  <p className="text-sm text-gray-600">
                    Companionship services can often be combined with other care services to create a comprehensive
                    support package. Our team can help you design a care plan that meets all your needs.
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
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Companionship Needs?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free, no-obligation care assessment. Our friendly team is here to help you find the
            right companionship solution.
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
