import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, MessageCircle, Calendar, Shield, Star, Users, DollarSign, Clock } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How HausMama Works
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Connecting PNG families with trusted service providers in three simple steps
            </p>
          </div>
        </div>
      </section>

      {/* Main Steps */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                1
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <Search size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">Search & Browse</h3>
                <p className="text-gray-600 text-center mb-4">
                  Browse service categories or use our search to find exactly what you need
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Filter by location and price
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    View verified providers
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Read genuine reviews
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                2
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <MessageCircle size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">Compare & Connect</h3>
                <p className="text-gray-600 text-center mb-4">
                  Review detailed profiles and reach out to your top choices
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Check availability schedules
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Message providers directly
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Compare rates and experience
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                3
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <Calendar size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">Book & Enjoy</h3>
                <p className="text-gray-600 text-center mb-4">
                  Schedule your service and enjoy peace of mind
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Secure booking system
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Flexible scheduling options
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Leave reviews after service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose HausMama?
            </h2>
            <p className="text-xl text-gray-600">
              Built for Papua New Guinea families and service providers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2">
              <CardHeader>
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} />
                </div>
                <CardTitle className="text-center">Verified Providers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm">
                  All service providers are background checked and verified for your safety
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={32} />
                </div>
                <CardTitle className="text-center">Trusted Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm">
                  Read honest reviews from other PNG families to make informed decisions
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} />
                </div>
                <CardTitle className="text-center">Local Experts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm">
                  Connect with experienced professionals in your community
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} />
                </div>
                <CardTitle className="text-center">Flexible Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm">
                  Book services when you need them, on your schedule
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Providers */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              For Service Providers
            </h2>
            <p className="text-xl text-gray-600">
              Turn your skills into income
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 text-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Set Your Own Rates</h3>
              <p className="text-gray-600">
                You control your pricing and earn money doing what you love
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-50 text-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">
                Work when you want, as much or as little as you&apos;d like
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-50 text-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Build Your Business</h3>
              <p className="text-gray-600">
                Grow your client base and build your reputation
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/become-provider">
              <Button size="lg" className="text-lg px-8">
                Become a Provider
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of PNG families finding trusted service providers through HausMama
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                Sign Up Now
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 text-lg px-8">
                Browse Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
