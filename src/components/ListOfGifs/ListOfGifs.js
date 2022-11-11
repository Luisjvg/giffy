import React, {useEffect, useState} from 'react';
import Gif from '../Gif/Gif'
import getGifs from '../../service/getGifs';

export default function ListOfGifs({params}){
    console.log(params)
    const { keyword } = params
    const [loading, setLoading] = useState(false)
    
    const [gifs, setGifs] = useState([])

    useEffect(function(){
      setLoading(true)
        getGifs({ keyword })
        .then(gifs => {
          setGifs(gifs)
          setLoading(false)
          })
        // setGifs(diferentGIFS)
      }, [keyword])

      if(loading) return <i>Cargando</i>

    return <div>
      {
        gifs.map(({id, title, url}) => 
        <Gif
          key={id}
          id={id} 
          title={title}
          url={url}
        />)
      }
    </div>
        
}