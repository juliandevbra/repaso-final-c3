import axios from 'axios'
import {useContext, createContext, useState, useReducer, useEffect} from 'react'

const CharStates = createContext()

const reducer = (state, action) => {
    switch(action.type){
        case 'GET_CHARS':
            return {...state, chars: action.payload}
        case 'GET_CHAR':
            return
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        case 'DELETE_FAV':
            return {...state, favs: state.favs.filter(fav => fav.id != action.payload.id)}
            // return {...state, favs: action.payload} otra alternativa
        case 'SWITCH_THEME':
            return  {...state, theme: !state.theme}
        default:
            throw new Error()
    }
    //accion para borrar favoritos
}
const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

const initialState = {
    chars: [],
    char: {},
    favs: initialFavState,
    theme: ''
}

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const url = 'https://rickandmortyapi.com/api/character'

    useEffect(() => {
        axios(url)
        .then(res => dispatch({type: 'GET_CHARS', payload: res.data.results}))
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    },[state.favs])

    return (
        <CharStates.Provider value={{state, dispatch}}>
            {children}
        </CharStates.Provider>
    )
}

export default Context

export const useCharStates = () => useContext(CharStates)