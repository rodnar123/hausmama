"use client"

import Link from 'next/link'
import { Button } from './ui/button'
import { Menu, X, Bell } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [notifications] = useState([
    { id: 1, type: "booking", message: "New booking request from Sarah J.", time: "5 min ago", unread: true },
    { id: 2, type: "message", message: "New message from John T.", time: "1 hour ago", unread: true },
    { id: 3, type: "review", message: "You received a 5-star review!", time: "2 hours ago", unread: false }
  ])

  const unreadCount = notifications.filter(n => n.unread).length

  return (
    <nav className="bg-[#3F422F] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">HausMama</span>
              <span className="ml-2 text-sm text-[#F5E6C5]">PNG</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-white hover:text-[#F5E6C5] transition-colors">
              Services
            </Link>
            <Link href="/become-provider" className="text-white hover:text-[#F5E6C5] transition-colors">
              Become a Provider
            </Link>
            <Link href="/how-it-works" className="text-white hover:text-[#F5E6C5] transition-colors">
              How it Works
            </Link>
            
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="text-white hover:text-[#F5E6C5] transition-colors relative p-2"
              >
                <Bell size={20} />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border z-50">
                  <div className="p-4 border-b">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map((notif) => (
                        <div
                          key={notif.id}
                          className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${
                            notif.unread ? 'bg-[#F5E6C5]' : ''
                          }`}
                        >
                          <p className="text-sm text-gray-900 mb-1">{notif.message}</p>
                          <p className="text-xs text-gray-500">{notif.time}</p>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center text-gray-500">
                        <Bell size={32} className="mx-auto mb-2 text-gray-400" />
                        <p className="text-sm">No notifications</p>
                      </div>
                    )}
                  </div>
                  <div className="p-3 border-t text-center">
                    <Link
                      href="/dashboard"
                      className="text-sm text-[#3F422F] hover:underline"
                      onClick={() => setShowNotifications(false)}
                    >
                      View all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#F5E6C5]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              href="/services"
              className="block px-3 py-2 text-gray-700 hover:bg-[#F5E6C5] rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/become-provider"
              className="block px-3 py-2 text-gray-700 hover:bg-[#F5E6C5] rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Become a Provider
            </Link>
            <Link
              href="/how-it-works"
              className="block px-3 py-2 text-gray-700 hover:bg-[#F5E6C5] rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link
              href="/dashboard"
              className="block px-3 py-2 text-gray-700 hover:bg-[#F5E6C5] rounded-md relative"
              onClick={() => setIsMenuOpen(false)}
            >
              Notifications
              {unreadCount > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {unreadCount}
                </span>
              )}
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">Log in</Button>
              </Link>
              <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
