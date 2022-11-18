import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

export default function SearchResult({params}){
    const { keyword } = params
    const { loading, gifs } = useGifs({ keyword })

    if(loading){
        return <i>Cargando</i>
    }else{
        return <ListOfGifs gifs={gifs}/>
    }
}