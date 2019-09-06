import React from 'react';

import {BrowserRouter as Router,  Route, Link} from 'react-router-dom';
import './App.css';
import tareas from './Ejemplos/tareas.json'

//compenentes
import Tareas from './compenentes/Tareas'
import TareaForm from './compenentes/TareaForm';
import Post from './compenentes/Post';


class App extends React.Component {

  state = {
    tareas: tareas
  }

  agregarTarea = (titulo, descripcion) => {
    const nuevaTarea ={
      titulo: titulo,
      descripcion: descripcion,
      id: this.state.tareas.length
    }
    this.setState({
      tareas: [...this.state.tareas, nuevaTarea]
    })
  }

  borrarTarea = (id) =>{
  const nuevaTarea = this.state.tareas.filter(tarea => tarea.id !== id)
    this.setState({tareas: nuevaTarea})
  }

  checkEstado = (id) => {
  const nuevaTarea = this.state.tareas.map(tarea => {
      if(tarea.id === id){
        tarea.estado = ! tarea.estado
      }
      return tarea;
    });
    this.setState({tareas: nuevaTarea})

  }

  render(){
    return(
    <div>
      <Router>
      <Link to="/">Home</Link>
     
      <br></br>
      <Link to="/posts">Post</Link>
        <Route exact path="/" render={() =>
          {
           return <div>
                <TareaForm agregarTarea = {this.agregarTarea}/>
                <Tareas 
                tareas={this.state.tareas} 
                borrarTarea = {this.borrarTarea} 
                checkEstado = {this.checkEstado}
                />
            </div>
        
          }
        }>

        </Route>
        <Route path="/posts" component={Post}></Route>
      </Router>
      
      
      
    </div>
    )
  }
}

/*function HolaMundo(props) {
  return (
    <div  id="hola">
      <h3>{props.subtitutlo}</h3>
      {props.mitexto}
    </div>
  )
}

class HolaMundo extends React.Component {
  state = {
    show: true
  }

  Cambiarestado = () =>{
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show){
      return (
        <div  id="hola">
        <h3>{this.props.subtitutlo}</h3>
        {this.props.mitexto}
        <button onClick={this.Cambiarestado}>Cambiar estado</button>
        </div>
      )  
    }else{
      return(
        <h1>No hay Elementos
        <button onClick={this.Cambiarestado}>Cambiar estado</button>
        </h1>
        
      )     
    }  
  }
}

function App() {
  return (
    <div> 
    Este es mi componente: 
    <HolaMundo mitexto="Hola Camilo" subtitutlo ="Loro"/> 
    <HolaMundo mitexto="Hola Juan" subtitutlo ="Lor"/> 
    <HolaMundo mitexto="Hola " subtitutlo ="Lord"/></div>
  );
}*/

export default App;