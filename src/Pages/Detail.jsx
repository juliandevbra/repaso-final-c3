import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useCharStates } from "../Context/Context"

const Detail = () => {
    // const [char, setChar] = useState({})
    const {state, dispatch} = useCharStates()
    const params = useParams()
    const {name, species, image, status} = state.char

    const url = 'https://rickandmortyapi.com/api/character/' + params.id

    useEffect(() => {
        axios(url)
        .then(res => dispatch({type: 'GET_CHAR', payload: res.data}))
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