import React from 'react'
import Cartao from './cartao'
import Busca from '../busca/busca'

class ListaCartao extends React.Component{
    constructor(props){
        super(props);
        this.state = {cliques: 0, busca: '', dados: [], servidor: []};
        this.addClique = this.addClique.bind(this);
        this.atualizaBusca = this.atualizaBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    addClique(){
        //this.setState({cliques: this.state.cliques + 1});
        this.setState((prevState)=>({
            cliques: prevState.cliques + 1
        }));
    }

    atualizaBusca(evento){        
        this.setState({busca: evento.target.value});
        if(evento.target.value == ""){
            this.setState({dados: this.state.servidor});
        }
    }

    onSubmit(evento){        
        let busca = this.state.busca;
        let dados = this.state.servidor;

        let novaLista = dados.filter(function(item){
          if (item.titulo.toUpperCase().indexOf(busca.toUpperCase()) > -1
          || item.descricao.toUpperCase().indexOf(busca.toUpperCase()) > -1
          || item.detalhe.toUpperCase().indexOf(busca.toUpperCase()) > -1) {
            return item;
          }
        });

        this.setState({dados: novaLista});        
    
        evento.preventDefault();
      }
    
      componentDidMount(){

        this.setState({
            dados: [
                {titulo: "Titulo 1", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"},
                {titulo: "Titulo 2", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"},
                {titulo: "Titulo 3", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"},
                {titulo: "Titulo 4", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"},
                {titulo: "Titulo 5", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"},
                {titulo: "Titulo 6", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"},
                {titulo: "Titulo 7", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"}
            ],
            servidor: [
                {titulo: "Titulo 1", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"},
                {titulo: "Titulo 2", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"},
                {titulo: "Titulo 3", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"},
                {titulo: "Titulo 4", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"},
                {titulo: "Titulo 5", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"},
                {titulo: "Titulo 6", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"},
                {titulo: "Titulo 7", descricao: "Descrição", detalhe: "Detalhe comm um texto legal", imagem: "https://materializecss.com/images/office.jpg", link: "#teste"}
            ]
        });

        /*
        let self = this;        
        axios.get('http://localhost:8000/servidor.php?dados=1').then(function(response){
          self.setState({
            dados: response.data,
            servidor: response.data
          });
        });
        */
    
      }

    render(){
        let noticias = this.state.dados;
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
              <div className="row">
                  <Busca atualizaBusca={this.atualizaBusca} onSubmit={this.onSubmit} busca={this.state.busca}/>
              </div>
              <p>Quantidade de cliques: {this.state.cliques}</p>
              {linha}
          </div>
        );
    }
}

export default ListaCartao;