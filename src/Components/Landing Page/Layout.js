import React from "react"
import Roadmap from "./Roadmap"
import Working from "./Working"
import Navbar from "./Navbar"
import Design from "./Design"
import Footers from "./Footers"
function Layout() {
  return (
    <div>
      <Navbar />
      <Design />
      <Working />
      <Roadmap />
      <Footers />
    </div>
  )
}

export default Layout
