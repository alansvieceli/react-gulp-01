import React from 'react'
import Cartao from './cartao'

class ListaCartao extends React.Component{
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
            if (aux.length == 3){
                novaLista.push(aux);
                aux = [];
            } else 
            if (i == noticias.length - 1){
                novaLista.push(aux);
            }
        }

        let listaCartoes = function(grupo){            
            return grupo.map(function(item, index){
                return (
                    <div key={index} className="col m4"> 
                        <Cartao />
                    </div>
                );
            });
        }
        let linha = novaLista.map(function(grupo, index) {            
            return (
                <div key={index} className="row"> 
                    {listaCartoes(grupo)}
                </div>
            );
        });

        

        return (
          <div>
              {linha}
          </div>
        );
    }
}

export default ListaCartao;