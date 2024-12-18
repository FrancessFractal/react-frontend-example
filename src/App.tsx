import { useCallback, useEffect, useState } from 'react'
import { ProductList } from './features/product-search/components/ProductList'
import { Button, Flex, Heading, Theme } from '@radix-ui/themes'
import ProductSearchControls from './features/product-search/components/ProductSearchControls'
import { ProductSearchStateProvider } from './features/product-search/state/ProductSearchStateProvider'


const PAGE_TITLE = 'Product list app'

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

  const [appearance, setAppearance] = useState<'light' | 'dark'>('light');
  const toggleAppearance = useCallback(() => {
    setAppearance(appearance === 'light' ? 'dark' : 'light')
  }, [appearance])

  return (
    <Theme appearance={appearance}>
      <header>
        <Flex direction='row' justify='between'>
          <Heading as='h1'>{PAGE_TITLE}</Heading>
          <Button onClick={toggleAppearance}>{appearance === 'light' ? 'Dark mode' : 'Light mode'}</Button>  
        </Flex>
        </header>
      <main>
        <ProductSearchStateProvider>
          <Flex direction='row' gap='6'>
            <ProductSearchControls />
            <ProductList />
          </Flex>
        </ProductSearchStateProvider>
      </main>
    </Theme>
  )
}

export default App
