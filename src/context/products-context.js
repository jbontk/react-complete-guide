// import React, {useState} from 'react';

// export const ProductsContext = React.createContext({products: [], toggleFavorite: (id) => {}});
//
//
// export default ({children}) => {
//   const [products, setProducts] = useState(initialState.products);
//
//   const toggleFavorite = id => {
//     setProducts(prev => {
//       const indexOfProductToToggle = prev.findIndex(p => p.id === id);
//       const result = [...prev];
//       if (indexOfProductToToggle > -1) {
//         const productToToggle = result[indexOfProductToToggle];
//         productToToggle.isFavorite = !productToToggle.isFavorite;
//       }
//       return result;
//     })
//   }
//
//   return <ProductsContext.Provider value={{products, toggleFavorite}}>{children}</ProductsContext.Provider>
// };
