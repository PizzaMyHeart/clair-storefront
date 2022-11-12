import { Link } from "gatsby"
import React from "react"
import { FacebookIcon, InstagramIcon, TikTokIcon } from "../icons/social-icons"

const Footer = () => {
  const socials = [
    {
      name: "Facebook",
      url: "https://facebook.com/clairlondonuk",
      icon: FacebookIcon
    },
    {
      name: "Instagram",
      url: "https://instagram.com/clairlondon",
      icon: InstagramIcon
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@clairlondon",
      icon: TikTokIcon
    }
  ]

  const internals = [
    {
      name: "About us",
      to: "/about-us"
    },
    {
      name: "Return an order",
      to: "/create-return",
    },
    {
      name: "Store FAQ",
      to: "/store-faq",
    },
    {
      name: "Shipping & returns",
      to: "/shipping-and-returns"
    },
    {
      name: "Moissanite FAQ",
      to: "/moissanite-faq"
    },
    {
      name: "Terms & conditions",
      to: "/terms-and-conditions",
    },
    {
      name: "Sizing guide",
      to: "/sizing-guide"
    },
    {
      name: "Privacy policy",
      to: "/privacy-policy"
    }
  ]

  return (
    <footer className="pb-4 bg-clair">
      <div className="px-4 pt-24 pb-4 sm:px-6 lg:px-8 border-transparent items-center justify-between text-sm grid grid-rows-2 gap-y-4 lg:grid-cols-2 lg:justify-items-center">
        <div className="grid gap-x-16 grid-cols-2 items-center">
          {internals.map(internal => {
            return (
              <Link
                to={internal.to}
                key={internal.name}
                className="mr-3 last:mr-0 hover:text-gray-700"
              >
                {internal.name}
              </Link>
            )
          })}
        </div>
        <div className="grid grid-rows-2 gap-y-4">
        <div className="flex items-center">
          {socials.map(social => {
            return (
              <a
                href={social.url}
                key={social.name}
                target="_blank"
                className="mr-3 last:mr-0 hover:text-gray-700 w-6"
              >
                <social.icon/>
              </a>
            )
          })}
          </div>
          <div>Email us at <a href="mailto@hello@clairlondon.co.uk">hello@clairlondon.co.uk</a></div>
        </div>
      </div>
      <div className="grid justify-items-center"><a href="/">© Clair London</a></div>
    </footer>
  )
}

export default Footer
