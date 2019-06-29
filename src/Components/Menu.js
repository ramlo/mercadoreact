import React, {Component} from 'react';
//import slugify from '../helpers/String.js'
class Menu extends Component{
  render(){
    return(
      <nav className="container-fluid">
        <ul className="nav nav-pills nav-fill">
          <Items links={this.props.links}/>
        </ul>
      </nav>
    )
  }
}

class Items extends Component{
  constructor(){
    super()
    this.state={
      categories : [],
      loaded: false
    }
  }
  componentDidMount(){
    this.setState({
      categories: [ ...new Set(this.props.links.map(link => link.Categoria))],
      loaded : true
    })
  }
  render(){
      //const items= this.props.links.map( (link,index) => <li className="nav-item" key={index}><a className="nav-link" href="#">{link.categoria}</a></li>)
      const items= this.state.categories.map( (link,index) =>
      (<li className="nav-item" key={index}>
        <a className="nav-link btn-info m-1" href="#">{link}</a>
      </li>))

      if(!this.state.loaded){
        return <li>Cargando...</li>
      }else {
          return items
      }
    }
/*
  function slugify(string) {
    const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;'
    const b = 'aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------'
    const p = new RegExp(a.split('').join('|'), 'g')
    return string.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with ‘and’
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  }
  */
}

export default Menu;
