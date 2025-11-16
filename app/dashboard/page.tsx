"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Calendar, 
  Heart, 
  Settings, 
  User, 
  Clock, 
  Star,
  MessageCircle,
  CreditCard,
  Shield,
  MapPin,
  Mail,
  Phone,
  Edit
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Mock data
const mockUser = {
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  phone: "+675 7123 4567",
  location: "Eriku, Lae",
  memberSince: "January 2024",
  image: null
}

const mockBookings = [
  {
    id: "1",
    provider: "Mary Kila",
    service: "Child Care",
    date: "2024-11-20",
    time: "9:00 AM",
    duration: 4,
    status: "confirmed",
    price: 100
  },
  {
    id: "2",
    provider: "John Tau",
    service: "Housekeeping",
    date: "2024-11-18",
    time: "2:00 PM",
    duration: 3,
    status: "completed",
    price: 75
  },
  {
    id: "3",
    provider: "Grace Buka",
    service: "Tutoring",
    date: "2024-11-25",
    time: "10:00 AM",
    duration: 6,
    status: "pending",
    price: 150
  }
]

const mockSavedProviders = [
  {
    id: "1",
    name: "Mary Kila",
    service: "Child Care",
    rating: 4.9,
    reviews: 47,
    hourlyRate: 25,
    location: "Eriku, Lae"
  },
  {
    id: "2",
    name: "David Wong",
    service: "Tutoring",
    rating: 4.8,
    reviews: 35,
    hourlyRate: 30,
    location: "Top Town, Lae"
  },
  {
    id: "3",
    name: "Sarah Buka",
    service: "Housekeeping",
    rating: 4.7,
    reviews: 28,
    hourlyRate: 20,
    location: "Bumbu, Lae"
  }
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"bookings" | "saved" | "settings">("bookings")
  const [isEditingProfile, setIsEditingProfile] = useState(false)

  const getStatusColor = (status: string) => {
    switch(status) {
      case "confirmed": return "bg-green-100 text-green-800"
      case "pending": return "bg-yellow-100 text-yellow-800"
      case "completed": return "bg-blue-100 text-blue-800"
      case "cancelled": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Dashboard</h1>
          <p className="text-gray-600">Manage your bookings, saved providers, and account settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
                  {mockUser.name.charAt(0)}
                </div>
                <CardTitle className="text-xl">{mockUser.name}</CardTitle>
                <CardDescription>Member since {mockUser.memberSince}</CardDescription>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("bookings")}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "bookings" 
                        ? "bg-blue-50 text-blue-600 font-medium" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Calendar size={20} />
                    <span>My Bookings</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("saved")}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "saved" 
                        ? "bg-blue-50 text-blue-600 font-medium" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Heart size={20} />
                    <span>Saved Providers</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "settings" 
                        ? "bg-blue-50 text-blue-600 font-medium" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Settings size={20} />
                    <span>Account Settings</span>
                  </button>
                </nav>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-sm">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Bookings</span>
                  <span className="font-semibold">{mockBookings.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Saved Providers</span>
                  <span className="font-semibold">{mockSavedProviders.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Spent</span>
                  <span className="font-semibold">K{mockBookings.reduce((sum, b) => sum + b.price, 0)}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "bookings" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">My Bookings</h2>
                  <Link href="/services">
                    <Button>Book New Service</Button>
                  </Link>
                </div>

                {/* Booking Filters */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">All</Button>
                  <Button variant="ghost" size="sm">Upcoming</Button>
                  <Button variant="ghost" size="sm">Completed</Button>
                  <Button variant="ghost" size="sm">Cancelled</Button>
                </div>

                {/* Bookings List */}
                <div className="space-y-4">
                  {mockBookings.map((booking) => (
                    <Card key={booking.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div className="flex items-start space-x-4 mb-4 md:mb-0">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                              {booking.provider.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{booking.provider}</h3>
                              <p className="text-gray-600 text-sm">{booking.service}</p>
                              <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                                <span className="flex items-center">
                                  <Calendar size={14} className="mr-1" />
                                  {new Date(booking.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </span>
                                <span className="flex items-center">
                                  <Clock size={14} className="mr-1" />
                                  {booking.time} ({booking.duration}hrs)
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end space-y-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>
                            <span className="text-lg font-bold">K{booking.price}</span>
                            <div className="flex gap-2">
                              <Link href={`/messages?provider=${booking.id}`}>
                                <Button size="sm" variant="outline">
                                  <MessageCircle size={14} className="mr-1" />
                                  Message
                                </Button>
                              </Link>
                              {booking.status === "completed" && (
                                <Button size="sm">Leave Review</Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "saved" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Saved Providers</h2>
                  <p className="text-gray-600">{mockSavedProviders.length} providers saved</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockSavedProviders.map((provider) => (
                    <Card key={provider.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                              {provider.name.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-semibold">{provider.name}</h3>
                              <p className="text-sm text-gray-600">{provider.service}</p>
                              <div className="flex items-center mt-1">
                                <Star className="text-yellow-400 fill-current" size={14} />
                                <span className="text-sm font-semibold ml-1">{provider.rating}</span>
                                <span className="text-xs text-gray-500 ml-1">({provider.reviews})</span>
                              </div>
                            </div>
                          </div>
                          <button className="text-red-500 hover:text-red-600">
                            <Heart size={20} className="fill-current" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                          <span className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {provider.location}
                          </span>
                          <span className="font-semibold text-blue-600">K{provider.hourlyRate}/hr</span>
                        </div>
                        <div className="flex gap-2">
                          <Link href={`/providers/${provider.id}`} className="flex-1">
                            <Button variant="outline" size="sm" className="w-full">View Profile</Button>
                          </Link>
                          <Link href={`/booking?provider=${provider.id}`} className="flex-1">
                            <Button size="sm" className="w-full">Book Now</Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>

                {/* Profile Information */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Profile Information</CardTitle>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setIsEditingProfile(!isEditingProfile)}
                      >
                        <Edit size={16} className="mr-2" />
                        {isEditingProfile ? "Cancel" : "Edit"}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User size={16} className="inline mr-2" />
                          Full Name
                        </label>
                        <Input 
                          defaultValue={mockUser.name} 
                          disabled={!isEditingProfile}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail size={16} className="inline mr-2" />
                          Email
                        </label>
                        <Input 
                          type="email"
                          defaultValue={mockUser.email} 
                          disabled={!isEditingProfile}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone size={16} className="inline mr-2" />
                          Phone Number
                        </label>
                        <Input 
                          defaultValue={mockUser.phone} 
                          disabled={!isEditingProfile}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <MapPin size={16} className="inline mr-2" />
                          Location
                        </label>
                        <Input 
                          defaultValue={mockUser.location} 
                          disabled={!isEditingProfile}
                        />
                      </div>
                    </div>
                    {isEditingProfile && (
                      <div className="flex gap-3">
                        <Button>Save Changes</Button>
                        <Button variant="outline" onClick={() => setIsEditingProfile(false)}>Cancel</Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Payment Methods */}
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <CreditCard size={20} className="inline mr-2" />
                      Payment Methods
                    </CardTitle>
                    <CardDescription>Manage your payment options</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-gray-500">
                      <CreditCard size={48} className="mx-auto mb-4 text-gray-400" />
                      <p className="mb-4">No payment methods added yet</p>
                      <Button>Add Payment Method</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Security */}
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <Shield size={20} className="inline mr-2" />
                      Security & Privacy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Two-Factor Authentication
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                      Delete Account
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
