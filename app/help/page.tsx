import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, HelpCircle, MessageCircle, Shield, DollarSign, Calendar, Users } from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <HelpCircle size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find answers to common questions and get support
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Users className="text-blue-600 mb-4" size={40} />
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>New to HausMama? Start here</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Calendar className="text-blue-600 mb-4" size={40} />
                <CardTitle>Booking & Payments</CardTitle>
                <CardDescription>Manage bookings and payments</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Shield className="text-blue-600 mb-4" size={40} />
                <CardTitle>Safety & Trust</CardTitle>
                <CardDescription>Learn about our safety measures</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I create an account?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Click "Sign up" in the navigation bar, fill in your details, and verify your email. You can start browsing providers immediately after signing up.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How are providers verified?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All providers undergo background checks, identity verification, and reference checks. Learn more on our <Link href="/safety" className="text-blue-600 hover:underline">Safety page</Link>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I book a service?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Browse providers, view their profiles, and click "Contact" or "Book Now". You can message providers directly to discuss details before confirming a booking.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What payment methods are accepted?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We accept credit/debit cards, mobile money (Digicel & bmobile), and bank transfers. Membership fees are paid through the platform; provider payments are arranged directly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I cancel or reschedule a booking?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, contact your provider directly through our messaging system to discuss changes. Cancellation policies vary by provider, so review their terms before booking.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I become a provider?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Visit our <Link href="/become-provider" className="text-blue-600 hover:underline">Become a Provider</Link> page to learn about requirements and start your application. The process includes verification and profile creation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What if I'm not satisfied with a service?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Contact us immediately at support@hausmama.com.pg or +675 123 4567. We take concerns seriously and will work with you to resolve any issues.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do reviews work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  After a service is completed, you'll receive an email invitation to leave a review. Reviews help maintain quality and assist other families in making informed decisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is my personal information safe?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we use industry-standard encryption to protect your data. Your contact information is only shared with providers you choose to connect with.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What areas in PNG do you serve?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We currently serve Lae and surrounding areas including Eriku, Butibam, Bumbu, Top Town, Kamkumung, Tent City, Taraka, and Chinatown. We're expanding to new regions regularly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle size={48} className="mx-auto mb-4 text-blue-600" />
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our support team is here to assist you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Contact Support</Button>
            </Link>
            <Button size="lg" variant="outline">
              Live Chat
            </Button>
          </div>
          <div className="mt-8 text-sm text-gray-600">
            <p>Email: support@hausmama.com.pg</p>
            <p>Phone: +675 123 4567 (Mon-Fri, 8AM-6PM)</p>
          </div>
        </div>
      </section>
    </div>
  )
}
