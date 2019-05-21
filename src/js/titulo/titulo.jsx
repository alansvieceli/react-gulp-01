import React from 'react'

class Titulo extends React.Component{

    constructor(props){
        super(props);
        this.state = {hora: new Date()};        
    }

    componentDidMount(){ //quando é renderizado
        this.horaID = setInterval(
            ()=> this.atualizarSegundos(),
            1000
        );
    }

    componentWillMount(){ //quando componente é destruido
        clearInterval(this.horaID);
    }

    atualizarSegundos(){
        this.setState({hora: new Date()})
    }

    render(){
        return <h2>Curso de React com Glup!!! {this.state.hora.toLocaleTimeString()}</h2>
    }
}

export default Titulo;