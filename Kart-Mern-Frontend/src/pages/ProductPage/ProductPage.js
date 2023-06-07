import React from 'react'
import Filter from '../../components/Filter/Filter'
import CardComponent from '../../components/Card/CardComponent'
import useStyles from "./styles";
import { ProductLogic } from './ProductLogic';
import CircularProgress from '@mui/material/CircularProgress';

const ProductPage = () => {
  const classes = useStyles();
  const {
    products,
    loading,
    setTrueFilters,
    productsFiltered
  } = ProductLogic();

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Filter
          setTrueFilters={setTrueFilters}
        />
      </div>
      <div className={classes.right}>
        {
          loading ?
            <div className={classes.loading}>
              <CircularProgress size={70}
                sx={{
                  color: "green",
                  zIndex: 1,
                }} />
            </div>
            :
            <div className={classes.cards}>
              {
                productsFiltered ?
                  productsFiltered.map(
                    (product, index) => {
                      return (
                        <CardComponent product={product} key={index} />
                      );
                    }
                  )
                  :
                  products &&
                  products.products.map(
                    (product, index) => {
                      return (

                        <CardComponent product={product} key={index} />

                      );
                    })}
              {
                products && products.products.length === 0 &&
                <div className={classes.loading}>
                  <h1 className={classes.notFound}>No products found</h1>
                </div>
              }
            </div>
        }
      </div>

    </div>
  )
}

export default ProductPage