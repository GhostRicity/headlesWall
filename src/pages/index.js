import React from "react"

//import componets
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"


//import styles
import '../styles/styles.scss'

//bootstrap

const IndexPage = ( data ) => {

    return (
    <div>
    <Header/>
    <div>
      <Hero/>
    </div>
    <Footer/>
    </div>

  )
}

export default IndexPage
