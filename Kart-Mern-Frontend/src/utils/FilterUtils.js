import { useState } from "react";

export const FilterUtils = () => {
    const [filterState, setFilterState] = useState({
        passingTags: {

            color: {
                white: false,
                black: false,
                brown: false,
                navy: false,
                blue: false,
                yellow: false,
                pink: false,
                purple: false,
                beige: false,
                red: false,
                green: false
            },
            type: {
                tops: false,
                shirts: false,
                bottoms: false,
                shoes: false,
                accessories: false,
                dresses: false,
                hoodies: false
            },
            size: {
                xs: false,
                s: false,
                m: false,
                l: false,
                xl: false,
                xxl: false,
                xxxl: false
            }
        }
    });

    const allFilterClickListener = (colorItem, filterProp) => {
        const name = colorItem;
        setFilterState(prevState => ({
            passingTags: {
                ...prevState.passingTags,
                [filterProp]: {
                    ...prevState.passingTags[filterProp],
                    [name]: !prevState.passingTags[filterProp][name]
                }
            }
        }));
    };

    const filteredCollected = () => {
        const collectedTrueKeys = {
            color: [],
            type: [],
            size: []
        };
        const { color, type, size } = filterState.passingTags;
        for (let colorKey in color) {
            if (color[colorKey]) collectedTrueKeys.color.push(colorKey);
        }
        for (let typeKey in type) {
            if (type[typeKey]) collectedTrueKeys.type.push(typeKey);
        }
        for (let sizeKey in size) {
            if (size[sizeKey]) collectedTrueKeys.size.push(sizeKey);
        }
        return collectedTrueKeys;
    };

    const multiPropsFilter = (products, filters) => {
        if (filters !== null) {
            const filterKeys = Object.keys(filters);

            return products.filter(product => {
                return filterKeys.every(key => {
                    if (!filters[key].length) return true;
                    // Loops again if product[key] is an array (for material attribute).
                    if (Array.isArray(product[key])) {
                        return product[key].some(keyEle => filters[key].includes(
                            // first letter to uppercase
                            keyEle.charAt(0).toUpperCase() + keyEle.slice(1)
                        ));
                    }
                    return filters[key].includes(
                        product[key].charAt(0).toUpperCase() + product[key].slice(1)
                    );
                });
            });
        }
    };



    return {
        filterState,
        setFilterState,
        allFilterClickListener,
        filteredCollected,
        multiPropsFilter
    }
}