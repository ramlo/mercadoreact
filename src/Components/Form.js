import React, {Component} from 'react'

class Form extends Component {
  render(){
    return(
        <form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" className="form-control" name="nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="precio">precio</label>
            <input type="text" className="form-control" name="precio" />
          </div>
          <div className="form-group">
            <label htmlFor="stock">Stock</label>
            <input type="text" className="form-control" name="stock" />
          </div>
          <div className="form-group">
            <label htmlFor="marca">Marca</label>
            <input type="text" className="form-control" name="marca" />
          </div>
          <div className="form-group">
            <label htmlFor="categoría">Categoría</label>
            <input type="text" className="form-control" name="categoría" />
          </div>
          <div className="form-group">
            <label htmlFor="imagen">imagen</label>
            <input type="text" className="form-control" name="imagen" />
          </div>
          <div className="form-group">
            <label htmlFor="presentacion">Presentacion</label>
            <input type="text" className="form-control" rows="5" name="presentacion" />
          </div>
          <button type="button" className="btn btn-primary">Submit</button>
        </form>
    )
  }
}
export default Form
