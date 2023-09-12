import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Detail = () => {
    const [char, setChar] = useState({})
    const params = useParams()
    console.log(params)

    const url = 'https://rickandmortyapi.com/api/character/' + params.id

    useEffect(() => {
        axios(url)
        .then(res => setChar(res.data))
    }, [])

    return (
    <div>
        <h1>{char.name}</h1>
        <h3>{char.species}</h3>
        <img src={char.image} alt="" />
        <h5>{char.status}</h5>
    </div>
  )
}

export default Detail