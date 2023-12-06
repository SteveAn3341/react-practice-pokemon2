import {useState,useEffect} from 'react'
import axios from 'axios'


export default function PokeVirwer({name}){

const [pokeImagUrl,setPokeImagUrl] = useState([])

useEffect (()=> { 
 const getPokeApi = async () =>{
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
  const sprites = response.data.sprites
  const spritesUrl = Object.values(sprites).filter(sprite =>typeof sprite === 'string')
  setPokeImagUrl(spritesUrl)

  }
  getPokeApi()  
},[])





  return(
    <>
    
    <h2> {name} </h2>
    <div> {pokeImagUrl.length > 0 ? (
      <div>
        {pokeImagUrl.map((url,index) => (
        <img key ={index} src ={url} />))}

      </div>
    ):(<div>loading ....</div>)}

    </div>
        

    </>
  )
}