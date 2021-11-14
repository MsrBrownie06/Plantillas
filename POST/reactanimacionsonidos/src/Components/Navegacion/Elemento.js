import React, { Component } from "react";


export default class Elemento extends Component {

  state = {
    personajes: [],
    estado: false
  }

  cargarPersonajes() {
    for (let i = 0; i < this.state.nombres.length; i++) {
      // Genshin.characters(this.state.nombres[i]).then(res => {
      //   let personaje = {
      //     nombre: res.name,
      //     imagen: res.image,
      //     elemento: res.element,
      //     ciudad: res.city,
      //     arma: res.weapon,
      //     estrellas: res.rating
      //   }

      //   this.state.personajes.push(personaje)
      // })
    }
    this.setState({
      estado: true
    })
  }

  componentDidMount = () => {
    //this.cargarPersonajes()
  };

  render() {
    if (this.state.estado === true) {
      return (
        <div className="row row-cols-4 g-2">
          {this.state.personajes.map((personaje, index) => {
            if (personaje.elemento.toLowerCase() === this.props.vision) {
              return (
                <div className="col text-center">
                  <div key={index} className="card mb-3 m-2" style={{ maxWidth: "350px" }}>

                    <img src={personaje.imagen} className="img-fluid card-img-top" alt="nombreImagen" />
                    <div className="card-body">
                      <h1 className="card-title">{personaje.nombre}</h1>
                      <p className="card-text">Weapon: <b>{personaje.arma}</b></p>
                      <p className="card-text"><small className="text-muted">Rarity: {personaje.estrellas} stars</small></p>
                    </div>

                  </div>
                </div>

              )
            }
          })}
        </div >
      );
    } else {
      return <h1>Cargando Personajes</h1>
    }
  }
}
