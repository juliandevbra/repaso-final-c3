import axios from 'axios'
import {useContext, createContext, useState, useReducer, useEffect} from 'react'

const CharStates = createContext()

// const reducer = (state, action) => {
//     //accion para obtener todos los personajes
//     //accion para realizar la paginacion 
//     //accion para agregar favoritos
//     //accion para borrar favoritos
//     //accion para cambiar de tema
// }
const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

const Context = ({children}) => {
    const [chars, setChars] = useState([])
    const [favs, setFavs] = useState(initialFavState)
    const [theme, setTheme] = useState(true)
    
    const url = 'https://rickandmortyapi.com/api/character'

    useEffect(() => {
        axios(url)
        .then(res => setChars(res.data.results))
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favs))
    },[favs])

    return (
        <CharStates.Provider value={{chars, favs, setFavs}}>
            {children}
        </CharStates.Provider>
    )
}

export default Context

export const useCharStates = () => useContext(CharStates)