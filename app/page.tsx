"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { 
  Baby, 
  Home, 
  Leaf, 
  BookOpen, 
  ChefHat, 
  Search,
  Star,
  Shield,
  Users,
  Clock
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const services = [
  {
    icon: Baby,
    title: "Child Care",
    description: "Nannies, babysitters, and daycare providers",
    details: "From newborns to school-age children",
    href: "/services/childcare",
    color: "text-[#D78B9A]",
    bgColor: "bg-[#F5E6C5]",
    providers: "150+"
  },
  {
    icon: Home,
    title: "Housekeeping",
    description: "Professional cleaning and home maintenance",
    details: "Daily, weekly, or one-time cleaning",
    href: "/services/housekeeping",
    color: "text-[#3F422F]",
    bgColor: "bg-[#F5E6C5]",
    providers: "200+"
  },
  {
    icon: Leaf,
    title: "Gardening",
    description: "Expert lawn care and landscaping",
    details: "Yard maintenance and garden design",
    href: "/services/gardening",
    color: "text-[#3F422F]",
    bgColor: "bg-[#F5E6C5]",
    providers: "120+"
  },
  {
    icon: BookOpen,
    title: "Tutoring",
    description: "Academic support for all subjects and grades",
    details: "Primary, secondary, and university",
    href: "/services/tutoring",
    color: "text-[#9F886F]",
    bgColor: "bg-[#F5E6C5]",
    providers: "110+"
  },
  {
    icon: ChefHat,
    title: "Cooking",
    description: "Meal preparation and catering services",
    details: "Traditional PNG and modern cuisine",
    href: "/services/cooking",
    color: "text-[#D78B9A]",
    bgColor: "bg-[#F5E6C5]",
    providers: "75+"
  }
]

const features = [
  {
    icon: Shield,
    title: "Verified Providers",
    description: "All service providers are background checked and verified"
  },
  {
    icon: Star,
    title: "Trusted Reviews",
    description: "Read honest reviews from other PNG families"
  },
  {
    icon: Users,
    title: "Local Experts",
    description: "Connect with experienced professionals in your community"
  },
  {
    icon: Clock,
    title: "Flexible Booking",
    description: "Book services when you need them, on your schedule"
  }
]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5E6C5] to-[#e8d9b5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Quality Care in <span className="text-[#3F422F]">Papua New Guinea</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with trusted local service providers for child care, senior care, housekeeping, and more. 
              Making life easier for PNG families.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="What service do you need?"
                    className="pl-10 h-14 text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button size="lg" className="h-14 px-8 text-lg">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Browse Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find trusted professionals for every household need across Papua New Guinea
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.title} href={service.href}>
                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full border-2 hover:border-blue-300">
                  <CardHeader>
                    <div className={`${service.bgColor} ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                      <service.icon size={40} strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                    <CardDescription className="text-center">
                      {service.description}
                    </CardDescription>
                    <div className="pt-3 border-t mt-4">
                      <p className="text-xs text-gray-500 text-center">{service.details}</p>
                      <p className="text-sm font-semibold text-blue-600 text-center mt-2">
                        {service.providers} providers available
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Serving all major cities in PNG</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Port Moresby", "Lae", "Madang", "Mount Hagen", "Goroka"].map((city) => (
                <span key={city} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Connect with trusted service providers in three easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#D78B9A] to-[#c77686] text-white w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                1
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-3 text-center">Search & Browse</h3>
                <p className="text-gray-600 text-center mb-4">
                  Browse service categories or use our search to find exactly what you need
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#D78B9A] rounded-full mr-2"></span>
                    Filter by location and price
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#D78B9A] rounded-full mr-2"></span>
                    View verified providers
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#D78B9A] rounded-full mr-2"></span>
                    Read genuine reviews
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#9F886F] to-[#8a7861] text-white w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                2
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-3 text-center">Compare & Connect</h3>
                <p className="text-gray-600 text-center mb-4">
                  Review detailed profiles and reach out to your top choices
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#9F886F] rounded-full mr-2"></span>
                    Check availability schedules
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#9F886F] rounded-full mr-2"></span>
                    Message providers directly
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#9F886F] rounded-full mr-2"></span>
                    Compare rates and experience
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#3F422F] to-[#2d2f21] text-white w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                3
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-3 text-center">Book & Enjoy</h3>
                <p className="text-gray-600 text-center mb-4">
                  Schedule your service and enjoy peace of mind
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#3F422F] rounded-full mr-2"></span>
                    Secure booking system
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#3F422F] rounded-full mr-2"></span>
                    Flexible scheduling options
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#3F422F] rounded-full mr-2"></span>
                    Leave reviews after service
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6 text-lg">Join over 5,000 satisfied families in PNG</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="text-lg px-8 py-6">
                  Get Started Now
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Browse All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HausMama?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="bg-[#F5E6C5] text-[#3F422F] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What PNG Families Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from families across Papua New Guinea
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-[#D78B9A] rounded-full flex items-center justify-center text-white text-xl font-bold">
                    S
                  </div>
                  <div>
                    <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                    <CardDescription>Lae • Mother of 2</CardDescription>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "Finding Mary through HausMama was the best decision for our family. She's been taking care of our children for over a year now, and we couldn't be happier. The verification process gave us confidence from day one."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-[#9F886F] rounded-full flex items-center justify-center text-white text-xl font-bold">
                    D
                  </div>
                  <div>
                    <CardTitle className="text-lg">David Tau</CardTitle>
                    <CardDescription>Lae • Working Professional</CardDescription>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "HausMama made it so easy to find reliable housekeeping services. I can focus on work knowing my home is in good hands. The ratings and reviews helped me make the right choice."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-[#3F422F] rounded-full flex items-center justify-center text-white text-xl font-bold">
                    G
                  </div>
                  <div>
                    <CardTitle className="text-lg">Grace Buka</CardTitle>
                    <CardDescription>Lae • Parent</CardDescription>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "Finding reliable childcare was always a challenge. HausMama connected us with an amazing nanny who my children love. The verification process gave us complete confidence!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-[#D78B9A] rounded-full flex items-center justify-center text-white text-xl font-bold">
                    J
                  </div>
                  <div>
                    <CardTitle className="text-lg">James Kila</CardTitle>
                    <CardDescription>Lae • Parent</CardDescription>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "As a single father, finding a tutor for my daughter was crucial. HausMama helped me find an excellent teacher who's patient and knowledgeable. Her grades have improved significantly!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-[#9F886F] rounded-full flex items-center justify-center text-white text-xl font-bold">
                    E
                  </div>
                  <div>
                    <CardTitle className="text-lg">Emma Pato</CardTitle>
                    <CardDescription>Lae • Working Mom</CardDescription>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "As a busy mom, finding a cook through HausMama was a lifesaver. My family enjoys healthy, delicious meals and I have more time with my children. Highly recommend!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-[#3F422F] rounded-full flex items-center justify-center text-white text-xl font-bold">
                    M
                  </div>
                  <div>
                    <CardTitle className="text-lg">Michael Wong</CardTitle>
                    <CardDescription>Lae • Business Owner</CardDescription>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "HausMama's platform is professional and easy to use. I found a gardener who transformed our office grounds. The booking and payment process was seamless. Great service!"
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Join over 500 satisfied Lae families</p>
            <Link href="/signup">
              <Button size="lg">Get Started Today</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3F422F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of PNG families finding trusted service providers through HausMama
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                Find Services
              </Button>
            </Link>
            <Link href="/become-provider">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#3F422F]">
                Become a Provider
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
