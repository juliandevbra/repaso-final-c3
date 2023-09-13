import React from 'react'
import { Link } from 'react-router-dom'
import { useCharStates } from '../Context/Context'

const Card = ({char}) => {
    const {state, dispatch} = useCharStates()
    const findChar = state.favs.find(fav => fav.id == char.id)
    
    const addFav = () => {
      if(findChar){
        // const deleteFav = state.favs.filter(fav => fav.id != char.id)
        // dispatch({type: 'DELETE_FAV', payload: deleteFav})
        //  deleteFav es un array nuevo con el elemento filtrado
        dispatch({type: 'DELETE_FAV', payload: findChar})
      } else {
        dispatch({type: 'ADD_FAV', payload: char})
      }
      // 
      
    }

  return (
    <div style={{margin: 20, border: '2px solid #fff'}}>
        <Link to={'/detail/' + char.id}>
            <h3>Name: {char.name}</h3>
            <img src={char.image} alt="" />
            <h4>Especie: {char.species}</h4>
        </Link>
        <button onClick={addFav}>{findChar ? '🌟' : '⭐'}</button>
        {/* <button onClick={() => setFavs([...favs, char])}>⭐</button> Lo mismo que linea 14 sin traer favs */}
    
    </div>
  )
}

export default Card