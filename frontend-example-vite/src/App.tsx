import { useEffect } from 'react'
import { ProductList } from './components/ProductList'
import { Heading } from '@radix-ui/themes'

const PAGE_TITLE = 'Product list'

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
        <Heading as='h1'>{PAGE_TITLE}</Heading>
      </header>
      <main>
        <ProductList />
      </main>
    </>
  )
}

export default App
