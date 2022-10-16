import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Logo from "../../icons/logo.svg"
import AccountPopover from "./account-popover"
import Banner from "./banner"
import CartPopover from "./cart-popover"
import HeaderLink from "./header-link"
import MobileMenu from "./mobile-menu"
import RegionPopover from "./region-popover"

const mockData = {
  customer: {
    first_name: "Kasper",
    last_name: "F. Kristensen",
  },
  cart: {
    currency_code: "DKK",
    items: [
      {
        title: "Medusa Tote",
        amount: 12500,
        quantity: 1,
        thumbnail:
          "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png",
      },
      {
        title: "Medusa Cover",
        amount: 9000,
        quantity: 1,
        thumbnail:
          "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png",
      },
      {
        title: "Medusa Sweatshirt",
        amount: 28000,
        quantity: 2,
        thumbnail:
          "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png",
      },
    ],
  },
  regions: [
    {
      id: "1",
      name: "Denmark",
      currency_code: "DKK",
      countries: [
        {
          display_name: "Denmark",
        },
      ],
    },
    {
      id: "2",
      name: "Norway",
      currency_code: "NOK",
      countries: [
        {
          display_name: "Norway",
        },
      ],
    },
    {
      id: "3",
      name: "Europe",
      currency_code: "EUR",
      countries: [
        {
          display_name: "Germany",
        },
        {
          display_name: "France",
        },
        {
          display_name: "Italy",
        },
        {
          display_name: "Spain",
        },
      ],
    },
  ],
}

const Header = () => {
  const [open, setOpen] = useState(false); // mobile view (hamburger icon)
  // show navbar on scroll up, hide on scroll down
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true)
      }
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);
      return () => {
        window.removeEventListener('scroll', controlHeader)
;      }
    }
  }, [controlHeader])

  return (
    <div className={`active ${!show && 'hidden'} sticky top-0 z-20`}>
      <header className="relative bg-clair">
        <Banner />
        <MobileMenu open={open} setOpen={setOpen} />
        <nav
          aria-label="Top"
          className="px-4 sm:px-6 lg:px-8 border-b border-ui-medium"
        >
          
          {/* Clair logo */}
          {/*<div className="flex justify-center w-full">
            <Link to="/">
              <img className="h-16 w-auto m-4" src={Logo} alt="" />
            </Link>
          </div>*/}
        
          <div className="flex flex-row">
            <div className="flex basis-1/3 justify-center items-center">
              <div className="h-16 flex items-center">
                <button
                  type="button"
                  className="bg-clair p-2 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    className="w-4 h-4 black"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>


              </div>

              <div className="hidden lg:flex lg:items-center">
                <div className="hidden flex-grow items-center justify-center lg:flex text-sm font-medium">
                  <HeaderLink to="/products" text="Products" />
                  <HeaderLink to="/collections" text="Collections" />
                  <HeaderLink to="/about" text="About Us" />
                </div>
              </div>
            </div>

            <div className="flex basis-1/3 justify-center w-full">
              <Link to="/">
                <img className="h-16 w-auto my-4" src={Logo} alt="" />
              </Link>
            </div>

            <div className="flex basis-1/3 items-center justify-center">
              <div className="hidden lg:flex">
                <RegionPopover regions={mockData.regions}/>
                <AccountPopover customer={mockData.customer} />
              </div>
              <CartPopover cart={mockData.cart}/>
            </div>
          </div>
        </nav>
      </header>
    </div>
 
  )
}

export default Header
