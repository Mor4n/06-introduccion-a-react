import { useEffect, useState } from "react"
import Header from "./components/Header"
import Card from "./components/common/Card";
import db from "./data/db";
import type { ProductType } from "./type/types";


function App() {

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const results = await db();
      setProducts(results);
    }

    fetchData();
  }, []);


  function addToCart(product: ProductType) {
    

  }



  return (
   <>

        <Header/>

        <main className="flex flex-row flex-wrap items-center gap-8 p-6">

        {products.map( item => 
        <Card 
          key={item.id}
          item={item}
          addToCart={addToCart}
         
         />)}


        </main>

     


   </>
  )
}

export default App
