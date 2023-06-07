import { useEffect, useState } from "react"
import { searchProduct } from "../../redux/actions/productAction"
import { useSelector, useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { FilterUtils } from "../../utils/FilterUtils"

export const SearchResultPageLogic = () => {
    const { loading,data: searchResult } = useSelector((state) => state.searchProduct)
    const {
        multiPropsFilter
    } = FilterUtils()
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()

    const [trueFilters, setTrueFilters] = useState(null)
    const [productsFiltered, setProductFilterd] = useState(null)
    useEffect(() => {
        dispatch(searchProduct(searchParams.get('q')))
    }, [dispatch, searchParams])

    useEffect(() => {
        if (searchResult) {
            setProductFilterd(multiPropsFilter(searchResult && searchResult?.products, trueFilters))
        }

    }, [trueFilters, searchResult])
    return {
        searchResult,
        setTrueFilters,
        productsFiltered,
        loading
    }
}