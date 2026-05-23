import { useEffect, useState } from "react"
import Header from "./components/Header"
import Card from "./components/common/Card";
import db from "./data/db";

import type {CartItemType, ProductType} from "./type/index"



function App() {
  
  const [cart,setCart] = useState<CartItemType[]>([]);

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const results = await db();
      setProducts(results);
    }

    fetchData();
  }, []);


  function addToCart(product: ProductType) {

    // Encuentro el index de donde esté el producto
    const findCartIndex = cart.findIndex( item => item.id === product.id);

    // Si es mayor igual a cero, ya existe, no lo quiero volver a añadir asi que le agrego cantidad
    if(findCartIndex>=0){
      const updatedCart = cart.map( item => {
        // encuentra el id del item y modifica sus propiedades
        if(item.id === product.id){

          return{
            ...item,
            quantity: item.quantity + 1
          }

        }
        // cualquiera que no sea el item, devuelvelo tal cual
        else{
          return item;
        }
    })

    setCart(updatedCart);
    }

    else{
      // Creo un arreglo, en este arreglo tendrá los datos del carrito + el producto actual como objeto con la cantidad inicializada en 1
      const updatedCart = [...cart, {...product, quantity: 1}]

      setCart(updatedCart)


    }

    

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
