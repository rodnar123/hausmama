"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, MapPin, Clock, DollarSign, Shield, Calendar, MessageCircle, CheckCircle, Heart, Award, FileCheck, BadgeCheck } from "lucide-react"
import Link from "next/link"
import { use, useState } from "react"

// Mock data - replace with actual API call
const mockProvider = {
  id: "1",
  name: "Mary Kila",
  image: null,
  rating: 4.9,
  reviewCount: 47,
  experience: 8,
  hourlyRate: 25,
  location: "Port Moresby, NCD",
  bio: "Experienced childcare provider with 8 years of experience working with families in Port Moresby. I am passionate about providing quality care for children and have worked with families from diverse backgrounds. I am CPR certified and have a background in early childhood education.",
  verified: true,
  verifications: {
    backgroundCheck: true,
    identityVerified: true,
    referencesChecked: true,
    cprCertified: true
  },
  skills: ["Newborn care", "Meal preparation", "Light housekeeping", "CPR Certified", "First Aid", "Early childhood education"],
  services: ["Child Care", "Babysitting", "Meal Prep"],
  languages: ["English", "Tok Pisin"],
  availability: {
    monday: "9:00 AM - 5:00 PM",
    tuesday: "9:00 AM - 5:00 PM",
    wednesday: "9:00 AM - 5:00 PM",
    thursday: "9:00 AM - 5:00 PM",
    friday: "9:00 AM - 5:00 PM",
    saturday: "10:00 AM - 2:00 PM",
    sunday: "Not available"
  }
}

const mockReviews = [
  {
    id: "1",
    userName: "Sarah Johnson",
    rating: 5,
    comment: "Mary is amazing! She took care of our two children for over a year. Very reliable, professional, and the kids absolutely loved her. Highly recommend!",
    date: new Date("2024-10-15")
  },
  {
    id: "2",
    userName: "David Tau",
    rating: 5,
    comment: "Excellent caregiver. Very punctual and caring. Our daughter always looked forward to spending time with Mary.",
    date: new Date("2024-09-22")
  },
  {
    id: "3",
    userName: "Grace Buka",
    rating: 4,
    comment: "Great experience overall. Mary is professional and good with children. Would hire again.",
    date: new Date("2024-08-10")
  }
]

export default function ProviderProfilePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const [selectedService, setSelectedService] = useState("")
  const [isFavorite, setIsFavorite] = useState(false)
  
  // In production, fetch provider data based on id
  const provider = mockProvider

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card className="relative">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-6 right-6 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Heart 
                  size={24} 
                  className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"}
                />
              </button>
              
              <CardHeader>
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white text-5xl font-bold flex-shrink-0">
                    {provider.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <CardTitle className="text-3xl">{provider.name}</CardTitle>
                      {provider.verified && (
                        <div className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                          <Shield size={16} />
                          <span className="text-sm font-medium">Verified</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="text-yellow-400 fill-current" size={20} />
                        <span className="font-bold text-lg">{provider.rating}</span>
                      </div>
                      <span className="text-gray-500">({provider.reviewCount} reviews)</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin size={18} />
                        <span>{provider.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock size={18} />
                        <span>{provider.experience} years experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Verification Badges */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield size={20} className="mr-2 text-blue-600" />
                  Verification & Trust
                </CardTitle>
                <CardDescription>This provider has completed the following verifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {provider.verifications.backgroundCheck && (
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                      <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                      <div>
                        <p className="font-semibold text-green-900">Background Check</p>
                        <p className="text-xs text-green-700">Verified by HausMama</p>
                      </div>
                    </div>
                  )}
                  {provider.verifications.identityVerified && (
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <BadgeCheck className="text-blue-600 flex-shrink-0" size={24} />
                      <div>
                        <p className="font-semibold text-blue-900">ID Verified</p>
                        <p className="text-xs text-blue-700">Government ID confirmed</p>
                      </div>
                    </div>
                  )}
                  {provider.verifications.referencesChecked && (
                    <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <FileCheck className="text-purple-600 flex-shrink-0" size={24} />
                      <div>
                        <p className="font-semibold text-purple-900">References Checked</p>
                        <p className="text-xs text-purple-700">3 references verified</p>
                      </div>
                    </div>
                  )}
                  {provider.verifications.cprCertified && (
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <Award className="text-orange-600 flex-shrink-0" size={24} />
                      <div>
                        <p className="font-semibold text-orange-900">CPR Certified</p>
                        <p className="text-xs text-orange-700">Valid until 2025</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <Shield size={16} className="inline mr-1" />
                    All providers on HausMama undergo thorough verification to ensure your safety and peace of mind.
                    <Link href="/safety" className="text-blue-600 hover:underline ml-1">Learn more about our safety process</Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">{provider.bio}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <strong>Languages:</strong>
                  <span>{provider.languages.join(", ")}</span>
                </div>
              </CardContent>
            </Card>

            {/* Services Offered */}
            <Card>
              <CardHeader>
                <CardTitle>Services Offered</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {provider.services.map((service) => (
                    <span
                      key={service}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Skills & Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {provider.skills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <CheckCircle className="text-green-600" size={18} />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(provider.availability).map(([day, hours]) => (
                    <div key={day} className="flex justify-between items-center py-2 border-b last:border-0">
                      <span className="font-medium capitalize">{day}</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews ({mockReviews.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockReviews.map((review) => (
                    <div key={review.id} className="border-b last:border-0 pb-6 last:pb-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold">{review.userName}</p>
                          <div className="flex items-center space-x-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">
                          {review.date.toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="sticky top-20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Book Service</CardTitle>
                  <div className="flex items-center space-x-1 text-2xl font-bold text-blue-600">
                    <DollarSign size={24} />
                    <span>K{provider.hourlyRate}</span>
                    <span className="text-sm text-gray-500 font-normal">/hour</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Service
                    </label>
                    <select 
                      className="w-full border rounded-md px-3 py-2"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                    >
                      <option value="">Choose a service...</option>
                      {provider.services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <Link href={`/booking?provider=${provider.id}&service=${selectedService}`}>
                    <Button className="w-full" size="lg">
                      <Calendar className="mr-2" size={18} />
                      Book Now
                    </Button>
                  </Link>

                  <Link href={`/messages?provider=${provider.id}`}>
                    <Button variant="outline" className="w-full" size="lg">
                      <MessageCircle className="mr-2" size={18} />
                      Send Message
                    </Button>
                  </Link>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 text-center">
                      Response time: Usually within 2 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Safety Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="text-blue-600" />
                  <span>Safety Tips</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Always meet in a public place first</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Check references and reviews</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Verify certifications and licenses</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Trust your instincts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
