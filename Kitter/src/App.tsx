import Brand from "./components/Brand"
import Category from "./components/Category"
import CallToAction from "./components/CTA"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Offers from "./components/Offers"
import Product from "./components/Products"
import Services from "./components/Services"

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Offers />
      <Product />
      <Services />
      <CallToAction />
      <Brand />
    </>
  )
}

export default App