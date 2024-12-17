import { useEffect } from 'react'
import { ProductList } from './features/product-search/components/ProductList'
import { Flex, Heading } from '@radix-ui/themes'
import ProductSearchControls from './features/product-search/components/ProductSearchControls'
import { ProductSearchStateProvider } from './features/product-search/state/ProductSearchStateProvider'


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
        <ProductSearchStateProvider>
          <Flex direction='row' gap='6'>
            <ProductSearchControls />
            <ProductList />
          </Flex>
        </ProductSearchStateProvider>
      </main>
    </>
  )
}

export default App
