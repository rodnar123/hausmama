"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Baby, 
  Home, 
  Leaf, 
  BookOpen, 
  ChefHat, 
  Shirt,
  Calendar,
  Clock,
  DollarSign,
  MapPin,
  FileText
} from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

const serviceCategories = [
  { icon: Baby, label: "Child Care", value: "childcare" },
  { icon: Home, label: "Housekeeping", value: "housekeeping" },
  { icon: Leaf, label: "Gardening", value: "gardening" },
  { icon: BookOpen, label: "Tutoring", value: "tutoring" },
  { icon: ChefHat, label: "Cooking", value: "cooking" },
  { icon: Shirt, label: "Laundry", value: "laundry" }
]

export default function PostJobPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    serviceType: "",
    title: "",
    description: "",
    location: "",
    startDate: "",
    schedule: "",
    duration: "ongoing",
    hourlyRate: "",
    maxRate: "",
    requirements: "",
    numberOfPeople: "1",
    preferredLanguages: [] as string[]
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleServiceSelect = (value: string) => {
    setFormData({ ...formData, serviceType: value })
    setStep(2)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle job posting submission
    console.log("Job posted:", formData)
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Post a Job</h1>
          <p className="text-lg text-gray-600">
            Describe what you need and let qualified providers come to you
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className={`flex items-center ${step >= 1 ? "text-blue-600" : "text-gray-400"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= 1 ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}>
                1
              </div>
              <span className="ml-2 hidden sm:inline">Service Type</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <div className={`flex items-center ${step >= 2 ? "text-blue-600" : "text-gray-400"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= 2 ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}>
                2
              </div>
              <span className="ml-2 hidden sm:inline">Job Details</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <div className={`flex items-center ${step >= 3 ? "text-blue-600" : "text-gray-400"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= 3 ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}>
                3
              </div>
              <span className="ml-2 hidden sm:inline">Review & Post</span>
            </div>
          </div>
        </div>

        {/* Step 1: Service Type Selection */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>What type of service do you need?</CardTitle>
              <CardDescription>Select the category that best matches your needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {serviceCategories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => handleServiceSelect(category.value)}
                    className="p-6 border-2 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors text-center"
                  >
                    <category.icon className="mx-auto mb-3 text-blue-600" size={32} />
                    <span className="text-sm font-medium">{category.label}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Job Details Form */}
        {step === 2 && (
          <form onSubmit={(e) => { e.preventDefault(); setStep(3) }}>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Job Details</CardTitle>
                  <CardDescription>Provide details about your service needs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title
                    </label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="e.g., Experienced nanny needed for two children"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      <FileText className="inline mr-2" size={16} />
                      Job Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                      placeholder="Describe what you're looking for, your expectations, and any special requirements..."
                      value={formData.description}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="inline mr-2" size={16} />
                        Location
                      </label>
                      <select
                        id="location"
                        name="location"
                        className="w-full px-4 py-2 border rounded-md"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select location</option>
                        <option value="eriku">Eriku</option>
                        <option value="butibam">Butibam</option>
                        <option value="bumbu">Bumbu</option>
                        <option value="toptown">Top Town</option>
                        <option value="kamkumung">Kamkumung</option>
                        <option value="tentcity">Tent City</option>
                        <option value="taraka">Taraka</option>
                        <option value="chinatown">Chinatown</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline mr-2" size={16} />
                        Start Date
                      </label>
                      <Input
                        id="startDate"
                        name="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="schedule" className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="inline mr-2" size={16} />
                      Schedule
                    </label>
                    <select
                      id="schedule"
                      name="schedule"
                      className="w-full px-4 py-2 border rounded-md"
                      value={formData.schedule}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select schedule</option>
                      <option value="full-time">Full-time (40+ hrs/week)</option>
                      <option value="part-time">Part-time (20-40 hrs/week)</option>
                      <option value="occasional">Occasional (as needed)</option>
                      <option value="weekdays">Weekdays only</option>
                      <option value="weekends">Weekends only</option>
                      <option value="flexible">Flexible schedule</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700 mb-2">
                        <DollarSign className="inline mr-2" size={16} />
                        Hourly Rate (Kina)
                      </label>
                      <Input
                        id="hourlyRate"
                        name="hourlyRate"
                        type="number"
                        placeholder="Min rate"
                        value={formData.hourlyRate}
                        onChange={handleChange}
                        min="10"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="maxRate" className="block text-sm font-medium text-gray-700 mb-2">
                        Max Rate (Optional)
                      </label>
                      <Input
                        id="maxRate"
                        name="maxRate"
                        type="number"
                        placeholder="Max rate"
                        value={formData.maxRate}
                        onChange={handleChange}
                        min={formData.hourlyRate}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Languages
                    </label>
                    <div className="space-y-2">
                      {["English", "Tok Pisin", "Hiri Motu"].map((lang) => (
                        <label key={lang} className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2"
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFormData({
                                  ...formData,
                                  preferredLanguages: [...formData.preferredLanguages, lang]
                                })
                              } else {
                                setFormData({
                                  ...formData,
                                  preferredLanguages: formData.preferredLanguages.filter(l => l !== lang)
                                })
                              }
                            }}
                          />
                          {lang}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requirements (Optional)
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      rows={3}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                      placeholder="Any certifications, experience level, or other requirements..."
                      value={formData.requirements}
                      onChange={handleChange}
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button type="submit" className="flex-1">
                  Continue to Review
                </Button>
              </div>
            </div>
          </form>
        )}

        {/* Step 3: Review & Post */}
        {step === 3 && (
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Review Your Job Posting</CardTitle>
                  <CardDescription>Make sure everything looks good before posting</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{formData.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {serviceCategories.find(c => c.value === formData.serviceType)?.label}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-1">Description</h4>
                    <p className="text-gray-600">{formData.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Location:</span>
                      <p className="text-gray-600">{formData.location}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Start Date:</span>
                      <p className="text-gray-600">
                        {new Date(formData.startDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Schedule:</span>
                      <p className="text-gray-600">{formData.schedule}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Rate:</span>
                      <p className="text-gray-600">
                        K{formData.hourlyRate}{formData.maxRate ? ` - K${formData.maxRate}` : ""}/hour
                      </p>
                    </div>
                  </div>

                  {formData.preferredLanguages.length > 0 && (
                    <div>
                      <span className="font-medium text-sm text-gray-700">Languages:</span>
                      <p className="text-gray-600 text-sm">{formData.preferredLanguages.join(", ")}</p>
                    </div>
                  )}

                  {formData.requirements && (
                    <div>
                      <h4 className="font-medium text-sm text-gray-700 mb-1">Requirements</h4>
                      <p className="text-gray-600 text-sm">{formData.requirements}</p>
                    </div>
                  )}

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-900">
                      <strong>What happens next?</strong> Your job will be visible to qualified providers
                      who can apply directly. You'll be notified when providers express interest, and you
                      can review their profiles and choose the best fit for your needs.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button type="submit" className="flex-1">
                  Post Job
                </Button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
