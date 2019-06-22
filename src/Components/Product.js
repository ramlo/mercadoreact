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
    console.log(this)
    this.setState({
      Nombre: "EDITADO"
    })
    //console.log(this.state.products[13]);
  }


  render(){
    if(!this.state.loaded){
      return <div className="col-6 col-md-4 my-2">Creando producto...</div>
    }else{
    const url = `/MR-${this.state.idProducto}-${slugify(this.state.Nombre)}`
    const estilo = (this.state.visto) ? "card bg-dark": "card bg-light"
    return (
      <article className="col-4 col-md-4 my-2">
        <div className={estilo} style= { { width: "18rem" } }>
          <img src={this.state.Imagen} className="card-img-top w-100" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{this.state.Marca} - {this.state.Nombre}</h5>
            <p className="card-text">{this.state.Presentacion}</p>
            <a href={url} onClick={this.verProducto.bind(this)} className="btn btn-primary">Ver +</a>
            <button className="btn btn-danger" data-toggle="modal" data-target="#react-modal" onClick={this.editarProducto.bind(this)}>Editar</button>
          </div>
        </div>
      </article>

    )
    }
  }
}

export default Product;
