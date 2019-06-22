class Client{
  getData(url){
    return fetch(url).then(
      (data)=>{
          return data.json()
      })
  }

}
export default Client
