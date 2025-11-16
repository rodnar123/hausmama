"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Users, Calendar, Shield, Clock, Star } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: DollarSign,
    title: "Earn Extra Income",
    description: "Set your own rates and earn money doing what you love"
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "Work when you want, as much or as little as you'd like"
  },
  {
    icon: Users,
    title: "Growing Community",
    description: "Join thousands of service providers across PNG"
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Safe and reliable payment processing and verification"
  },
  {
    icon: Clock,
    title: "Easy Booking",
    description: "Simple booking system that manages your schedule"
  },
  {
    icon: Star,
    title: "Build Your Reputation",
    description: "Earn reviews and grow your client base"
  }
]

const steps = [
  {
    number: 1,
    title: "Sign Up",
    description: "Create your provider account in minutes"
  },
  {
    number: 2,
    title: "Complete Profile",
    description: "Add your experience, skills, and availability"
  },
  {
    number: 3,
    title: "Get Verified",
    description: "Complete background check for trust badge"
  },
  {
    number: 4,
    title: "Start Earning",
    description: "Accept bookings and get paid for your services"
  }
]

export default function BecomeProviderPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5E6C5] to-[#e8d9b5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Become a <span className="text-[#3F422F]">Service Provider</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Turn your skills into income. Join HausMama and connect with families across Papua New Guinea who need your services.
            </p>
            <Link href="/signup">
              <Button size="lg" className="bg-[#D78B9A] hover:bg-[#c77686] text-white">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join HausMama?
            </h2>
            <p className="text-lg text-gray-600">
              Benefits of being a HausMama service provider
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="bg-[#F5E6C5] text-[#3F422F] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon size={32} />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Get started in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="bg-gradient-to-br from-[#D78B9A] to-[#c77686] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/signup">
              <Button size="lg">Start Your Application</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services You Can Offer
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Child Care",
              "Senior Care",
              "Housekeeping",
              "Gardening",
              "Pet Care",
              "Tutoring",
              "Cooking",
              "Laundry"
            ].map((service) => (
              <div
                key={service}
                className="bg-[#F5E6C5] text-[#3F422F] py-4 px-6 rounded-lg text-center font-medium"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3F422F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join HausMama today and start building your service business in Papua New Guinea
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-[#D78B9A] hover:bg-[#c77686] text-white">
              Create Provider Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
