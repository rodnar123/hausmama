import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar, MapPin, Clock, DollarSign, MessageCircle, Star } from "lucide-react"
import Link from "next/link"

export default function BookingConfirmationPage() {
  // In production, get booking details from URL params or state
  const booking = {
    id: "BK-2024-001",
    provider: "Mary Kila",
    service: "Child Care",
    date: "November 25, 2024",
    time: "9:00 AM",
    duration: 4,
    location: "Eriku, Lae",
    price: 100,
    status: "confirmed"
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="text-green-600" size={48} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Booking Confirmed!
          </h1>
          <p className="text-lg text-gray-600">
            Your booking has been successfully confirmed. We've sent a confirmation email to your inbox.
          </p>
        </div>

        {/* Booking Details Card */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6 pb-6 border-b">
              <div>
                <p className="text-sm text-gray-600 mb-1">Booking Reference</p>
                <p className="text-2xl font-bold text-gray-900">{booking.id}</p>
              </div>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                Confirmed
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Provider</h3>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {booking.provider.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{booking.provider}</p>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span>4.9 (47 reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-2 font-medium">Service</p>
                  <p className="text-gray-900">{booking.service}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2 font-medium flex items-center">
                    <Calendar size={16} className="mr-2" />
                    Date & Time
                  </p>
                  <p className="text-gray-900">{booking.date}</p>
                  <p className="text-gray-600">{booking.time} ({booking.duration} hours)</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2 font-medium flex items-center">
                    <MapPin size={16} className="mr-2" />
                    Location
                  </p>
                  <p className="text-gray-900">{booking.location}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2 font-medium flex items-center">
                    <DollarSign size={16} className="mr-2" />
                    Total Amount
                  </p>
                  <p className="text-2xl font-bold text-blue-600">K{booking.price}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What's Next */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">What Happens Next?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <p className="font-semibold text-gray-900">HausMama Review</p>
                  <p className="text-sm text-gray-600">
                    Our team will review your request and coordinate with {booking.provider} to confirm availability within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Confirmation Email</p>
                  <p className="text-sm text-gray-600">
                    You'll receive a confirmation email from HausMama with all booking details once the provider confirms availability.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Service Day</p>
                  <p className="text-sm text-gray-600">
                    {booking.provider} will arrive at the scheduled time. HausMama manages all payment processing for your protection.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Leave a Review</p>
                  <p className="text-sm text-gray-600">
                    After the service, please share your experience to help other Lae families.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact?type=booking-inquiry" className="flex-1">
            <Button className="w-full" size="lg">
              <MessageCircle size={20} className="mr-2" />
              Contact HausMama
            </Button>
          </Link>
          <Link href="/dashboard" className="flex-1">
            <Button variant="outline" className="w-full" size="lg">
              View My Bookings
            </Button>
          </Link>
        </div>

        {/* Need Help */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6 text-center">
            <p className="text-gray-700 mb-4">
              Need to make changes or have questions?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/help">
                <Button variant="outline" size="sm">
                  Visit Help Center
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="sm">
                  Contact Support
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
