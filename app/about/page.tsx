import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Heart, Award, MapPin, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About HausMama
            </h1>
            <p className="text-xl text-blue-100">
              Connecting Papua New Guinea families with trusted service providers since 2023
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                HausMama was founded with a simple yet powerful mission: to make it easier for Papua New Guinea families to find trustworthy, qualified service providers for their homes and loved ones.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We understand the challenges Lae families face in finding reliable childcare, housekeeping, and other essential services. Our platform brings together vetted professionals and families who need them, creating a safer, more connected community.
              </p>
              <p className="text-lg text-gray-600">
                We're not just a marketplace—we're building trust, creating opportunities, and strengthening communities across Papua New Guinea.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
                    <p className="text-gray-600">
                      To be PNG's most trusted platform for family and home services
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Values</h3>
                    <p className="text-gray-600">
                      Trust, safety, community, and empowerment for all
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Commitment</h3>
                    <p className="text-gray-600">
                      Thorough verification and ongoing support for quality service
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Lae
            </h2>
            <p className="text-lg text-gray-600">
              Making a difference across Lae and Morobe Province
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <p className="text-4xl font-bold text-blue-600 mb-2">150+</p>
                <p className="text-gray-600">Verified Providers</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
                <p className="text-gray-600">Lae Families Served</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <p className="text-4xl font-bold text-blue-600 mb-2">3,000+</p>
                <p className="text-gray-600">Services Completed</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <p className="text-4xl font-bold text-blue-600 mb-2">4.8/5</p>
                <p className="text-gray-600">Average Rating</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why PNG */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Papua New Guinea
            </h2>
            <p className="text-lg text-gray-600">
              We understand the unique needs of PNG families and communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <MapPin className="text-blue-600 mb-4" size={40} />
                <CardTitle>Local Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're based in Lae and serve communities across the city and surrounding areas. We understand local needs and cultural contexts specific to Morobe Province.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="text-blue-600 mb-4" size={40} />
                <CardTitle>Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're committed to empowering PNG service providers and supporting local employment. When you use HausMama, you're supporting your community.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="text-blue-600 mb-4" size={40} />
                <CardTitle>Growing Together</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're continuously expanding our services and reach across PNG, creating more opportunities for families and providers alike.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Dedicated professionals working to serve PNG families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Michael Tau", role: "Founder & CEO", location: "Lae" },
              { name: "Sarah Kila", role: "Head of Operations", location: "Lae" },
              { name: "David Wong", role: "Head of Provider Success", location: "Lae" }
            ].map((member) => (
              <Card key={member.name}>
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-500 text-xs">{member.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join the HausMama Community
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Whether you need services or want to provide them, we're here for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                Get Started
              </Button>
            </Link>
            <Link href="/become-provider">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 text-lg px-8">
                Become a Provider
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
