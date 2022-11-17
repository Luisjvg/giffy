import React from 'react'
import Gif from '../Gif/Gif'

export default function ListOfGifs({gifs}){
  console.log(gifs)
  return <div className='ListOfGifs'>
      {
        gifs.map(({id, title, url}) => 
        <Gif
          key={id}
          id={id} 
          title={title}
          url={url}
        />
        )
      }
    </div>
}