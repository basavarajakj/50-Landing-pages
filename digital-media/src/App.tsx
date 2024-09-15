import Header from "./components/Header"
import Hero from "./components/Hero"
import Process from "./components/Process"
import Work from "./components/Work"

const App = () => {
  return (
    <> 
    <Header />
    <main>
      <article>
        <Hero />
        <Process />
        <Work />
      </article>
    </main>
    </>
  )
}

export default App