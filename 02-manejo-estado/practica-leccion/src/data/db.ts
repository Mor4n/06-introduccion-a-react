


async function db() {

  const response = await fetch("https://fakestoreapi.com/products");
  const results = await response.json()

  return results

}

export default db