import React from "react"

import Logo from "./logo.svg"

const Welcome = ({ element }) => {
  return (
    <main>
      <section className="welcome">
        <div>
          <img src={Logo} alt="logo" className="welcome--logo" />
          <p>Even if you scroll, i will stick with you</p>
          <button className="welcome__cta-primary">Contact us</button>
        </div>
      </section>
    </main>
  )
}

export default Welcome
