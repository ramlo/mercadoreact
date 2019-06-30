class Client{
  /*
  getData(url){
    return fetch(url).then(
      (data)=>{
          return data.json()
      })
  } */
  async getData(url){
    let objects;
    let data;
    //if(!window.localStorage.getItem("_products")){
      data = await fetch(url) //obtener el json
      objects = await data.json(); //convertir a Object
      //await window.localStorage.setItem("_products", JSON.stringify(objects))
      //}else{
      //data = await window.localStorage.getItem("_products")
      //objects = await JSON.parse(data)
    //}
    return objects;
  }
}
export default Client
