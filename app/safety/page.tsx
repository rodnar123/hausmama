import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CheckCircle, FileCheck, BadgeCheck, Award, Lock, Eye, Users, Phone } from "lucide-react"
import Link from "next/link"

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Shield size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Safety is Our Priority
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We take comprehensive measures to ensure every provider on HausMama is thoroughly vetted and verified
            </p>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Verification Process
            </h2>
            <p className="text-xl text-gray-600">
              Every provider undergoes rigorous screening before joining HausMama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={40} />
                </div>
                <CardTitle>Background Check</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Comprehensive criminal background checks conducted by PNG authorities to ensure provider safety records
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-blue-100 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BadgeCheck size={40} />
                </div>
                <CardTitle>Identity Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Government-issued ID verification to confirm provider identity and legal eligibility to work
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-purple-100 text-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck size={40} />
                </div>
                <CardTitle>Reference Checks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Multiple professional references contacted and verified to confirm work history and reliability
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-orange-100 text-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={40} />
                </div>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Verification of relevant certifications like CPR, First Aid, and professional training credentials
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Safety Features
            </h2>
            <p className="text-xl text-gray-600">
              Built-in protections for your peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Lock className="text-blue-600" size={32} />
                  <CardTitle>Secure Payments</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All payments are processed through secure, encrypted channels. Your financial information is never shared with providers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Eye className="text-blue-600" size={32} />
                  <CardTitle>Review System</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Honest reviews from real PNG families help maintain quality. All reviews are verified to prevent fake ratings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="text-blue-600" size={32} />
                  <CardTitle>In-App Messaging</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Communicate safely through our platform. Your personal contact information stays private until you're ready to share.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-600" size={32} />
                  <CardTitle>24/7 Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our support team is available around the clock to address any concerns or safety issues that may arise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Safety Tips for Families
            </h2>
            <p className="text-xl text-gray-600">
              Best practices to ensure a safe experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Meet & Greet First",
                description: "Always conduct an in-person meeting before hiring. This helps you assess compatibility and ask important questions."
              },
              {
                title: "Check Reviews & References",
                description: "Read through provider reviews and ask for additional references if needed. Contact previous employers."
              },
              {
                title: "Start with Short Bookings",
                description: "Begin with shorter sessions to build trust and ensure the provider is the right fit before committing long-term."
              },
              {
                title: "Trust Your Instincts",
                description: "If something feels off, it probably is. Don't hesitate to end an arrangement that doesn't feel right."
              },
              {
                title: "Keep Communication On-Platform",
                description: "Use HausMama's messaging system initially to maintain a record of all communications."
              },
              {
                title: "Verify Certifications",
                description: "Ask to see original copies of certifications, licenses, and training documents before hiring."
              },
              {
                title: "Set Clear Expectations",
                description: "Clearly communicate your needs, house rules, and expectations in writing before service begins."
              },
              {
                title: "Leave Honest Reviews",
                description: "Help other families by leaving detailed, honest reviews about your experience with providers."
              }
            ].map((tip, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                      {index + 1}
                    </span>
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Liability */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Insurance & Liability
            </h2>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Background Check Limitations</h3>
                  <p className="text-gray-600 text-sm">
                    While we conduct thorough background checks, they may not capture an individual's entire history and cannot guarantee safety. Background checks are sourced from Papua New Guinea government databases and are current as of the verification date.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">User Responsibility</h3>
                  <p className="text-gray-600 text-sm">
                    HausMama is a platform connecting families with independent service providers. We facilitate connections but providers are independent contractors, not employees. Users are responsible for conducting their own due diligence and making informed hiring decisions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Report Safety Concerns</h3>
                  <p className="text-gray-600 text-sm">
                    If you encounter any safety concerns or suspicious activity, please report it immediately to our safety team at safety@hausmama.com.pg or call +675 123 4567. We take all reports seriously and investigate promptly.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Find Trusted Care?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join HausMama and connect with verified service providers in PNG
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                Get Started
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 text-lg px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
