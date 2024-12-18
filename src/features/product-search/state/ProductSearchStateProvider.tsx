import { ReactNode, useCallback, useState } from "react";
import { ProductSearchState, ProductSearchContext, ProductSort, PRODUCT_SORT } from "./ProductSearchContext";


export function ProductSearchStateProvider({ children }: { children: ReactNode}) {
    const [state, setState] = useState<ProductSearchState>({
        sort: PRODUCT_SORT.none,
        category: 'all',
        searchTerm: '',
        availability: [],
        changeSort: () => {},
        changeCategoryFilter: () => {},
        changeSearchTerm: () => {},
        changeAvailabilityFilter: () => {},
    })

    const changeSort = useCallback((value: ProductSort) => {
        setState({ ...state, sort: value})
    }, [state])

    const changeCategoryFilter = useCallback((value: string) => {
        setState({ ...state, category: value})
    }, [state])

    const changeSearchTerm = useCallback((value: string) => {
        setState({ ...state, searchTerm: value})
    }, [state])

    const changeAvailabilityFilter = useCallback((value: string[]) => {
        setState({ ...state, availability: value})
    }, [state])

    return <ProductSearchContext.Provider value={{
        ...state,
        changeSort,
        changeCategoryFilter,
        changeSearchTerm,
        changeAvailabilityFilter,
    }}>
        { children }
    </ProductSearchContext.Provider>
}

