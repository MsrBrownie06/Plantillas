import React, { Component } from "react";
import Genshin from "genshin"

export default class Elemento extends Component {

  state = {
    nombres: ["amber", "ayaka", "baizhu", "barbara", "beidou", "bennett", "childe", "chongyun", "cyno", "diluc", "diona", "fischl", "ganyu", "jean", "kaeya", "keqing", "klee", "lisa", "mona", "ningguang", "noelle", "qiqi", "razor", "sucrose", "venti", "xiangling", "xiao", "xingqiu", "xinyan", "zhongli"],
    personajes: [],
    estado: false
  }

  cargarPersonajes() {
    for (let i = 0; i < this.state.nombres.length; i++) {
      Genshin.characters(this.state.nombres[i]).then(res => {
        let personaje = {
          nombre: res.name,
          imagen: res.image,
          elemento: res.element,
          ciudad: res.city,
          arma: res.weapon,
          descripcion: res.description
        }

        this.state.personajes.push(personaje)
      })
    }
    this.setState({
      estado: true
    })
  }

  componentDidMount = () => {
    this.cargarPersonajes()
  };

  render() {
    if (this.state.estado === true) {
      return (
        <div>
          <div className="card mb-3 m-2" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={""} className="img-fluid rounded-start" alt="nombreImagen" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Titulo de la Carta</h5>
                  <p className="card-text">Descripcion y texto</p>
                  <p className="card-text"><small className="text-muted">Texto en pequeño</small></p>
                </div>
              </div>
            </div>
          </div>
        </div >
      );
    } else {
      return <h1>Cargando Personajes</h1>
    }
  }
}
