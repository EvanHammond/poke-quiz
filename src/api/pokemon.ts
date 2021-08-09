const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

// type GetPokemonByIdResponseType = Record<string, Pokemon>;
// export function getPokemonById(id: number) {
//   return get<GetPokemonByIdResponseType>(`${ENDPOINT}/${id}`);
// }

export function getPokemonById(id: number): Promise<Pokemon> {
  return fetch(`${ENDPOINT}/${id}`).then((r) => r.json());
}
