import React from 'react'
import NavMenu from './nav-menu'
import Axios from 'axios'

class Navbar extends React.Component{

  constructor(props){
    super(props);
    this.state = {menu: []};
  }

      
  componentDidMount(){

    let self = this;        
    Axios.get('http://localhost:8000/servidor.php?menu=1').then(function(response){
      self.setState({menu: response.data});
    });
    
  }

  render(){
      let menu = this.state.menu;

      let corNav = "nav-wrapper " + this.props.cor;
      return (
        <nav>
          <div className={corNav}>
            <div className="container">
              <a href="#" className="brand-logo">{this.props.titulo}</a>
              <NavMenu menu={menu} />
            </div>
          </div>
        </nav>
      );
  }}

export default Navbar;