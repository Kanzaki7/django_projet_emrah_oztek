import axios from "axios"
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Braqueurs() { 

    const [dataBraqueurs, setdataBraqueurs] = useState([])
    const [dataBraqueurImage, setdataBraqueurImage] = useState([])


  
    
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/braqueurs')
        .then(res => setdataBraqueurs(res.data.data.braqueurs))
        .catch(error => console.log(error))
      }, [])
    useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/braqueurs')
    .then(res => setdataBraqueurImage(res.data.data.braqueursImages))
    .catch(error => console.log(error))
    }, [])



  return(
    <div>
        <section>
            <h1>Braqueurs :</h1>
            {dataBraqueurs ? dataBraqueurs.map((braqueur)=>(
                <div key={braqueur.id}>
                    <Link to={"/braqueur/"+braqueur.id}>
                        <h3>{braqueur.prenomBraqueur} {braqueur.nomBraqueur}</h3>
                    </Link>
                    {dataBraqueurImage ? dataBraqueurImage.map((braqueurImage)=>(
                        braqueurImage.braqueur === braqueur.id &&
                        <img key={braqueurImage.id} src={`http://127.0.0.1:8000${braqueurImage.imageBraqueur}`} alt="" />
                    )) : ""}
                </div>
            )) : ""}
        </section>
    </div>
  )

}