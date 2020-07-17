// componente statefull
import React, {Component} from 'react';

class ListadoPersonajes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: 'Soy el componente Listado de Personajes',
            MiEstado: 'En cuarentena eterna',
            Personajes: [],
            Loading: true
        }
    }   
    // Ciclos de vida de un componente
    // 1.- Constructor
    // 2.- static getDerivedStateFromProps
    // 3.- render
    // 4.- componentDidMount     

    componentDidMount () {
        console.log('entro a componentDidMount' );
        fetch('https://swapi.dev/api/people/?format=json')
            .then(Response => Response.json())
            .then(data => {
                // seteo el estado despues que el componente se monto 1:20:28 
                this.setState({
                    Personajes: data.results,
                    Loading: false
                })
                // fin del seteo
            })
            .catch(error => console.error(error))        
    }

    componentDidUpdate () {        
    }


        render () {
            let {titulo, MiEstado, Personajes, Loading} = this.state;
            return (
            <React.Fragment>
                 <h4> { titulo } </h4>   
                 <p> {this.props.dePrueba}</p>
                 <p> { MiEstado } </p> 
                 { this.props.children }

                 {Loading 
                  ?
                 <div className="spinner-border text-primary" role="status">
                 <span className="sr-only">Loading...</span>
                 </div>
                 :
                 <table className="table">
                 <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full name</th>                    
                    <th scope="col">Gender</th>
                    <th scope="col">URL</th>
                    </tr>
                 </thead>
                 <tbody>
                       {
                         Personajes.map((unPersonaje, indice) => {
                         return (
                         <tr key={indice}> 
                         <th scope="row">{indice + 1}</th>
                         <td>{unPersonaje.name} </td>
                         <td>{unPersonaje.gender} </td>
                         <td>
                             <a href={unPersonaje.url} target="_blank" rel="noopener noreferrer">
                                 Ver Detalle
                             </a>
                         </td>                         
                         </tr>
                         )
                         } )
                       }                                    
                 </tbody>
                 </table>
                 }
            </React.Fragment>
               
            );
        }
}
export default ListadoPersonajes;
