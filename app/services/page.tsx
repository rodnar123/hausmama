import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Baby, Heart, Home, Leaf, PawPrint, BookOpen, ChefHat, Shirt, Search } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Baby,
    title: "Child Care",
    description: "Nannies, babysitters, and daycare providers",
    details: "From newborns to school-age children",
    href: "/services/childcare",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    providers: "150+"
  },
  {
    icon: Heart,
    title: "Senior Care",
    description: "Compassionate companions and caregivers",
    details: "Elderly care and daily assistance",
    href: "/services/seniorcare",
    color: "text-red-600",
    bgColor: "bg-red-50",
    providers: "80+"
  },
  {
    icon: Home,
    title: "Housekeeping",
    description: "Professional cleaning and home maintenance",
    details: "Daily, weekly, or one-time cleaning",
    href: "/services/housekeeping",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    providers: "200+"
  },
  {
    icon: Leaf,
    title: "Gardening",
    description: "Expert lawn care and landscaping",
    details: "Yard maintenance and garden design",
    href: "/services/gardening",
    color: "text-green-600",
    bgColor: "bg-green-50",
    providers: "120+"
  },
  {
    icon: PawPrint,
    title: "Pet Care",
    description: "Reliable pet sitting and dog walking",
    details: "For dogs, cats, and other pets",
    href: "/services/petcare",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    providers: "90+"
  },
  {
    icon: BookOpen,
    title: "Tutoring",
    description: "Academic support for all subjects and grades",
    details: "Primary, secondary, and university",
    href: "/services/tutoring",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    providers: "110+"
  },
  {
    icon: ChefHat,
    title: "Cooking",
    description: "Meal preparation and catering services",
    details: "Traditional PNG and modern cuisine",
    href: "/services/cooking",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    providers: "75+"
  },
  {
    icon: Shirt,
    title: "Laundry",
    description: "Professional washing and ironing services",
    details: "Pickup and delivery available",
    href: "/services/laundry",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    providers: "60+"
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Browse all available services and find the perfect provider for your needs across Papua New Guinea
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Service Categories
            </h2>
            <p className="text-lg text-gray-600">
              Select a service to browse available providers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.title} href={service.href}>
                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full border-2 hover:border-blue-300">
                  <CardHeader>
                    <div className={`${service.bgColor} ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                      <service.icon size={40} strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                    <CardDescription className="text-center">
                      {service.description}
                    </CardDescription>
                    <div className="pt-3 border-t mt-4">
                      <p className="text-xs text-gray-500 text-center">{service.details}</p>
                      <p className="text-sm font-semibold text-blue-600 text-center mt-2">
                        {service.providers} providers
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don&apos;t See What You Need?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;re always expanding our services. Contact us to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
            <Link href="/become-provider">
              <Button size="lg" variant="outline">Become a Provider</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cities Served */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Serving Communities Across PNG
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {["Port Moresby", "Lae", "Madang", "Mount Hagen", "Goroka", "Kokopo", "Wewak", "Popondetta"].map((city) => (
                <span key={city} className="bg-blue-50 text-blue-700 px-6 py-3 rounded-full font-medium">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
