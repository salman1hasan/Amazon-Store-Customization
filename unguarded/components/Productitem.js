import Link from 'next/Link'

import { Store } from '../utils/Store';
import React,{useContext} from 'react'
import{useRouter} from 'next/router'


export default function Productitem({product}) {
const router= useRouter();
  const {state,dispatch} = useContext(Store);
    
     const addToCartHandler = () =>{
      const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
      const quantity= existItem ? existItem.quantity+1:1;
      
      if(product.countInStock<quantity){ //make a custom page saying product out of stock
        router.push('/about')
         return;
       }
      dispatch({ type: 'CART_ADD_ITEM', payload: {...product,quantity}});
      router.push('/cart');
   }
  return (
    <div className='card'>
      <Link href={`/product/${product.slug}`}>
      <a>
        <img 
        src ={product.image}
        alt={product.name}

        />
      </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
          <Link href={`/product/${product.slug}`}>
            <a>
              <h2 className="text-lg">{product.name}</h2>
              </a>
          </Link>
          <p className="mb-2" >{product.brand}</p>
          <p>${product.price}</p>
          <button className="primary-button" type="button"  onClick={addToCartHandler}>
            Add to cart 
          </button>
      </div>
    </div>
  );
}
