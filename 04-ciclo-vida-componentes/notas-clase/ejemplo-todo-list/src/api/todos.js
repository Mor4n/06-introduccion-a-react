

//! crear

export const CreateTodo = async(todoText) =>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "Todo": todoText
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    await fetch("https://sheetdb.io/api/v1/", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

}

//! obtener


export const getTodos = async () => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    return await fetch("https://sheetdb.io/api/v1/", requestOptions)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

//! borrar
export const deleteTodo = async ( id) =>{
    const requestOptions = {
  method: "DELETE",
  redirect: "follow"
};

    return await fetch(`https://sheetdb.io/api/v1//id/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}