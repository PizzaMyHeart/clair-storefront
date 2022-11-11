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
    }
  ]

  const internals = [
    {
      name: "Create return",
      to: "/create-return",
    },
    {
      name: "About us",
      to: "/about-us"
    },
    {
      name: "Store FAQ",
      to: "/faq",
    },
    {
      name: "Moissanite FAQ",
      to: "/moissanite-faq"
    },
    {
      name: "Sizing guide",
      to: "/sizing-guide"
    },
    {
      name: "Terms & conditions",
      to: "/terms-and-conditions",
    },
    {
      name: "Shipping & returns",
      to: "/shipping-and-returns"
    },
    {
      name: "Privacy policy",
      to: "/privacy-policy"
    }
  ]

  return (
    <footer>
      <div className="bg-clair px-4 pt-24 pb-4 sm:px-6 lg:px-8 border-transparent flex items-center justify-between text-sm">
        <div className="flex items-center">
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
      </div>
    </footer>
  )
}

export default Footer
