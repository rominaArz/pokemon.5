import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"


const PokedexIdPage = () => {

const { id }= useParams()

const url = `https://pokeapi.co/api/v2/pokemon/${id}`
const [pokemon, getPokemon] = useFetch(url)

useEffect(() => {
   getPokemon()
}, [id])

console.log(pokemon)

  return (
    <div className="ver">
       <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
       <h2>{pokemon?.name}</h2>
    </div>
  )
}

export default PokedexIdPage