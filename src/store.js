// import { writable } from "svelte/store";
// export const pokemon = writable([]);


// const fetchPokemon =async () => {
// 	const url = `https://pokeapi.co/api/v2/pokemon?limit=10`;
// 	const res =  await fetch(url);
// 	const data = await res.json();
// 	const loadPokemon = data.results.map((data, index) => {
// 		return{
// 			name: data.name,
// 			id: index + 1
// 		};
// 	});
// 	pokemon.set(loadPokemon)
// };

// fetchPokemon(); 


// import { writable } from "svelte/store";
// export const pokemon = writable([]);

// const fetchPokemon =async () => {
// 	const url = `https://pokeapi.co/api/v2/pokemon?limit=10`;
// 	const res =  await fetch(url);
// 	const data = await res.json();
// 	const loadPokemon = data.results.map((data, index) => {
// 		return{
// 			name: data.name,
// 			id: index + 1
// 		};
// 	});
// 	pokemon.set(loadPokemon)
// };

// fetchPokemon(); 