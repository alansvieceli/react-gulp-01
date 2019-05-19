import React from 'react'

class Navbar extends React.Component{
    render(){
        let menu = [
          {titulo: "Home", link: "#home"},
          {titulo: "Contato", link: "#contato"},
          {titulo: "Sobre", link: "#sobre"}
        ];

        let lista = menu.map(function(value, index){
          return (
            <li key={value.titulo}><a href="{value.link}">{value.titulo}</a></li>
          );
        });

        let corNav = "nav-wrapper " + this.props.cor;
        return (
          <nav>
            <div className={corNav}>
              <div className="container">
                <a href="#" className="brand-logo">{this.props.titulo}</a>
                <ul id="nav-mobile" className="right">
                  {lista}
                </ul>
              </div>
            </div>
          </nav>
        );
    }}

export default Navbar;