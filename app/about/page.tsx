import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, Heart, Shield, Users, Clock, CheckCircle } from "lucide-react"

export const metadata = {
  title: "About Us | VITAHOME CARE",
  description:
    "Learn about VITAHOME CARE's mission, values, and our dedicated team providing exceptional domiciliary care across England and Wales.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-teal-700 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">About VITAHOME CARE</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Dedicated to providing exceptional domiciliary care services with compassion, dignity, and respect.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose max-w-none">
                <p>
                  Founded in 2010, VITAHOME CARE was established with a clear mission: to provide exceptional
                  domiciliary care that enables people to live independently in their own homes with dignity and
                  respect.
                </p>
                <p>
                  Our founder, having experienced the challenges of finding quality care for a family member, recognized
                  the need for a care provider that truly puts people first. This personal experience shaped our
                  approach to care, ensuring that we always focus on the individual needs and preferences of each
                  client.
                </p>
                <p>
                  Based in Enfield, North London, we've grown to provide care across England and Wales, but our core
                  values and commitment to personalized care have remained unchanged.
                </p>
                <p>
                  Today, VITAHOME CARE is recognized as a leading provider of domiciliary care services, known for our
                  professional, compassionate approach and our dedication to helping people maintain their independence
                  at home.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="VITAHOME CARE team"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-lg font-medium">
                  "Our mission is to enhance the quality of life for those we serve."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do at VITAHOME CARE, from how we train our staff to how we deliver
              care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mb-4">
                <Heart className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compassion</h3>
              <p className="text-gray-600">
                We approach every client with genuine care, empathy, and understanding, recognizing their unique needs
                and preferences.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mb-4">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Dignity</h3>
              <p className="text-gray-600">
                We respect the dignity and independence of each individual, ensuring they have choice and control over
                their care.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mb-4">
                <Award className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from the quality of our care to our professional standards
                and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of care professionals is at the heart of everything we do at VITAHOME CARE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Care Management Team</h3>
              <p className="text-gray-600 mb-4">
                Our experienced management team oversees all aspects of our care services, ensuring high standards are
                maintained and regulatory requirements are met.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span>Registered Care Manager with extensive experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span>Dedicated Care Coordinators for each region</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span>Quality Assurance specialists</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span>Training and Development officers</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Care Staff</h3>
              <p className="text-gray-600 mb-4">
                Our care staff are the backbone of our service, delivering compassionate, person-centered care to our
                clients every day.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span>Fully trained and qualified care assistants</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span>Enhanced DBS checked for your safety</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span>Regular ongoing training and development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span>Specialist care staff for complex needs</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-teal-600 hover:bg-teal-700">Join Our Team</Button>
          </div>
        </div>
      </section>

      {/* CQC Registration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Regulated by the Care Quality Commission</h2>
              <p className="text-lg text-gray-600 mb-6">
                VITAHOME CARE is fully registered with the Care Quality Commission (CQC), the independent regulator of
                health and social care in England.
              </p>
              <p className="text-gray-600 mb-6">
                Our CQC registration demonstrates our commitment to providing safe, effective, compassionate, and
                high-quality care. We are regularly inspected to ensure we maintain these standards.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 bg-white rounded-lg shadow-md flex items-center justify-center">
                  <Image src="/placeholder.svg?height=60&width=60" alt="CQC Logo" width={60} height={60} />
                </div>
                <div>
                  <p className="font-semibold">CQC Rating: Good</p>
                  <p className="text-sm text-gray-500">Last inspection: January 2023</p>
                </div>
              </div>
              <Button variant="outline" className="gap-2">
                View Our CQC Report
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Clock className="h-10 w-10 text-teal-600 mb-4" />
                <h3 className="font-semibold mb-2">Safe</h3>
                <p className="text-sm text-gray-600">You are protected from abuse and avoidable harm.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Heart className="h-10 w-10 text-teal-600 mb-4" />
                <h3 className="font-semibold mb-2">Caring</h3>
                <p className="text-sm text-gray-600">
                  Staff involve and treat you with compassion, kindness, dignity and respect.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Shield className="h-10 w-10 text-teal-600 mb-4" />
                <h3 className="font-semibold mb-2">Effective</h3>
                <p className="text-sm text-gray-600">Your care, treatment and support achieves good outcomes.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Users className="h-10 w-10 text-teal-600 mb-4" />
                <h3 className="font-semibold mb-2">Responsive</h3>
                <p className="text-sm text-gray-600">Services are organized to meet your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Learn More About Our Care Services?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how VITAHOME CARE can support you or your loved one with personalized
            domiciliary care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-teal-700">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
