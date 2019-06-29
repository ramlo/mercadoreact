import React from 'react';
import Header from './Components/Header'
import Menu from './Components/Menu'
import Product from './Components/Product'
import ModalProduct from './Components/ModalProduct'
//import productos from './productos.json'

import Client from './helpers/Client'
//import './assets/App.css';

const API = new Client()
/*
Cilclo de vida de un componente:
1) constructor()        --> Setear el estado inicial
2) ComponentWIllMount() --> Trabajar con datos asincronicos.
3) ComponentDidMount()  --> Trabajar con datos Sincronicos
4) render()             --> Armar la intergaz grafica, segun el estado.
*/

class App extends React.Component {
constructor(){
  super();
  this.state={
    title: "MercadoReact",
    slogan: "Mucho Mas que JS",
    //products: ["Musica", "Deportes", "Electro","Pesca"]
    products: [],
    loaded : false
    /*
    [
      {nombre: "Guitarra Criolla",precio:1200,stock:30,categoria:"Música"},
      {nombre: "Paleta Ping Pong x2",precio:350,stock:600,categoria:"Deportes"},
      {nombre: "Microondas",precio:8200,stock:100,categoria:"Electro"},
      {nombre: "Pelota Basket",precio:900,stock:220,categoria:"Deportes"},
      {nombre: "Marcadores Color",precio:85,stock:400,categoria:"Librería"}
    ]*/
  }
  this.actualizarEstado = this.actualizarEstado.bind(this)
}

componentWillMount(){
  //API.getData("https://api.myjson.com/bins/fb377")
  API.getData("https://api.myjson.com/bins/dcg2p")
  .then((productos)=>{
    this.setState({products:productos,loaded:true})
  })
  /*
  fetch("https://api.myjson.com/bins/fb377")
    .then(
      (response)=>{
        ;//LLamado
        return response.json()
      })
    .then((productos)=>{
      this.setState({products:productos,loaded:true})
    })
    */
}

  actualizarEstado(product, borrar = false){
    if(!borrar){
      this.setState({products : this.state.products.map(
          oldProduct =>  (oldProduct.id === product.id) ? product: oldProduct
        )})
    }else{
      const listProducts= this.state.products.filter(
        productItemFromList =>  productItemFromList.idProducto !== product.idProducto
      )
      console.table(listProducts)
      this.setState({products: listProducts});

      /*
      this.setState({products : this.state.products.filter(
        function (productItemFromList) {
            console.log("To Be Deleted: "+productItemFromList.idProducto)
            console.log("Product Individual: "+product.idProducto)
            console.log("To Be Returned: ",productItemFromList.idProducto !== product.idProducto)
            return productItemFromList.idProducto !== product.idProducto
         }
      )}
    )*/
  }
  }

  render(){
    if(!this.state.loaded){
      return <div>Iniciando App..</div>
    }
    else{
      const productos = this.state.products.map(
        (product, index) => {
          console.log(`Render ----> index: ${index} of  ${product.Nombre} `)
          return <Product item={product} key={product.idProducto} onActualizarProducto={this.actualizarEstado} />
          }
      )

      return (
        // ****************** Se Ponen los Componetes ****************** //
          <div className="App">
            <Header title={this.state.tile} slogan={this.state.slogan}/>
            <button onClick={this.actualizarEstado}>Actualizar Estado</button>
            <Menu links={this.state.products}/>
            <section className="container-fluid">
              <div className="row">{productos}</div>
            </section>
          </div>

        );

    }
    }
}
export default App;
