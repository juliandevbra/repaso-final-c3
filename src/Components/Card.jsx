import React from 'react'
import { Link } from 'react-router-dom'
import { useCharStates } from '../Context/Context'

const Card = ({char}) => {
    const {favs, setFavs} = useCharStates()
  return (
    <div style={{margin: 20, border: '2px solid #fff'}}>
        <Link to={'/detail/' + char.id}>
            <h3>Name: {char.name}</h3>
            <img src={char.image} alt="" />
            <h4>Especie: {char.species}</h4>
        </Link>
        <button onClick={() => setFavs((prevFavs) => [...prevFavs, char])}>⭐</button>
        {/* <button onClick={() => setFavs([...favs, char])}>⭐</button> Lo mismo que linea 14 sin traer favs */}
    
    </div>
  )
}

export default Card