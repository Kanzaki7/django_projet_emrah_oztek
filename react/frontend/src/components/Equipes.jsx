import axios from "axios"
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Equipes() { 

    const [dataEquipes, setdataEquipes] = useState([])
    const [dataEquipesImages, setdataEquipesImages] = useState([])

  
    
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/equipes')
      .then(res => setdataEquipes(res.data.data.equipes))
      .catch(error => console.log(error))
    }, [])
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/equipes')
      .then(res => setdataEquipesImages(res.data.data.equipesImages))
      .catch(error => console.log(error))
    }, [])



  return(
    <div>
        <section>
            <h1>Equipes :</h1>
            {dataEquipes ? dataEquipes.map((equipe)=>(
                <div key={equipe.id}>
                    <Link to={"/equipes/"+equipe.id}>
                        <h3>{equipe.nomEquipe}</h3>
                    </Link>
                    {dataEquipesImages ? dataEquipesImages.map((equipeImage)=>(
                        equipeImage.equipe === equipe.id &&
                        <img key={equipeImage.id} src={`http://127.0.0.1:8000${equipeImage.imageEquipe}`} alt="" />
                    )) : ""}
                </div>
            )) : ""}
        </section>
    </div>
  )

}