import React from 'react'
import useStyles from "./styles";
import { FilterLogic } from './FilterLogic';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Filter = ({ setTrueFilters }) => {
    const classes = useStyles();

    const {
        colorOptions,
        sizeOptions,
        typeOptions,
        allFilterClickListener,
        filteredCollected,
        clearAll
    } = FilterLogic({ setTrueFilters });


    return (
        <div className={classes.filterContainer}>
            <div className={classes.filter}>
                <div className={classes.filterTitle}>
                    <span className={classes.filterTitle}>Filter</span>
                    <button className={classes.filterTitle} style={{ cursor: "pointer" }}
                        onClick={clearAll}
                    >Clear<RestartAltIcon fontSize="large" /></button>
                </div>
                <div className={classes.filterColor}>
                    <span className={classes.filterColorTitle}>Color</span>
                    <div className={classes.filterColorOptions}>
                        {colorOptions.map((colorItem, index) => (
                            <div key={index} className={classes.filterColorOption}
                                data-name={colorItem}
                                onClick={() => {
                                    allFilterClickListener(colorItem, "color");
                                }}
                            >
                                <input type="checkbox" name="color" className={classes.checkbox}
                                    checked={filteredCollected().color.includes(colorItem) ? true : false}
                                    readOnly
                                />
                                <label htmlFor="color">{colorItem}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={classes.filterColor}>
                    <span className={classes.filterColorTitle}>Size</span>
                    <div className={classes.filterColorOptions}>
                        {sizeOptions.map((sizeItem, index) => (
                            <div key={index} className={classes.filterColorOption}
                                onClick={() => {
                                    allFilterClickListener(sizeItem, "size");
                                }}
                            >
                                <input type="checkbox" name="size" className={classes.checkbox}
                                    checked={filteredCollected().size.includes(sizeItem) ? true : false}
                                    readOnly
                                />
                                <label htmlFor="size">{sizeItem}</label>

                            </div>
                        ))}
                    </div>
                </div>
                <div className={classes.filterColor}>
                    <span className={classes.filterColorTitle}>Type</span>
                    <div className={classes.filterColorOptions}>
                        {typeOptions.map((typeItem, index) => (
                            <div key={index} className={classes.filterColorOption}
                                onClick={() => {
                                    allFilterClickListener(typeItem, "type");
                                }}
                            >
                                <input type="checkbox" name="type" className={classes.checkbox}
                                    checked={filteredCollected().type.includes(typeItem) ? true : false}
                                    readOnly
                                />
                                <label htmlFor="type">{typeItem}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter

