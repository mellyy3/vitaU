"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PhoneCall, Mail, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("first-name"),
      lastName: formData.get("last-name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      enquiryType: formData.get("enquiry-type"),
      service: formData.get("service"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setFormSubmitted(true)
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      setSubmitError("Failed to send message. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're here to answer your questions and help you find the right care solution.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <PhoneCall className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Our friendly team is here to help</p>
                <a href="tel:08001234567" className="text-primary font-medium hover:underline">
                  0800 123 4567
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">We'll respond as soon as possible</p>
                <a href="mailto:info@vitahome-care.com" className="text-primary font-medium hover:underline">
                  info@vitahome-care.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">Our main office location</p>
                <address className="text-primary font-medium not-italic">
                  Vitahome Care
                  <br />
                  Enfield Enterprise Centre
                  <br />
                  Unit 54, 26-28 Queensway
                  <br />
                  Enfield, EN3 4SA
                </address>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
                <p className="text-gray-600 mb-4">When you can reach us</p>
                <div className="text-primary font-medium">
                  <p>Mon-Fri: 8am - 8pm</p>
                  <p>Sat: 9am - 5pm</p>
                  <p>Care services: 24/7</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're looking for care for yourself or a loved one, have questions about our services, or want
                to join our team, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Free Care Assessment</h3>
                    <p className="text-gray-600">Request a no-obligation assessment to discuss your care needs.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Quick Response</h3>
                    <p className="text-gray-600">We aim to respond to all enquiries within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Dedicated Support</h3>
                    <p className="text-gray-600">Our team is here to guide you through every step of the process.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>
                    Fill in the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                      <p className="text-gray-600">
                        Your message has been sent successfully. One of our team members will be in touch with you
                        shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {submitError && (
                        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                          <AlertCircle className="h-5 w-5 text-red-600" />
                          <p className="text-red-600 text-sm">{submitError}</p>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" name="first-name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" name="last-name" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" type="tel" required />
                      </div>

                      <div className="space-y-2">
                        <Label>I am enquiring about:</Label>
                        <RadioGroup name="enquiry-type" defaultValue="care-for-myself">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="care-for-myself" id="care-for-myself" />
                            <Label htmlFor="care-for-myself">Care for myself</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="care-for-loved-one" id="care-for-loved-one" />
                            <Label htmlFor="care-for-loved-one">Care for a loved one</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="career-opportunities" id="career-opportunities" />
                            <Label htmlFor="career-opportunities">Career opportunities</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other">Other</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service of Interest</Label>
                        <Select name="service">
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="personal-care">Personal Care</SelectItem>
                            <SelectItem value="companionship">Companionship</SelectItem>
                            <SelectItem value="specialist-care">Specialist Care</SelectItem>
                            <SelectItem value="live-in-care">Live-in Care</SelectItem>
                            <SelectItem value="respite-care">Respite Care</SelectItem>
                            <SelectItem value="end-of-life">End of Life Care</SelectItem>
                            <SelectItem value="not-sure">Not Sure / Need Advice</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Please provide any additional details about your enquiry"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-secondary hover:bg-secondary/90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              VITAHOME CARE provides services across England and Wales. Our main offices are located in:
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <Card className="max-w-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Head Office</h3>
                <address className="text-gray-600 not-italic mb-4">
                  Vitahome Care
                  <br />
                  Enfield Enterprise Centre
                  <br />
                  Unit 54, 26-28 Queensway
                  <br />
                  Enfield, EN3 4SA
                </address>
                <p className="text-sm text-gray-500">Serving: England and Wales</p>
              </CardContent>
            </Card>
          </div>

          <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden">
            {/* In a real implementation, you would embed a Google Map or similar here */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Urgent Care Support?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our care team is available 24/7 to respond to urgent care needs. Don't hesitate to call us.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            <PhoneCall className="mr-2 h-5 w-5" /> Call 0800 123 4567
          </Button>
        </div>
      </section>
    </div>
  )
}
