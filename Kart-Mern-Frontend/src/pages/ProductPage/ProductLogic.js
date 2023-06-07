import { useEffect, useState } from "react"
import { getAllProducts } from "../../redux/actions/productAction"
import { useSelector, useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { FilterUtils } from "../../utils/FilterUtils"

export const ProductLogic = () => {
    const { products, loading } = useSelector(state => state.getAllProducts)
    const {
        multiPropsFilter
    } = FilterUtils()

    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()

    const [trueFilters, setTrueFilters] = useState(null)
    const [productsFiltered, setProductFilterd] = useState(null)

    useEffect(() => {
        dispatch(getAllProducts(searchParams.get('category')))
    }, [dispatch])

    useEffect(() => {
        if (products) {
            setProductFilterd(multiPropsFilter(products && products?.products, trueFilters))
        }

    }, [trueFilters, products])

    return {
        products,
        loading,
        setTrueFilters,
        productsFiltered
    }
}