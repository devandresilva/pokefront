const pokemonName = document.querySelector('.pokemon-name')
const pokemonId = document.querySelector('.pokemon-number')
const pokemonImage = document.querySelector('.pokemon-image')
const btnNext = document.querySelector('.btn-next')
const btnPrev = document.querySelector('.btn-prev')

//faz a busca no back
const fetchPokemon = async () => {
  const response = await fetch(`/list`);
  if(response.status === 200){
    const data = await response.json()
    return data;
  }
};

// Transforma o dado vindo do back-end em uma lista com os campos desejados (id, name, imageUrl)
const listPokemon = async () => {
  const data = await fetchPokemon(); // Chama a função fetchPokemon para obter os dados
  const pokemonList = data.map(pokemon => ({
    id: pokemon.idPokemon,
    name: pokemon.name,
    imageUrl: pokemon.imageUrl
  }));
  return pokemonList;
};

const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = 'Loading...';
  pokemonId.innerHTML= '';
  const pokemonList = await listPokemon()
  if(pokemonList){
    pokemonImage.style.display = 'block'
    pokemonName.innerHTML = pokemonList.name[pokemon-1];
    pokemonId.innerHTML= pokemonList.id[pokemon-1];
    pokemonImage.src = pokemonList.imageUrl[pokemon-1];
  } else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Not Found';
    pokemonId.innerHTML= '404';
  }
}

renderPokemon(1)