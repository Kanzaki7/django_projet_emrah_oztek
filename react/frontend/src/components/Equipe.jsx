import axios from "axios"
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Equipe() { 

    let  { id }  = useParams()

    const [dataEquipe, setdataEquipe] = useState([])
    const [dataEquipeImage, setdataEquipeImage] = useState([])
    const [dataBraqueurs, setdataBraqueurs] = useState([])
    const [dataBraqueursImages, setdataBraqueursImages] = useState([])

  
    
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/equipe/'+id)
      .then(res => setdataEquipe(res.data.data.equipe))
      .catch(error => console.log(error))
    }, [])
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/equipe/'+id)
      .then(res => setdataEquipeImage(res.data.data.equipeImage))
      .catch(error => console.log(error))
    }, [])
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/equipe/'+id)
      .then(res => setdataBraqueurs(res.data.data.braqueurs))
      .catch(error => console.log(error))
    }, [])
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/equipe/'+id)
      .then(res => setdataBraqueursImages(res.data.data.braqueursImages))
      .catch(error => console.log(error))
    }, [])

console.log(id);

    const braqueursFilter = dataBraqueurs.filter(data => data.equipe == id)

  return(
    <div>
        <section>
            <h1>Braqueurs de {dataEquipe.nomEquipe}:</h1>
            {braqueursFilter ? braqueursFilter.map((braqueurs)=>(
                <div key={braqueurs.id}>
                    <Link to={"/braqueur/"+braqueurs.id}>
                            <h3>{braqueurs.prenomBraqueur} {braqueurs.nomBraqueur}</h3>
                    </Link>
                    {dataBraqueursImages ? dataBraqueursImages.map((braqueurImage)=>(
                        braqueurImage.braqueur === braqueurs.id &&
                        <img key={braqueurImage.id} src={`http://127.0.0.1:8000${braqueurImage.imageBraqueur}`} alt="" width={100} height={100}/>
                    )) : ""}
                </div>
            )) : ""}
        </section>
    </div>
  )

}