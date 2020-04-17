(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    findNames(n) {
      // Your code here.

      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${n}`)
        .then(function (response) {
          // console.log(response.json());
          return response.json();
        })
        .then(function (json) {
          return json.results.map((obj) => obj.name);

          // [1, 2, 3,4,5]
          // *2
          // [2,3, 4,5,6]

          // [{"name": pika, "url": "jfaflsf sfs "},{"name": "AAAAA"}....,{}]
          // {}name url
          // [
          // [pika, jon, satoshi, takeshi]
        });
    }

    // This should return an array of all the Pokemon that are under a particular weight.

    findUnderWeight(weight) {
      // Your code here.
      // ** LIMIT TO THE FIRST 10 POKEMON
      // We don't want to make too many unnecessary calls to the Pokemon API
    }
  }

  window.Pokemonager = Pokemonager;
})();
