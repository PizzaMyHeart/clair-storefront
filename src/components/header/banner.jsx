import React, { useEffect, useState } from "react"
import { classNames } from "../../utils/class-names"

const Banner = () => {
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    if (localStorage) {
      setIsHidden(localStorage.getItem("hideBannerMsg") === "true")
    }
  }, [])

  const hideBanner = () => {
    localStorage.setItem("hideBannerMsg", "true")
    setIsHidden(true)
  }

  return (
    <div
      className={classNames(
        isHidden ? "hidden" : "",
        "bg-ui-dark min-h-10 py-[10px] px-[20px] flex items-center justify-between text-sm font-medium text-white px-4 sm:px-6 lg:px-8 text-center"
      )}
    >
      <p className="basis-full">Free shipping on all orders in Malaysia | Worldwide shipping available from 13 Feb 2023 | Get 10% off everything with code: CLAIRLONDON</p>
      {/*<button onClick={() => hideBanner()}>&times;</button>*/}
    </div>
  )
}

export default Banner
