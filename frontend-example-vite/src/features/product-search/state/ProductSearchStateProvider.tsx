import { ReactNode, useCallback, useState } from "react";
import { ProductSearchState, ProductSearchContext, ProductSort, PRODUCT_SORT } from "./ProductSearchContext";


export function ProductSearchStateProvider({ children }: { children: ReactNode}) {
    const [state, setState] = useState<ProductSearchState>({
        sort: PRODUCT_SORT.none,
        changeSort: () => {}
    })

    const changeSort = useCallback((value: ProductSort) => {
        setState({ ...state, sort: value})
    }, [state])

    
    return <ProductSearchContext.Provider value={{
        ...state,
        changeSort,
    }}>
        { children }
    </ProductSearchContext.Provider>
}

