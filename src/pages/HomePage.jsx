import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const HomePage = () => {

const inputTrainer = useRef()

const dispatch = useDispatch()

const navigate = useNavigate()


const handleTrainer = e => {
   e.preventDefault()
   dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
   navigate('/pokedex')
}

  return (
    <div className="pokedex">
        <h1>Pokedex</h1>
        <h2>¡Hi trainer!</h2>
        <p>To start, enter your trainer name</p>
        <form onSubmit={handleTrainer}>
            <input ref={inputTrainer} type="text" />
            <button>start!</button>
        </form>
    </div>
    
  )
}

export default HomePage