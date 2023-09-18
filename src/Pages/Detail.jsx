import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Swal from "sweetalert2"
import { useCharStates } from "../Context/Context"

const Detail = () => {
    // const [char, setChar] = useState({})
    const {state, dispatch} = useCharStates()
    const params = useParams()
    const {name, species, image, status} = state.char

    const url = 'https://rickandmortyapi.com/api/character/' + params.id
s
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios(url)
                dispatch({type: 'GET_CHAR', payload: res.data})
                toast('Se ha obtenido el personaje')
            } catch (err) {
                Swal.fire(
                    '...Oops',
                    'Error al traer el personaje',
                    'error'
                )
            }
        }
        fetchData()
    }, [])

    return (
    <div>
        <h1>{name}</h1>
        <h3>{species}</h3>
        <img src={image} alt="" />
        <h5>{status}</h5>
    </div>
  )
}

export default Detail