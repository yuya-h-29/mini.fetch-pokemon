(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    findNames(n) {
      // Your code here.
      return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${n}`).then(
        (response) =>
          response
            .json()
            .then((pokemonArr) => {
              return pokemonArr.results.map((obj) => {
                return obj.name;
              });
            })
            .catch((err) => {
              console.error("Error", err);
            })
      );
    }

    // This should return an array of all the Pokemon that are under a particular weight.

    findUnderWeight(weight) {
      // Your code here.
      const endpoint = "https://pokeapi.co/api/v2/pokemon?limit=10";
      return fetch(endpoint)
        .then((response) => response.json())
        .then((pokemonObj) => {
          let arrOfPokemonObj = pokemonObj.results;
          return Promise.all(
            arrOfPokemonObj.map((pokemon) => fetch(pokemon["url"]))
          );
        })
        .then((newResponse) => {
          return Promise.all(
            newResponse.map((data) => {
              return data.json();
            })
          );
        })
        .then((pokemon) => pokemon.filter((pokemon) => pokemon.weight < weight))
        .catch((err) => {
          console.error("Error", err);
        });
    }
  }
  window.Pokemonager = Pokemonager;
})();
