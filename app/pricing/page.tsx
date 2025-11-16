import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Shield, MessageCircle, Zap } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5E6C5] to-[#e8d9b5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, <span className="text-[#3F422F]">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the plan that works best for your family. No hidden fees, cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Basic</CardTitle>
                <CardDescription className="text-base">For occasional care needs</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">K49</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>Search and browse providers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>Contact up to 3 providers per month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>Read reviews and ratings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>Basic profile filtering</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>Email support</span>
                  </li>
                </ul>
                <Link href="/signup?plan=basic">
                  <Button variant="outline" className="w-full">Start Basic</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-4 border-[#D78B9A] hover:shadow-2xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#D78B9A] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </span>
              </div>
              <CardHeader className="text-center pb-8 pt-12">
                <CardTitle className="text-2xl mb-2">Premium</CardTitle>
                <CardDescription className="text-base">For regular care needs</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">K99</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-sm text-green-600 mt-2">Save K89/year with annual plan</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span className="font-medium">Everything in Basic, plus:</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>Unlimited provider contacts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>Advanced search filters</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>Priority in-app messaging</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>Save unlimited favorite providers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>Booking management dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>Priority customer support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>Access to exclusive discounts</span>
                  </li>
                </ul>
                <Link href="/signup?plan=premium">
                  <Button className="w-full">Start Premium</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Enterprise</CardTitle>
                <CardDescription className="text-base">For businesses & organizations</CardDescription>
                <div className="mt-6">
                  <span className="text-3xl font-bold text-gray-900">Custom</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span className="font-medium">Everything in Premium, plus:</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>Multiple user accounts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>Custom billing options</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>Priority provider matching</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>Volume discounts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>24/7 phone support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span>API access (coming soon)</span>
                  </li>
                </ul>
                <Link href="/contact?subject=enterprise">
                  <Button variant="outline" className="w-full">Contact Sales</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              All plans include access to verified providers and secure payment processing
            </p>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compare Plans
            </h2>
            <p className="text-lg text-gray-600">
              See what's included in each membership level
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">Basic</th>
                  <th className="text-center py-4 px-4">Premium</th>
                  <th className="text-center py-4 px-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Provider contacts per month", basic: "3", premium: "Unlimited", enterprise: "Unlimited" },
                  { feature: "Search & browse providers", basic: true, premium: true, enterprise: true },
                  { feature: "Advanced filters", basic: false, premium: true, enterprise: true },
                  { feature: "Saved favorites", basic: "5", premium: "Unlimited", enterprise: "Unlimited" },
                  { feature: "In-app messaging", basic: true, premium: true, enterprise: true },
                  { feature: "Booking dashboard", basic: false, premium: true, enterprise: true },
                  { feature: "Priority support", basic: false, premium: true, enterprise: true },
                  { feature: "Exclusive discounts", basic: false, premium: true, enterprise: true },
                  { feature: "Multiple user accounts", basic: false, premium: false, enterprise: true },
                  { feature: "Dedicated account manager", basic: false, premium: false, enterprise: true }
                ].map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-4 text-gray-900">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.basic === "boolean" ? (
                        row.basic ? <Check className="text-green-600 mx-auto" size={20} /> : <span className="text-gray-400">—</span>
                      ) : (
                        <span className="text-gray-900">{row.basic}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.premium === "boolean" ? (
                        row.premium ? <Check className="text-green-600 mx-auto" size={20} /> : <span className="text-gray-400">—</span>
                      ) : (
                        <span className="text-gray-900 font-semibold">{row.premium}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? <Check className="text-green-600 mx-auto" size={20} /> : <span className="text-gray-400">—</span>
                      ) : (
                        <span className="text-gray-900 font-semibold">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Premium */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Upgrade to Premium?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-[#F5E6C5] text-[#3F422F] w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <Zap size={32} />
                </div>
                <CardTitle>Find Care Faster</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Contact unlimited providers and use advanced filters to find the perfect match quickly
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-[#F5E6C5] text-[#D78B9A] w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <MessageCircle size={32} />
                </div>
                <CardTitle>Priority Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get priority responses from providers and faster support from our team
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-[#F5E6C5] text-[#9F886F] w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <Star size={32} />
                </div>
                <CardTitle>Better Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Access exclusive features, discounts, and tools that make finding care easier
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Can I cancel my subscription anytime?",
                a: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period."
              },
              {
                q: "Do I pay providers separately?",
                a: "Yes, membership fees cover access to the platform. You pay providers directly for their services at their posted rates."
              },
              {
                q: "Is there a free trial?",
                a: "New users can browse profiles for free. Sign up to start contacting providers with a Basic or Premium membership."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, mobile money (Digicel and bmobile), and bank transfers within PNG."
              },
              {
                q: "Can I switch plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#3F422F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of PNG families finding trusted care providers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup?plan=premium">
              <Button size="lg" className="bg-white text-[#3F422F] hover:bg-gray-100 text-lg px-8">
                Start Premium Today
              </Button>
            </Link>
            <Link href="/signup?plan=basic">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#3F422F] text-lg px-8">
                Try Basic Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
