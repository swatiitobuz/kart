import React from 'react'
import Filter from '../../components/Filter/Filter'
import CardComponent from '../../components/Card/CardComponent'
import useStyles from "./styles";
import { SearchResultPageLogic } from './SearchResultPageLogic';
import { CircularProgress } from '@mui/material';


const SearchResultPage = () => {
  const classes = useStyles();
  const {
    searchResult,
    setTrueFilters,
    productsFiltered,
    loading
  } = SearchResultPageLogic();

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Filter
          setTrueFilters={setTrueFilters}
        />
      </div>
      <div className={classes.right}>
      {
          loading && <CircularProgress size={50}
            sx={{
              color: "green",
              zIndex: 1,
            }} 
            className={
              classes.loading
            }
            />
        }
        <div className={classes.cards}>
          {
            productsFiltered ?
              productsFiltered.map(
                (product, index) => {
                  return (

                    <CardComponent product={product} key={index} />

                  );
                }
              ) :
              searchResult &&
              searchResult.products.map(
                (product, index) => {
                  return (

                    <CardComponent product={product} key={index} />

                  );
                })
          }{
            searchResult && searchResult.products.length === 0 &&
            <h1 className={classes.notFound}>No products found</h1>
          }
        </div>
      </div>

    </div>
  )
}

export default SearchResultPage