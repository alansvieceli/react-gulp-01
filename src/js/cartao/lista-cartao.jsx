import React from 'react'
import Cartao from './cartao'

class ListaCartao extends React.Component{
    constructor(props){
        super(props);
        this.state = {cliques: 0}
        this.addClique = this.addClique.bind(this);
    }

    addClique(){
        //this.setState({cliques: this.state.cliques + 1});
        this.setState((prevState)=>({
            cliques: prevState.cliques + 1
        }));
    }

    render(){
        let noticias = [
            {titulo: "Titulo 1", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"},
            {titulo: "Titulo 2", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"},
            {titulo: "Titulo 3", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"},
            {titulo: "Titulo 4", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"},
            {titulo: "Titulo 5", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"},
            {titulo: "Titulo 6", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"},
            {titulo: "Titulo 7", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"}
        ];

        let aux = [];
        let novaLista = [];
        for (let i=0; i < noticias.length; i++){
            aux.push(noticias[i]);
            if (aux.length == this.props.qtdLinha){
                novaLista.push(aux);
                aux = [];
            } else 
            if (i == noticias.length - 1){
                novaLista.push(aux);
            }
        }

        let tamColuna = "col m" + this.props.tamColuna;

        let listaCartoes = function(grupo, self){               
            
            return grupo.map(function(item, index){
                return (
                    <div key={index} className={tamColuna}> 
                        <Cartao dados={item} addClique={self.addClique} />
                    </div>
                );
            });
        }

        let self = this;

        let linha = novaLista.map(function(grupo, index) {                        
            return (
                <div key={index} className="row"> 
                    {listaCartoes(grupo, self)}
                </div>
            );
        });        

        return (
          <div>
              <p>Quantidade de cliques: {this.state.cliques}</p>
              {linha}
          </div>
        );
    }
}

export default ListaCartao;