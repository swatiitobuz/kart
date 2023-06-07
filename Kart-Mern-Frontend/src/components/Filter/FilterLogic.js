import { useEffect } from "react"
import { FilterUtils } from "../../utils/FilterUtils"

export const FilterLogic = ({
    setTrueFilters
}) => {

    const {
        filterState,
        allFilterClickListener,
        filteredCollected,
        setFilterState
    } = FilterUtils()



    const colorOptions = [
        "Red",
        "White",
        "Yellow",
        "Green",
        "Black",
        "Blue",
        "Purple",
        "Pink"
    ]
    const sizeOptions = [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
    ]
    const typeOptions = [
        "Tops",
        "Shirts",
        "Bottoms",
        "Shoes",
        "Accessories",
        "Dresses",
        "Hoodies"
    ]

    useEffect(() => {
        setTrueFilters(filteredCollected())
    }, [filterState])


    const clearAll = () => {

        setFilterState(prevState => ({
            ...prevState,
            // set all keys of passingTags.colors to false by traversing throgh them
            passingTags: {
                ...prevState.passingTags,
                color: Object.keys(prevState.passingTags.color).reduce((acc, key) => {
                    acc[key] = false;
                    return acc;
                }
                    , {}),
                size: Object.keys(prevState.passingTags.size).reduce((acc, key) => {
                    acc[key] = false;
                    return acc;
                }
                    , {}),
                type: Object.keys(prevState.passingTags.type).reduce((acc, key) => {
                    acc[key] = false;
                    return acc;
                }
                    , {})
            }
        }));


    }


    return {
        colorOptions,
        sizeOptions,
        typeOptions,
        allFilterClickListener,
        filteredCollected,
        clearAll
    }
}