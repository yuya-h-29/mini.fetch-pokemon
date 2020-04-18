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
      return fetch(endpoint).then((response) =>
        response.json().then((dataObj) => {
          console.log(dataObj);
          return dataObj.results.filter((obj) => {
            let newEndPoint = obj.url;
            return fetch(newEndPoint).then((newResponse) => {
              // console.log(newResponse.json());
              return newResponse.json().then((pokemon) => {
                if (pokemon.weight < weight) {
                  console.log("AAAA", pokemon.name);
                  return pokemon.name;
                }
              });
            });
          });
        })
      );
    }
  }

  window.Pokemonager = Pokemonager;
})();

// return fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`).then(
//         (response) => {
//           response.json().then((pokemonArr) => {
//             return pokemonArr.results.filter((obj) => {
//               // console.log("obj.url", obj.url);
//               // console.log("I'm fetching", fetch(obj.url));
//               return fetch(obj.url).then((newresponse) => {
//                 // console.log("gets single pokemon", newresponse.json());
//                 return newresponse.json().then((pokemon) => {
//                   console.log(pokemon.weight);
//                   return pokemon.weight < weight;
//                 });
//               });
//             });
//           });
//         }
//       );

// findUnderWeight(weight) {
//   // Your code here.
//   const endpoint = "https://pokeapi.co/api/v2/pokemon?limit=10";
//   return fetch(endpoint).then((response) =>
//     response.json().then((dataObj) => {
//       console.log(dataObj);
//       return dataObj.results.filter((obj) => {
//         let newEndPoint = obj.url;
//         return fetch(newEndPoint).then((newResponse) => {
//           // console.log(newResponse.json());
//           return newResponse.json().then((pokemon) => {
//             if (pokemon.weight < weight) {
//               console.log("AAAA", pokemon.name);
//               return pokemon.name;
//             }
//           });
//         });
//       });
//     })
//   );
// }
