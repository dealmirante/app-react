// componente statefull
import React, {Component} from 'react';

class ListadoPersonajes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: 'Soy el componente Listado de Personajes',
            MiEstado: 'En cuarentena eterna'
        }
    }   

        render () {
            let {titulo, MiEstado} = this.state;
            return (
            <React.Fragment>
                 <h4> { titulo } </h4>    
                 <p> {this.props.dePrueba}</p>
                 <p> { MiEstado } </p> 
                 { this.props.children }
            </React.Fragment>
               
            );
        }
}
export default ListadoPersonajes;
