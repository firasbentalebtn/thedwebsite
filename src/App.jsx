import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Roadmap from './components/roadmap/Roadmap'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
       {/** <Experience />*/}
      <Services />
      <Roadmap />
    {/** <Portfolio /> */}

        <Contact />
        <Footer />

    </>
  )
}

export default App