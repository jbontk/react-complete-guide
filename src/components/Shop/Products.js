import ProductItem from './ProductItem';
import classes from './Products.module.css';
import {useEffect, useState} from 'react';
import {MEALS_API} from '../../utils/constants';

const Products = (props) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function fetchData() {
      const response = await fetch(MEALS_API);
      const body = await response.json();
      const productsFromResponse = Object.keys(body).map(id => {
        const {name, price, description} = body[id];
        return {title: name, id, price, description}
      });
      setProducts(productsFromResponse);
    }

    fetchData();
  }, []);

  const productsToRender = products.map(p => <ProductItem key={p.id} id={p.id} title={p.title} description={p.description} price={p.price}/>);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsToRender}
      </ul>
    </section>
  );
};

export default Products;
