"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Calendar, 
  DollarSign, 
  Settings, 
  User, 
  MessageCircle,
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Edit,
  BarChart3,
  Briefcase
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Mock data
const mockProvider = {
  name: "Mary Kila",
  email: "mary.kila@email.com",
  phone: "+675 7123 4567",
  location: "Port Moresby, NCD",
  rating: 4.9,
  reviews: 47,
  memberSince: "January 2023",
  totalEarnings: 18500,
  monthlyEarnings: 2800,
  completedJobs: 156,
  activeBookings: 4
}

const mockBookings = [
  {
    id: "1",
    client: "Sarah Johnson",
    service: "Child Care",
    date: "2024-11-20",
    time: "9:00 AM",
    duration: 4,
    status: "confirmed",
    amount: 100
  },
  {
    id: "2",
    client: "David Tau",
    service: "Child Care",
    date: "2024-11-22",
    time: "2:00 PM",
    duration: 3,
    status: "pending",
    amount: 75
  },
  {
    id: "3",
    client: "Grace Buka",
    service: "Babysitting",
    date: "2024-11-18",
    time: "6:00 PM",
    duration: 4,
    status: "completed",
    amount: 100
  }
]

const mockMessages = [
  {
    id: "1",
    from: "Sarah Johnson",
    message: "Hi, I'd like to book you for next week",
    time: "2 hours ago",
    unread: true
  },
  {
    id: "2",
    from: "David Tau",
    message: "Thank you for the great service!",
    time: "1 day ago",
    unread: false
  }
]

const mockJobPosts = [
  {
    id: "1",
    title: "Nanny needed for twin toddlers",
    location: "Port Moresby",
    rate: "K25-30/hr",
    posted: "2 days ago"
  },
  {
    id: "2",
    title: "Weekend babysitter required",
    location: "Port Moresby",
    rate: "K20/hr",
    posted: "5 days ago"
  }
]

export default function ProviderDashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "bookings" | "earnings" | "jobs" | "messages" | "settings">("overview")

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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Provider Dashboard</h1>
          <p className="text-gray-600">Manage your bookings, earnings, and profile</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
                  {mockProvider.name.charAt(0)}
                </div>
                <CardTitle className="text-xl">{mockProvider.name}</CardTitle>
                <CardDescription>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="font-semibold">{mockProvider.rating}</span>
                    <span className="text-xs">({mockProvider.reviews})</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "overview" 
                        ? "bg-blue-50 text-blue-600 font-medium" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <BarChart3 size={20} />
                    <span>Overview</span>
                  </button>
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
                    onClick={() => setActiveTab("earnings")}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "earnings" 
                        ? "bg-blue-50 text-blue-600 font-medium" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <DollarSign size={20} />
                    <span>Earnings</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("jobs")}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "jobs" 
                        ? "bg-blue-50 text-blue-600 font-medium" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Briefcase size={20} />
                    <span>Job Opportunities</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("messages")}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors relative ${
                      activeTab === "messages" 
                        ? "bg-blue-50 text-blue-600 font-medium" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <MessageCircle size={20} />
                    <span>Messages</span>
                    {mockMessages.filter(m => m.unread).length > 0 && (
                      <span className="absolute right-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {mockMessages.filter(m => m.unread).length}
                      </span>
                    )}
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
                    <span>Settings</span>
                  </button>
                </nav>
              </CardContent>
            </Card>

            <Link href={`/providers/${mockProvider.name.toLowerCase().replace(" ", "-")}`}>
              <Button variant="outline" className="w-full mt-4">
                View Public Profile
              </Button>
            </Link>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">This Month</p>
                          <p className="text-2xl font-bold text-gray-900">K{mockProvider.monthlyEarnings}</p>
                        </div>
                        <DollarSign className="text-green-600" size={32} />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Total Earnings</p>
                          <p className="text-2xl font-bold text-gray-900">K{mockProvider.totalEarnings}</p>
                        </div>
                        <TrendingUp className="text-blue-600" size={32} />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Active Bookings</p>
                          <p className="text-2xl font-bold text-gray-900">{mockProvider.activeBookings}</p>
                        </div>
                        <Calendar className="text-purple-600" size={32} />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Completed Jobs</p>
                          <p className="text-2xl font-bold text-gray-900">{mockProvider.completedJobs}</p>
                        </div>
                        <CheckCircle className="text-green-600" size={32} />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Upcoming Bookings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Bookings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {mockBookings.filter(b => b.status !== "completed").slice(0, 3).map((booking) => (
                        <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-semibold">{booking.client}</p>
                            <p className="text-sm text-gray-600">
                              {new Date(booking.date).toLocaleDateString()} at {booking.time}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Messages */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Recent Messages</CardTitle>
                      <Link href="/messages">
                        <Button variant="ghost" size="sm">View All</Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {mockMessages.slice(0, 3).map((msg) => (
                        <div key={msg.id} className={`p-4 rounded-lg ${msg.unread ? "bg-blue-50" : "bg-gray-50"}`}>
                          <div className="flex justify-between items-start mb-2">
                            <p className="font-semibold">{msg.from}</p>
                            <span className="text-xs text-gray-500">{msg.time}</span>
                          </div>
                          <p className="text-sm text-gray-600">{msg.message}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "bookings" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">My Bookings</h2>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm">All</Button>
                  <Button variant="ghost" size="sm">Upcoming</Button>
                  <Button variant="ghost" size="sm">Completed</Button>
                  <Button variant="ghost" size="sm">Cancelled</Button>
                </div>

                <div className="space-y-4">
                  {mockBookings.map((booking) => (
                    <Card key={booking.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div className="flex items-start space-x-4 mb-4 md:mb-0">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                              {booking.client.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{booking.client}</h3>
                              <p className="text-gray-600 text-sm">{booking.service}</p>
                              <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                                <span className="flex items-center">
                                  <Calendar size={14} className="mr-1" />
                                  {new Date(booking.date).toLocaleDateString()}
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
                            <span className="text-lg font-bold">K{booking.amount}</span>
                            <div className="flex gap-2">
                              {booking.status === "pending" && (
                                <>
                                  <Button size="sm"><CheckCircle size={14} className="mr-1" /> Accept</Button>
                                  <Button size="sm" variant="outline"><XCircle size={14} className="mr-1" /> Decline</Button>
                                </>
                              )}
                              {booking.status === "confirmed" && (
                                <Link href={`/messages?client=${booking.id}`}>
                                  <Button size="sm" variant="outline">
                                    <MessageCircle size={14} className="mr-1" /> Message
                                  </Button>
                                </Link>
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

            {activeTab === "earnings" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Earnings</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-sm text-gray-600 mb-1">This Week</p>
                      <p className="text-3xl font-bold text-gray-900">K850</p>
                      <p className="text-sm text-green-600 mt-2">+12% from last week</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <p className="text-sm text-gray-600 mb-1">This Month</p>
                      <p className="text-3xl font-bold text-gray-900">K{mockProvider.monthlyEarnings}</p>
                      <p className="text-sm text-green-600 mt-2">+8% from last month</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <p className="text-sm text-gray-600 mb-1">Total Earnings</p>
                      <p className="text-3xl font-bold text-gray-900">K{mockProvider.totalEarnings}</p>
                      <p className="text-sm text-gray-600 mt-2">Since {mockProvider.memberSince}</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Payment History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-semibold">Payment #{i}</p>
                            <p className="text-sm text-gray-600">Nov {20 - i}, 2024</p>
                          </div>
                          <p className="font-bold text-green-600">+K{(Math.random() * 200 + 50).toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "jobs" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Job Opportunities</h2>
                  <Button variant="outline">Filters</Button>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-600">Browse jobs posted by families looking for services like yours</p>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  {mockJobPosts.map((job) => (
                    <Card key={job.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                            <div className="flex gap-4 text-sm text-gray-600">
                              <span>{job.location}</span>
                              <span>•</span>
                              <span>{job.rate}</span>
                              <span>•</span>
                              <span>{job.posted}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Button>Apply Now</Button>
                          <Button variant="outline">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "messages" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
                <Card>
                  <CardContent className="p-6 text-center text-gray-600">
                    <MessageCircle size={48} className="mx-auto mb-4 text-gray-400" />
                    <p>View full messaging interface</p>
                    <Link href="/messages">
                      <Button className="mt-4">Go to Messages</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Provider Settings</h2>

                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <Input defaultValue={mockProvider.name} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <Input type="email" defaultValue={mockProvider.email} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <Input defaultValue={mockProvider.phone} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        <Input defaultValue={mockProvider.location} />
                      </div>
                    </div>
                    <Button>Save Changes</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Availability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Set your weekly availability</p>
                    <Button variant="outline">Manage Availability</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Pricing</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate (Kina)</label>
                      <Input type="number" defaultValue="25" />
                    </div>
                    <Button>Update Rate</Button>
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
