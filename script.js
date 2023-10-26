const pokemonName = document.querySelector('.pokemon-name')
const pokemonId = document.querySelector('.pokemon-number')
const pokemonImage = document.querySelector('.pokemon-image')
const btnNext = document.querySelector('.btn-next')
const btnPrev = document.querySelector('.btn-prev')
const hostUrl = window.location.href
const host = hostUrl.split("//")[1]
const ip = host.split(":")[0]
const urlApi = `http://` + ip + ":3000/list"

//faz a busca no back
const fetchPokemon = async () => {
  const response = await fetch(urlApi);
  if(response.status === 200){
    const data = await response.json()
    return data;
  }
};

// Transforma o dado vindo do back-end em uma lista com os campos desejados (id, name, imageUrl)
const listPokemon = async () => {
  const data = await fetchPokemon(); // Chama a função fetchPokemon para obter os dados
  const pokemonList = data.map(itens => ({
    id: itens.idPokemon,
    name: itens.name,
    imageUrl: itens.imageUrl
  }));
  return pokemonList;
};

const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = 'Loading...';
  pokemonId.innerHTML= '';
  const pokemonList = await listPokemon()
  if(pokemonList){
    pokemonImage.style.display = 'block'
    pokemonName.innerHTML = pokemonList[pokemon].name;
    pokemonId.innerHTML= pokemonList[pokemon].idPokemon;
    pokemonImage.src = pokemonList[pokemon].imageurl;
  } else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Not Found';
    pokemonId.innerHTML= '404';
  }
}

renderPokemon(0)