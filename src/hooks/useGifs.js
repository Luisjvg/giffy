import {useEffect, useState} from 'react';
import getGifs from '../service/getGifs';

export function useGifs ({ keyword } = {keyword: null}) {
    /*Array dondde tenemos los gifs y una forma de actualizarlos*/
    const [gifs, setGifs] = useState([])
    /*Imagen de carga y forma de actualizarla*/
    const [loading, setLoading] = useState(false)
    /*Funcion que se ejecuta cada vez que cambia la dependencia que colocamos en el Array*/
    useEffect(() => {
            setLoading(true)

            const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

            getGifs({keyword: keywordToUse})
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword])

    return {loading, gifs}
}