import "./HomePage.css";
import { useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import PokemonsToFight from "../Pokemon/PokemonsToFight";
import { MDBContainer, MDBRow, MDBBtn, MDBCol } from "mdb-react-ui-kit";
import "./PokeList.css";

export default function PokeList({ data, filter }) {
  const [firstPokemon, setFirstPokemon] = useState(0);
  const [secondPokemon, setSecondPokemon] = useState(0);
  const [ourPokemon, setOurPokemon] = useState(false);
  const [opponentPokemon, setOpponentPokemon] = useState(false);

  let randSelection = [];
  if (data && !filter) {
    let pokemons = data;
    for (let i = 1; i <= 12; i++) {
      const randomNumber = Math.floor(Math.random() * pokemons.length);
      const pokemon = pokemons[randomNumber];
      if (randSelection.includes(pokemon)) i--;
      else randSelection.push(pokemon);
    }
  } else if (data && filter) {
    let filteredList = data.filter(
      (pokemon) =>
        pokemon.type.some((type) =>
          type.toLowerCase().includes(filter.toLowerCase())
        ) || pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
    );
    console.log(filteredList);
    if (filteredList.length >= 12) {
      for (let i = 1; i <= 12; i++) {
        const randomNumber = Math.floor(Math.random() * filteredList.length);
        const pokemon = filteredList[randomNumber];
        if (randSelection.includes(pokemon)) i--;
        else randSelection.push(pokemon);
      }
    } else {
      randSelection = filteredList;
    }
    console.log(randSelection);
  }

  const handleAddPokemon = (pokemon) => {
    if (!ourPokemon) {
      console.log(pokemon)
      setFirstPokemon(pokemon);
      setOurPokemon(true);
    } else if (!opponentPokemon) {
      console.log(pokemon)
        setSecondPokemon(pokemon);
        setOpponentPokemon(true);
      }
  };

  const handleClickOurPokemon = () => {
    setFirstPokemon(null);
    setOurPokemon(false);
  };

  const handleClickOpponentPokemon = () => {
    setSecondPokemon(null);
    setOpponentPokemon(false);
  };

  const handleClickFight = (event) => {
    if (firstPokemon && secondPokemon) {
      console.log("The fight begins...");
    } else {
      console.log("You need two pokemons to begin the fight !");
    }
  };

  return (
    <>
      {ourPokemon || opponentPokemon ? (
        <div className="clashArea">
          <div className="firstCard">
            <h1>{firstPokemon}</h1>
            {console.log(firstPokemon)}
            <ul>
              <li>HP:{firstPokemon}</li>
              <li>Attack:</li>
              <li>Defense:</li>
            </ul>
          </div>

          <div className="secondCard">
            <h1>{secondPokemon}</h1>
            <ul>
              <li>HP:</li>
              <li>Attack:</li>
              <li>Defense:</li>
            </ul>
          </div>
          <MDBContainer className="selectComponents">
            <MDBRow className="playGround"> 
            <MDBCol>
              <MDBBtn className="rmvBtn" onClick={handleClickOurPokemon}>
                Remove Our Pokemon
              </MDBBtn>
              <MDBBtn
                className="bg-danger startGame"
                onClick={handleClickFight}
              >
                Fight
              </MDBBtn>
              <MDBBtn
                className="bg-warning startGame"
                onClick={handleClickFight}
              >
                Reset
              </MDBBtn>
              <MDBBtn className="rmvOpBtn"onClick={handleClickOpponentPokemon}>
                Remove Opponent Pokemon
              </MDBBtn>
            </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      ) : (
        <div></div>
      )}
      <MDBContainer className="PokemonWrapper">
        {randSelection.length > 0 ? (
          randSelection.map((pokemon, index) => {

            return (
              <Pokemon
                key={index}
                pokemon={pokemon}
                handleAddPokemon={handleAddPokemon}
              />
            );
          })
        ) : (
          <p>catching pokemons...</p>
        )}

      </MDBContainer>
    </>
  );
}
