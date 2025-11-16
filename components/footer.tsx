import Link from 'next/link'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">HausMama</h3>
            <p className="text-sm mb-4">
              Connecting Papua New Guinea families with trusted local service providers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/childcare" className="hover:text-white">Child Care</Link></li>
              <li><Link href="/services/housekeeping" className="hover:text-white">Housekeeping</Link></li>
              <li><Link href="/services/gardening" className="hover:text-white">Gardening</Link></li>
              <li><Link href="/services/tutoring" className="hover:text-white">Tutoring</Link></li>
              <li><Link href="/services/cooking" className="hover:text-white">Cooking</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white">How it Works</Link></li>
              <li><Link href="/become-provider" className="hover:text-white">Become a Provider</Link></li>
              <li><Link href="/safety" className="hover:text-white">Safety</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+675 XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@hausmama.pg</span>
              </li>
              <li className="mt-4">
                <p className="text-xs">Lae, Morobe Province, Papua New Guinea</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} HausMama PNG. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
