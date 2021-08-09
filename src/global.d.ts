type Pokemon = {
  id: number;
  name: string;
  sprites: {
    back_default: string;
    back_female?: null;
    back_shiny: string;
    back_shiny_female?: null;
    front_default: string;
    front_female?: null;
    front_shiny: string;
    front_shiny_female?: null;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
};

type Pokedex = {
  results: Array<PokedexEntry>;
};

type PokedexEntry = {
  url: number;
  name: string;
};
