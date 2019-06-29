import React, {Component} from 'react';
import slugify from '../helpers/String.js'

class Product extends Component{

  constructor(){
    super();
    this.state={
      visto : false,
      loaded : false
    }
  }

  componentDidMount(){
    this.setState({
      ...this.props.item,
      loaded: true
    })
  }

  verProducto(event){
    event.preventDefault();
    this.setState({visto:true})
    this.props.onEditarProducto().bind(this);
  }

  editarProducto(){
    console.table(this.state)
    this.setState({
      Precio: prompt("Ingrese nuevo Precio"),
      Stock: prompt("Ingrese stock")
    },() => this.props.onActualizarProducto(this.state) )
    //console.log(this.state.products[13]);
  }

  borrarProducto(){
    console.table(this.state)
    this.props.onActualizarProducto(this.state, true)
  }

  render(){
    if(!this.state.loaded){
      return <div className="col-6 col-md-4 my-2">Creando producto...</div>
    }else{
    const url = `/MR-${this.state.idProducto}-${slugify(this.state.Nombre)}`
    const estilo = (this.state.visto) ? "card bg-dark": "card bg-light"
    console.log(`Making Itaration ---> ${this.state.Marca} ${this.state.Nombre}`)
      return (
        <article className="col-6 col-md-4 my-2">
          <div className={estilo} >
            <img src={this.state.Imagen} className="card-img-top w-100" alt=""/>
            <div className="card-body">
              <h5 className="card-title">{this.state.Marca} - {this.state.Nombre}</h5>
              <p className="card-text">{this.state.Presentacion}</p>
              <p><span className="badge badge-primary">${this.state.Precio}</span></p>
              <a href={url} onClick={this.verProducto.bind(this)} className="btn btn-primary">Ver +</a>
              <button className="btn btn-success mx-2" data-toggle="modal" data-target="#react-modal" onClick={this.editarProducto.bind(this)}>Editar</button>
              <button className="btn btn-danger my-2" data-toggle="modal" data-target="#react-modal" onClick={this.borrarProducto.bind(this)}>Borrar</button>
            </div>
          </div>
        </article>
      )
  }
  }
}

export default Product;
