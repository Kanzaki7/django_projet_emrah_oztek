import axios from "axios"
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Braqueur() { 

    let  { id }  = useParams()

    const [dataBraqueurs, setdataBraqueurs] = useState([])
    const [dataBraqueurImage, setdataBraqueurImage] = useState([])

  
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/braqueur/'+id)
      .then(res => setdataBraqueurs(res.data.data.braqueur))
      .catch(error => console.log(error))
    }, [])
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/braqueur/'+id)
      .then(res => setdataBraqueurImage(res.data.data.braqueurImage))
      .catch(error => console.log(error))
    }, [])

console.log(id);


  return(
    <div>
        <section>
            <div>
                <h1>{dataBraqueurs.prenomBraqueur} {dataBraqueurs.nomBraqueur}</h1>
                <img src={`http://127.0.0.1:8000${dataBraqueurImage.imageBraqueur}`} alt=""/>
            </div>
        </section>
    </div>
  )

}