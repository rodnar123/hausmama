"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100">
              Have questions? We're here to help. Reach out to our team anytime.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+675 XXXX XXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-2 border rounded-md"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="provider">Become a Provider</option>
                        <option value="billing">Billing & Payments</option>
                        <option value="safety">Safety Concern</option>
                        <option value="feedback">Feedback</option>
                        <option value="enterprise">Enterprise/Business</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Main Office</p>
                    <p className="text-sm text-gray-600">
                      2nd Floor, Lae Central<br />
                      Butibam Road, Lae<br />
                      Morobe Province, Papua New Guinea
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-gray-600">+675 123 4567</p>
                    <p className="text-sm text-gray-600">+675 987 6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-gray-600">support@hausmama.com.pg</p>
                    <p className="text-sm text-gray-600">info@hausmama.com.pg</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-sm text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="/help" className="block text-blue-600 hover:underline text-sm">
                  Help Center & FAQs
                </a>
                <a href="/safety" className="block text-blue-600 hover:underline text-sm">
                  Safety Information
                </a>
                <a href="/pricing" className="block text-blue-600 hover:underline text-sm">
                  Pricing & Plans
                </a>
                <a href="/become-provider" className="block text-blue-600 hover:underline text-sm">
                  Become a Provider
                </a>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <MessageCircle className="text-blue-600 mb-3" size={32} />
                <p className="font-semibold mb-2">Live Chat Available</p>
                <p className="text-sm text-gray-700 mb-4">
                  Need immediate assistance? Chat with our support team.
                </p>
                <Button size="sm" className="w-full">
                  Start Live Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Service Areas in Lae</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Central Lae</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  Top Town, Chinatown,<br />
                  Eriku, Butibam<br />
                </p>
                <p className="text-sm text-blue-600">+675 123 4567</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Bumbu Area</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  Bumbu, Kamkumung,<br />
                  Taraka<br />
                </p>
                <p className="text-sm text-blue-600">+675 123 4567</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Outer Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  Tent City, Markham,<br />
                  West Taraka<br />
                </p>
                <p className="text-sm text-blue-600">+675 123 4567</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
