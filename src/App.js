import "./App.css";
// import Item from "./MyItem";

import React from "react";
// class FilmItemRow extends React.Component {
//   render() {
//     return (
//       <li>
//         <a href={this.props.url}>{this.props.url}</a>
//       </li>
//     );
//   }
// }
class Starwars extends React.Component {
  constructor() {
    super();
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      image: null,
      species: null,
      // films: [],
    };
  }
  getNewCharacter() {
    // console.log("Get the character from the button");
    const randomize = Math.ceil(Math.random() * 88);
    const url = `https://akabab.github.io/starwars-api/api/id/${randomize}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          // films: data.films,
          image: data.image,
          species: data.species,
          loadedCharacter: true,
        });
      });
  }
  render() {
    // const movies = this.state.films.map((film, i) => {
    //   return <FilmItemRow key={i} url={film} />;
    // });
    return (
      <div>
        {this.state.loadedCharacter && (
          <div>
            <img src={this.state.image} alt="" />
            <h1>Name:{this.state.name}</h1>
            <p>Height:{this.state.height} </p>
            <p>HomeWorld:{this.state.homeworld}</p>
            <p>Species: {this.state.species}</p>
            {/* <ul>{movies}</ul> */}
          </div>
        )}
        <button
          type="button"
          className="btn"
          onClick={() => this.getNewCharacter()}
        >
          Randomize Character
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Starwars />
      </header>
    </div>
  );
}

export default App;
