import {React, useState} from "react";
import { Link, useLocation } from 'wouter'
import './style.css';

export default function Home(){
    const [keyword, setKeyword] = useState('');
    /* useState es un array que obtenemos la keyword y tambien la podemos actualizar */

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
            <Link to='/gif/panda'>Gifs de Pandas</Link>
            <Link to='/gif/ecuador'>Gifs de Ecuador</Link>
            <Link to='/gif/chile'>Gifs de Chile</Link>
        </div>
    )
}