import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PhoneCall, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logo.png" alt="VITAHOME CARE Logo" width={150} height={50} className="h-12 w-auto" />
            </Link>
            <p className="text-sm">
              Providing compassionate domiciliary care services across England and Wales since 2010.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-primary" />
                <span>0800 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@vitahome-care.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Unit 54, Enfield Enterprise Centre, Enfield, EN3 4SA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/personal-care" className="text-sm hover:text-primary transition-colors">
                  Personal Care
                </Link>
              </li>
              <li>
                <Link href="/services/companionship" className="text-sm hover:text-primary transition-colors">
                  Companionship
                </Link>
              </li>
              <li>
                <Link href="/services/specialist-care" className="text-sm hover:text-primary transition-colors">
                  Specialist Care
                </Link>
              </li>
              <li>
                <Link href="/services/live-in-care" className="text-sm hover:text-primary transition-colors">
                  Live-in Care
                </Link>
              </li>
              <li>
                <Link href="/services/respite-care" className="text-sm hover:text-primary transition-colors">
                  Respite Care
                </Link>
              </li>
              <li>
                <Link href="/services/end-of-life" className="text-sm hover:text-primary transition-colors">
                  End of Life Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for care tips and company updates.</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Subscribe</Button>
            </form>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p>© {new Date().getFullYear()} VITAHOME CARE. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/sitemap" className="hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
