import { Component } from "react";
import Comic from "./Comic";
import "./Comics.css";
import { Container, Row, Col } from "react-bootstrap";
class Comics extends Component {
  state = {
    comics: [
      {
        titulo: "Spiderman",
        imagen:
          "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
        descripcion: "Hombre araña",
      },
      {
        titulo: "Wolverine",
        imagen:
          "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
        descripcion: "Lobezno",
      },
      {
        titulo: "Guardianes de la Galaxia",
        imagen:
          "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
        descripcion: "Yo soy Groot",
      },
      {
        titulo: "Avengers",
        imagen:
          "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
        descripcion: "Los Vengadores",
      },
      {
        titulo: "Spawn",
        imagen:
          "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
        descripcion: "Al Simmons",
      },
      {
        titulo: "Batman",
        imagen:
          "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
        descripcion: "Murcielago",
      },
    ],
    favorito: null,
  };

  selectFavorito = (favComic) => {
    this.setState({
      favorito: favComic,
    });
  };

  eliminarComic = (index) => {
    //usaremos el metodo splice() el cual recibe dos parametros
    // 1- INDICE A ELIMINAR
    // 2 - NUMERO DE ELEMENTOS A ELIMINAR

    this.state.comics.splice(index, 1);
    this.setState({
      comics: this.state.comics,
    });
  };

  insertarComic = () => {
    //Esto en react puro cambiara
    var titulo = document.getElementById("titulo").value;
    var imagen = document.getElementById("imagen").value;
    var descripcion = document.getElementById("Descripcion").value;

    var comic = {
      titulo: titulo,
      imagen: imagen,
      descripcion: descripcion,
    };
    this.state.comics.push(comic);

    this.setState({
      comics: this.state.comics,
    });
  };

  modificarComic = (index) => {
    var titulo = document.getElementById("titulo").value;
    var imagen = document.getElementById("imagen").value;
    var descripcion = document.getElementById("Descripcion").value;
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1 style={{ color: "purple" }}>Comics</h1>
          </Col>
        </Row>
        <hr />
        {this.state.favorito && (
          <div style={{ border: "solid black 3px", backgroundColor: "purple" }}>
            <h1>{this.state.favorito.titulo}</h1>
            <img
              src={this.state.favorito.imagen}
              alt={this.state.favorito.descripcion}
            />
          </div>
        )}
        <hr />
        {/* //No podemos utilizar formularios en react TODAVIA */}
        <label>Titulo</label>
        <input type="text" id="titulo" />
        <br />
        <label>Imagen</label>
        <input type="text" id="imagen" />
        <br />
        <label>Descripcion</label>
        <input type="text" id="Descripcion" />
        <br />
        <button onClick={() => this.insertarComic()}>Nuevo Comic</button>
        {/* <button
          onClick={() => {
            this.eliminarComic();
          }}
        >
          Eliminar comic
        </button> */}
        <hr />
        {this.state.comics.map((objComic, index) => {
          return (
            <Comic
              Comic={objComic}
              key={index}
              selecionarFav={this.selectFavorito}
              index={index}
              eliminarComic={this.eliminarComic}
            />
          );
        })}
      </Container>
    );
  }
}

export default Comics;
