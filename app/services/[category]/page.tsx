"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Star, MapPin, Clock, DollarSign, Shield, SlidersHorizontal, X, Heart } from "lucide-react"
import Link from "next/link"
import { use, useState } from "react"

const categoryInfo: Record<string, {
  title: string
  description: string
  icon: string
}> = {
  childcare: {
    title: "Child Care Services",
    description: "Find trusted nannies, babysitters, and daycare providers in Lae",
    icon: "👶"
  },
  housekeeping: {
    title: "Housekeeping Services",
    description: "Professional cleaning and home maintenance services",
    icon: "🏠"
  },
  gardening: {
    title: "Gardening Services",
    description: "Expert lawn care and landscaping services",
    icon: "🌿"
  },
  tutoring: {
    title: "Tutoring Services",
    description: "Academic support and educational guidance",
    icon: "📚"
  },
  cooking: {
    title: "Cooking Services",
    description: "Professional meal preparation and catering",
    icon: "👨‍🍳"
  }
}

// Mock data - replace with actual API call
const mockProviders = [
  {
    id: "1",
    name: "Mary Kila",
    image: null,
    rating: 4.9,
    reviewCount: 47,
    experience: 8,
    hourlyRate: 25,
    location: "Eriku, Lae",
    bio: "Experienced childcare provider with 8 years of experience working with families in Lae.",
    verified: true,
    skills: ["Newborn care", "Meal preparation", "Light housekeeping"]
  },
  {
    id: "2",
    name: "John Tau",
    image: null,
    rating: 4.8,
    reviewCount: 32,
    experience: 5,
    hourlyRate: 22,
    location: "Bumbu, Lae",
    bio: "Dedicated caregiver committed to providing quality care and support.",
    verified: true,
    skills: ["CPR Certified", "First Aid", "Flexible hours"]
  },
  {
    id: "3",
    name: "Sarah Buka",
    image: null,
    rating: 5.0,
    reviewCount: 56,
    experience: 10,
    hourlyRate: 30,
    location: "Top Town, Lae",
    bio: "Professional service provider with excellent references and a passion for helping families.",
    verified: true,
    skills: ["Background checked", "Reliable", "Professional"]
  }
]

export default function ServiceCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = use(params)
  const info = categoryInfo[category] || categoryInfo.childcare
  
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState<string[]>([])
  const [filters, setFilters] = useState({
    location: "all",
    experience: "all",
    priceMin: 0,
    priceMax: 100,
    rating: "all",
    availability: "all",
    language: "all",
    verified: false
  })

  const toggleFavorite = (providerId: string) => {
    setFavorites(prev => 
      prev.includes(providerId) 
        ? prev.filter(id => id !== providerId)
        : [...prev, providerId]
    )
  }

  const clearFilters = () => {
    setFilters({
      location: "all",
      experience: "all",
      priceMin: 0,
      priceMax: 100,
      rating: "all",
      availability: "all",
      language: "all",
      verified: false
    })
  }

  const activeFiltersCount = Object.values(filters).filter(v => v !== "all" && v !== false && !(v === 0 || v === 100)).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#3F422F] to-[#5a5d47] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">{info.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {info.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {info.description}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Filters Bar */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-4 items-center">
            <select 
              className="border rounded-md px-4 py-2 text-sm"
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
            >
              <option value="all">All Locations</option>
              <option value="port-moresby">Port Moresby</option>
              <option value="lae">Lae</option>
              <option value="madang">Madang</option>
              <option value="mount-hagen">Mount Hagen</option>
              <option value="goroka">Goroka</option>
            </select>
            <select 
              className="border rounded-md px-4 py-2 text-sm"
              value={filters.experience}
              onChange={(e) => setFilters({...filters, experience: e.target.value})}
            >
              <option value="all">Any Experience</option>
              <option value="1">1+ years</option>
              <option value="3">3+ years</option>
              <option value="5">5+ years</option>
              <option value="10">10+ years</option>
            </select>
            <select 
              className="border rounded-md px-4 py-2 text-sm"
              value={filters.rating}
              onChange={(e) => setFilters({...filters, rating: e.target.value})}
            >
              <option value="all">Any Rating</option>
              <option value="4.5">4.5+ stars</option>
              <option value="4">4+ stars</option>
              <option value="3.5">3.5+ stars</option>
            </select>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="relative"
            >
              <SlidersHorizontal size={16} className="mr-2" />
              More Filters
              {activeFiltersCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D78B9A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
            {activeFiltersCount > 0 && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={clearFilters}
              >
                Clear All
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Advanced Filters Panel */}
      {showFilters && (
        <div className="bg-white border-b shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Advanced Filters</h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowFilters(false)}
              >
                <X size={20} />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hourly Rate (Kina)
                </label>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={filters.priceMin}
                      onChange={(e) => setFilters({...filters, priceMin: Number(e.target.value)})}
                      className="w-24"
                    />
                    <span className="self-center">-</span>
                    <Input
                      type="number"
                      placeholder="Max"
                      value={filters.priceMax}
                      onChange={(e) => setFilters({...filters, priceMax: Number(e.target.value)})}
                      className="w-24"
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.priceMax}
                    onChange={(e) => setFilters({...filters, priceMax: Number(e.target.value)})}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500">K{filters.priceMin} - K{filters.priceMax}/hour</p>
                </div>
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability
                </label>
                <select 
                  className="w-full border rounded-md px-4 py-2"
                  value={filters.availability}
                  onChange={(e) => setFilters({...filters, availability: e.target.value})}
                >
                  <option value="all">Anytime</option>
                  <option value="morning">Morning (6am-12pm)</option>
                  <option value="afternoon">Afternoon (12pm-6pm)</option>
                  <option value="evening">Evening (6pm-10pm)</option>
                  <option value="weekend">Weekends</option>
                  <option value="overnight">Overnight</option>
                </select>
              </div>

              {/* Languages */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Languages Spoken
                </label>
                <select 
                  className="w-full border rounded-md px-4 py-2"
                  value={filters.language}
                  onChange={(e) => setFilters({...filters, language: e.target.value})}
                >
                  <option value="all">Any Language</option>
                  <option value="english">English</option>
                  <option value="tok-pisin">Tok Pisin</option>
                  <option value="hiri-motu">Hiri Motu</option>
                  <option value="multilingual">Multilingual</option>
                </select>
              </div>

              {/* Verification */}
              <div>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.verified}
                    onChange={(e) => setFilters({...filters, verified: e.target.checked})}
                    className="w-4 h-4 text-[#D78B9A] rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Verified providers only
                  </span>
                  <Shield className="text-[#D78B9A]" size={16} />
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Provider Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {mockProviders.length} Providers Available
          </h2>
          <select className="border rounded-md px-4 py-2 text-sm">
            <option>Sort by: Recommended</option>
            <option>Highest Rated</option>
            <option>Most Reviews</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
            <option>Most Experience</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockProviders.map((provider) => (
            <Card key={provider.id} className="hover:shadow-lg transition-shadow relative">
              <button
                onClick={() => toggleFavorite(provider.id)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Heart 
                  size={20} 
                  className={favorites.includes(provider.id) ? "fill-red-500 text-red-500" : "text-gray-400"}
                />
              </button>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-[#9F886F] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {provider.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <CardTitle className="text-xl">{provider.name}</CardTitle>
                        {provider.verified && (
                          <Shield className="text-blue-600" size={18} />
                        )}
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="text-yellow-400 fill-current" size={16} />
                        <span className="font-semibold">{provider.rating}</span>
                        <span className="text-gray-500 text-sm">
                          ({provider.reviewCount} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{provider.bio}</CardDescription>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span>{provider.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock size={16} />
                    <span>{provider.experience} years exp.</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <DollarSign size={16} />
                    <span>K{provider.hourlyRate}/hour</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {provider.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#F5E6C5] text-[#3F422F] text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link href={`/providers/${provider.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      View Profile
                    </Button>
                  </Link>
                  <Link href={`/contact?type=service-request&provider=${provider.id}`} className="flex-1">
                    <Button className="w-full">Request Service</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-[#F5E6C5] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h3>
          <p className="text-gray-600 mb-6">
            Post your job and let service providers come to you
          </p>
          <Link href="/post-job">
            <Button size="lg">Post a Job</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
