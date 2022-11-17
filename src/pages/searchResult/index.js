import React, {useEffect, useState} from 'react'
import getGifs from '../../service/getGifs'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'

export default function SearchResult({params}){
    /*Keyword que obtendremos de los params*/
    const { keyword } = params
    console.log({keyword})
    /*Array donde tenemos los gifs y una forma de actualizarlos*/
    const [gifs, setGifs] = useState([])
    /*Imagen de carga y forma de actualizarla*/
    const [loading, setLoading] = useState(false)
    /*Funcion que se ejecuta cada vez que cambia la dependencia que colocamos en el Array*/
    useEffect(() => {
            setLoading(true)
            getGifs({keyword})
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword])

    if(loading){
        return <i>Cargando</i>
    }else{
        return <ListOfGifs gifs={gifs}/>
    }
}