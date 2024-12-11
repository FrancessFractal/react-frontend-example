import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const PAGE_TITLE = 'Example Vite App'

function App() {
  const [count, setCount] = useState(0)

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
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>{PAGE_TITLE}</h1>
      </header>
      <main>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </main>
    </>
  )
}

export default App
