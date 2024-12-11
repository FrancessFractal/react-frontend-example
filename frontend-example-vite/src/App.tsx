import { useEffect } from 'react'
import './App.css'
import { useGetProducts } from './state-hooks/useGetProducts'
import { ProductList } from './components/ProductList'

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

  const {data: products, isError, error, isPending } =  useGetProducts();

  return (
    <>
      <header>
        <h1>{PAGE_TITLE}</h1>
      </header>
      <main>
        { isError ? error.message : isPending ? 'Loading' : <ProductList products={products} />}
      </main>
    </>
  )
}

export default App
