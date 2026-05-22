import { useEffect, useState } from "react"
import Header from "./components/Header"
import Card from "./components/common/Card";
import db from "./data/db";


function App() {

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const results = await db();
      setProducts(results);
    }

    fetchData();
  }, []);



  return (
   <>

        <Header/>

        <main>

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
