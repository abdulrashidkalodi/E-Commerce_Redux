import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slice/productSlice";
import Card from "../../component/Card";  
import "../../style/Home.css";      

function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product); 
// Fetch products when the component mounts
  useEffect(() => {
    dispatch(fetchProducts());  
    console.log(
      "fetch dispached data",dispatch(fetchProducts())
    );
    
  }, [dispatch]);

  if (state.isLoading) {
    return <h2>Loading...</h2>;
  }

  if (state.isError) {
    return <h2>Error fetching products!</h2>;
  }

  return (
    <div className="App">
      <div className="product-container">
        {state.products_data &&
          state.products_data.map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Home;
