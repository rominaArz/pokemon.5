import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"


const PokedexPage = () => {

 const [inputValue, setInputValue] = useState('')
const [typeSelected, setTypeSelected] = useState('AllPokemons')

console.log(typeSelected)

const trainer = useSelector(store => store.trainer)

const inputSearch = useRef()

const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
const [pokemons, getPokemons, getTypePokemon] = useFetch(url)

useEffect(() => {
  if(typeSelected === 'AllPokemons'){
    getPokemons()
  }else{
    getTypePokemon(typeSelected)
  }
   
}, [typeSelected])

const handleSearch = e => {
  e.preventDefault()
  setInputValue(inputSearch.current.value.trim().toLowerCase())
}

const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))

  return (
    <div className="edicion1">
      <p className="principalN">Hi {trainer} </p>
      <form onSubmit={handleSearch}>
        <input ref={inputSearch} type="text" />
        <button>Search</button>
      </form>
      <SelectType 
      setTypeSelected={setTypeSelected}
      />
      <div className="pokem">
        {
          pokeFiltered?.map(poke => (
            <PokeCard
            key={poke.url}
            url={poke.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PokedexPage