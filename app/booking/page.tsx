"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, DollarSign } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useState, Suspense } from "react"

function BookingForm() {
  const searchParams = useSearchParams()
  const providerId = searchParams.get("provider")
  const service = searchParams.get("service")

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    duration: "2",
    notes: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission
    console.log("Booking submitted:", formData)
  }

  const hourlyRate = 25
  const totalPrice = hourlyRate * parseInt(formData.duration || "0")

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Book a Service</h1>
          <p className="text-gray-600">Complete the form below to book your service</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Booking Details</CardTitle>
                <CardDescription>
                  Fill in the details for your service booking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type
                    </label>
                    <Input
                      type="text"
                      value={service || ""}
                      disabled
                      className="bg-gray-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline mr-2" size={18} />
                      Preferred Date
                    </label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="inline mr-2" size={18} />
                      Preferred Time
                    </label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                      Duration (hours)
                    </label>
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full border rounded-md px-3 py-2"
                    >
                      <option value="1">1 hour</option>
                      <option value="2">2 hours</option>
                      <option value="3">3 hours</option>
                      <option value="4">4 hours</option>
                      <option value="5">5 hours</option>
                      <option value="6">6 hours</option>
                      <option value="8">8 hours (Full day)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                      Special Instructions (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Any special requirements or instructions..."
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1" size="lg">
                      Confirm Booking
                    </Button>
                    <Button type="button" variant="outline" size="lg">
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div>
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Service</span>
                  <span className="font-medium">{service || "Not selected"}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Date</span>
                  <span className="font-medium">
                    {formData.date || "Not selected"}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Time</span>
                  <span className="font-medium">
                    {formData.time || "Not selected"}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{formData.duration} hour(s)</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Rate</span>
                  <span className="font-medium">K{hourlyRate}/hour</span>
                </div>

                <div className="flex justify-between items-center pt-3 text-lg font-bold">
                  <span>Total Price</span>
                  <div className="flex items-center text-blue-600">
                    <DollarSign size={20} />
                    <span>K{totalPrice}</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-xs text-gray-500">
                    * Final price may vary based on actual service time
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    * You will be contacted by the provider to confirm booking
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">Loading...</div>}>
      <BookingForm />
    </Suspense>
  )
}
