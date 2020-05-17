import React, { useState, useEffect } from 'react';

import useFetch from '../custom_hooks/useFetch'; // using custom hook
import SideEffects from './SideEffects';

const Counter = React.memo(()=> {
    const [count, setCount] = useState(0); // array destructuring
    const [products, setProducts] = useState([{name: 'Mobile', price: 100}]);
    //const [coupon, setCoupon] = useState(null);
    // array destructuring
  //  const users = ['chris', 'michael'];
   // const [SuperAdmin, Superuser] = users;
   // console.log(SuperAdmin);
   // console.log(Superuser);

   //componentDidUpdate: Runs on changes
   useEffect(()=> {
       console.log('[Counter value Changes]');
   }, [count, setCount]);

   //componentWillUnmount()
  // To run something before a component unmounts, we have to return a function from useEffect()

   useEffect(()=> {
        console.log('Subscribe to user like');
       // unsubscribe
        return () => {
            console.log('Unsubscribed  to user like');
        };
   });

   const data = useFetch("http:localhost:3000/");
   console.log(data);
    return (
        <React.Fragment>

        
        <div style={{textAlign: 'center'}}>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1)}>Count Up</button>
            <h2>Products</h2>
            <h2>{products[0].name}</h2>
            <h2>{products[0].price}</h2>
            <button onClick={()=> setProducts([{name: 'Shoes', price: 1000}])}>Change Product</button>
        </div>
        <SideEffects />
        </React.Fragment>
    );

});

export default Counter;