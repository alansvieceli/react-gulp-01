import React from 'react'

class NavMenu extends React.Component{

  constructor(props){
    super(props);
    this.state = {menuAtivo: "Home"}
    this.alterarActive = this.alterarActive.bind(this);
  }

  alterarActive(self, titulo){
    self.setState({menuAtivo: titulo});
  }

  render(){

    let self = this;

    let lista = this.props.menu.map(function(value, index){
          return (
              <li onClick={self.alterarActive.bind(null, self, value.titulo)} key={value.titulo} className={self.state.menuAtivo == value.titulo ? 'active' : '' }><a href={value.link}>{value.titulo}</a></li>
          );
        });

        return (
          <ul id="nav-mobile" className="right">
            {lista}
          </ul>
        );
    }
}

export default NavMenu;