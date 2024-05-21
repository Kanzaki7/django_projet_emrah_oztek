import axios from "axios"
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function CreateEquipe() { 
  

    const [pays, setPays] = useState([])

let navigate = useNavigate();

    useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api')
    .then(res => setPays(res.data.data.pays))
    .catch(error => console.log(error))
    }, [])


    const [formEquipe, setFormEquipe] = useState({
      'nomEquipe': "",
      'pays': 0,
    })

    const [formImage, setFormImage] = useState({
        'imageEquipe': null,
    })
    console.log(formEquipe);
  
    const createEquipe = async(e)=>{
      e.preventDefault()
      try {
        await axios.post("http://127.0.0.1:8000/api/equipe/create", {
            equipe: formEquipe,
            image: formImage,
          }, {
          'headers' : {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => console.log(res))
        return navigate("/equipes");
      } catch (error) {
        console.log(error)
      }
    }

    
    function handleChange(e) {
        const {name, value, type, files} = e.target;
        if (name === "nomEquipe" || name === 'pays'){
            setFormEquipe({...formEquipe, [name]: type == 'file' ? files[0] : value});}
        else if (name === "imageEquipe"){
            setFormImage({...formImage, [name]: type == 'file' ? files[0] : value})
        }
    }
    
  
      return(
          <div className="App">
          <Link to={"/equipes"}><button>Retourner à la page des équipes</button></Link>
          <h2>Ajouter une équipe : </h2>
          <div className="form">
            <form onSubmit={createEquipe} className="vraiForm">
                <div className="divInput">
                <label htmlFor="nomEquipe">Nom :</label>
                <input type="text" name="nomEquipe" value={formEquipe.nomEquipe} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="pays">Pays :</label>
                <select onChange={(e) => setFormEquipe({...formEquipe, 'pays': parseInt(e.target.value)})} name="pays">
                        <option value={0}>Select category</option>
                        {pays ? pays.map(pays => (
                        <option key={pays.id} value={parseInt(pays.id)}>{pays.nomPays}</option>
                        )) : null}
                  </select>
                </div>
                <div className="divInputImg">
                <label htmlFor="imageEquipe">Image :</label>
                <input type="file" name="imageEquipe" className="urlInput" onChange={(e)=>handleChange(e)} required/>
                </div>
                <button type='submit' className='btnSave'>Ajouter</button>
            </form>
          </div>
          </div>
      )
  }