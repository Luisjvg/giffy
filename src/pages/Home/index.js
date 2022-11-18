import {React, useState, useEffect} from "react";
import { Link, useLocation } from 'wouter'
import './style.css';
import getGifs from "../../service/getGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";

export default function Home(){
    const [keyword, setKeyword] = useState('');
    /* useState es un array que obtenemos la keyword y tambien la podemos actualizar */
    const [gifs, setGifs] = useState([])
    
    useEffect(() => {
            getGifs({keyword: 'Rick'})
            .then(gifs => {
                setGifs(gifs)
            })
    }, [keyword])


    const [path, pushLocation] = useLocation() 
    /* con este hook de wouter tenemos un array con el path(/) y la direccion a la cual queremos ir */

    /* Variable usaba para cuando se hace submit se cambie la ruta */
    const handleSubmit = evt => {
        evt.preventDefault() 
        //Es necesario colocar esto para que no recargue la pag.

        pushLocation(`/search/${keyword}`)
    }

    /* Variable usaba para actualizar el valor de la keyword */ 
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <div>
            <h1>Home | Giffy</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search a gif here ..." onChange={handleChange} type="text" value={keyword}/>
                <input onSubmit={handleSubmit} type="submit" value="Buscar" />
            </form>
            <Link to='/search/panda'>Gifs de Pandas</Link>
            <Link to='/search/ecuador'>Gifs de Ecuador</Link>
            <Link to='/search/chile'>Gifs de Chile</Link>
            <h3>Última busqueda</h3>
            <ListOfGifs gifs={gifs}/>
        </div>
    )
}