import axios from 'axios'
import {useContext, createContext, useState, useReducer, useEffect} from 'react'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

const CharStates = createContext()

const reducer = (state, action) => {
    switch(action.type){
        case 'GET_CHARS':
            return {...state, chars: action.payload}
        case 'GET_CHAR':
            return {...state, char: action.payload}
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
    console.log(state)
    useEffect(() => {
        axios(url)
        .then(res => {
            dispatch({type: 'GET_CHARS', payload: res.data.results})
            toast('Se han traido todos los personajes', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        })
        .catch(err => {
            console.log(err)
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error al traer los personajes',
            timer: 2000
          })
        })
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    },[state])

    return (
        <CharStates.Provider value={{state, dispatch}}>
            {children}
        </CharStates.Provider>
    )
}

export default Context

export const useCharStates = () => useContext(CharStates)