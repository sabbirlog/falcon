'use client'

import { Button } from "@/components/ui/button"
import { AMX as AmericanExpress, AppStore, Bkash, Call, FB as Facebook, Insta, Location, LogoLarge, Mail, Master, Nagad, PlayStore, Support, Twitter, Visa } from "./icons"

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="">
                <LogoLarge />
              </span>
              <span className="text-[48px] font-bold">FALCON</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience our new platform &  Enjoy exiting deals and offers on your day to day
            </p>
            <div className="space-y-[16px]">
              <div className="flex items-center">
                <span>
                  <Location />
                </span>
                <p className="ml-[8px] text-[14px]">
                  House #64, Road 13, ASA Center, Uttara, Dhaka-1402
                </p>
              </div>
              <div className="flex items-center">
                <Call />
                <p className="ml-[8px] text-[14px]">
                  01729-1497201
                </p>
              </div>
              <div className="flex items-center">
                <Mail />
                <p className="ml-[8px] text-[14px]">
                  falcon@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-[12px]">
            <h3 className="text-[18px] text-[#94A3B8] font-medium">ABOUT</h3>
            <ul className="space-y-2">
              {["Contact Us", "About Us", "Careers", "Press", "Cancellation & Returns", "Terms of Use"].map((item) => (
                <li key={item}>
                  <Button
                    variant="link"
                    className="text-white p-0 text-base h-auto font-medium justify-start"
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-[12px]">
            <h3 className="text-[18px] text-[#94A3B8] font-medium">HELP</h3>
            <ul className="space-y-2">
              {["Payments", "Shipping", "My Orders", "FAQs", "Terms of Use", "Security", "Privacy"].map((item) => (
                <li key={item}>
                  <Button
                    variant="link"
                    className="text-white p-0 text-base h-auto font-medium justify-start"
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-[32px]">
            <div className="space-y-3">
              <h3 className="text-[18px] text-[#94A3B8] font-medium">Need Support?</h3>
              <div className="flex items-center border border-[#F1F5F9] rounded-[4px] px-[16px] py-[8px]">
                <span>
                  <Support />
                </span>
                <span className="text-sm ml-[8px]">10724-7814XX</span>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-[18px] text-[#94A3B8] font-medium">DOWNLOAD APP</h3>
              <div className="flex flex-col space-y-2">
                <span>
                  <PlayStore />
                </span>
                <span>
                  <AppStore />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[48px]">
          <div className="flex items-center">
            <h5 className="text-base font-medium">
              Follow us on
            </h5>
            <div className="flex space-x-2 ml-[16px]">
              <Button variant="link" size="sm" className="text-gray-300 p-0">
                <Facebook />
              </Button>
              <Button variant="link" size="sm" className="text-gray-300 p-0">
                <Insta />
              </Button>
              <Button variant="link" size="sm" className="text-gray-300 p-0">
                <Twitter />
              </Button>
            </div>
          </div>
          <div className="flex items-center">
            <h5 className="text-[18px] text-[#94A3B8] font-medium mb-1">
              PAYMENTS ACCEPTED
            </h5>
            <div className="flex items-center ml-[36px]">
              <span className="flex">
                <Visa />
              </span>
              <span className="flex">
                <Master />
              </span>
              <span className="flex">
                <AmericanExpress />
              </span>
              <span className="flex">
                <Bkash />
              </span>
              <span className="flex">
                <Nagad />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[rgba(255,255,255,0.19)] py-[30px]">
        <p className="text-white text-[14px] text-center">Falcon ©2025. Design by xyz</p>
      </div>
    </footer>
  )
}
