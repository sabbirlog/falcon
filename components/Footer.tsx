'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">🦅</span>
              </div>
              <span className="text-2xl font-bold">FALCON</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted online marketplace for electronics, home appliances, and more. Quality products at
              competitive prices with fast delivery.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-slate-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-slate-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-slate-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-slate-800">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Careers", "Press", "Blog", "Affiliate Program"].map((item) => (
                <li key={item}>
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-white p-0 h-auto font-normal justify-start"
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              {["Help Center", "Contact Us", "Track Order", "Returns", "Shipping Info"].map((item) => (
                <li key={item}>
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-white p-0 h-auto font-normal justify-start"
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@falcon.com</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">123 Commerce St, Business District, NY 10001</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Newsletter</h4>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-400"
                />
                <Button className="bg-emerald-500 hover:bg-emerald-600">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2024 Falcon. All rights reserved.</p>
            <div className="flex space-x-6">
              <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto font-normal text-sm">
                Privacy Policy
              </Button>
              <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto font-normal text-sm">
                Terms of Service
              </Button>
              <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto font-normal text-sm">
                Cookie Policy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
