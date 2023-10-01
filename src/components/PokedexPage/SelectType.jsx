import useFetch from "../../hooks/useFetch"
import { useEffect } from "react"

const SelectType = ({ setTypeSelected }) => {

    const url = 'https://pokeapi.co/api/v2/type'
    const [types, getTypes] = useFetch(url)

    useEffect(() => {
     getTypes()
    }, [])


    const handleChange = e => {
     setTypeSelected(e.target.value)
    }

  return (
    <div className="seleccione">
        <select onChange={handleChange}>
            <option value= 'AllPokemons'>All Pokemons</option>
            {
              types?.results.map(typeInfo => (
              <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
              ))
            }
        </select>
    </div>
  )
}

export default SelectType