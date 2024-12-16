import { useEffect } from 'react'
import { useGetProducts } from './state-hooks/useGetProducts'
import { ProductList } from './components/ProductList'
import { Heading, Spinner } from '@radix-ui/themes'

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
        <Heading as='h1'>{PAGE_TITLE}</Heading>
      </header>
      <main>
        { isError ? error.message : isPending ? <Spinner /> : <ProductList products={products} />}
      </main>
    </>
  )
}

export default App
