import { useEffect } from 'react'
import './App.css'

const PAGE_TITLE = 'Example Vite App'

function App() {
  /**
   * Accessibility guidelines require that the document title matches
   * the value in the page's h1. Instead of defining it in two places
   * (here and index.html) and needing to remember to update it in both
   * places if we ever change the title, we update it dynamically here.
   */
  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return (
    <>
      <header>
        <h1>{PAGE_TITLE}</h1>
      </header>
      <main>
        todo
      </main>
    </>
  )
}

export default App
