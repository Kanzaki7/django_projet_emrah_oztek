import axios from "axios"
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Mynavbar from "./Navbar";

export default function CreateEquipe() { 
  

    const [pays, setPays] = useState([])
    const [continent, setContinent] = useState([])

let navigate = useNavigate();

    useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api')
    .then(res => setPays(res.data.data.pays))
    .catch(error => console.log(error))
    }, [])
    useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api')
    .then(res => setContinent(res.data.data.continents))
    .catch(error => console.log(error))
    }, [])


    const [formEquipe, setFormEquipe] = useState({
      'nomEquipe': "",
      'pays': 0,
      'continent': 0,
      'imageEquipe': null,
    })

    console.log(formEquipe);
  
    const createEquipe = async(e)=>{
      e.preventDefault()
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/equipe/create", formEquipe, {
          'headers' : {
            "Content-Type": "multipart/form-data"
          }
        });
        console.log(response.data);
        return navigate("/equipes");
      } catch (error) {
        console.log(error)
      }
    }

    
    const handleChange = (e) => {
      const { name, value, type, files } = e.target;
      setFormEquipe({ ...formEquipe, [name]: type == 'file' ? files[0] : value });
  };
    
  
      return(
          <div className="braqueurs">
            <Mynavbar />
            <section className="braqueursSection">
            <h2>Ajouter une équipe : </h2>
          <div className="login-box">
            <form onSubmit={createEquipe} className="vraiForm">
                <div className="user-box">
                <input type="text" name="nomEquipe" placeholder="Nom" value={formEquipe.nomEquipe} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="user-box">
                <select onChange={(e) => setFormEquipe({...formEquipe, 'pays': parseInt(e.target.value)})} name="pays">
                        <option value={0}>Select un pays</option>
                        {pays ? pays.map(pays => (
                        <option key={pays.id} value={parseInt(pays.id)}>{pays.nomPays}</option>
                        )) : null}
                  </select>
                </div>
                <div className="user-box">
                <select onChange={(e) => setFormEquipe({...formEquipe, 'continent': parseInt(e.target.value)})} name="continent">
                        <option value={0}>Select un continent</option>
                        {continent ? continent.map(continent => (
                        <option key={continent.id} value={parseInt(continent.id)}>{continent.nomContinent}</option>
                        )) : null}
                </select>
                </div>
                <div className="user-box">
                <input type="file" name="imageEquipe" className="urlInput" onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="btns-Card">
                  <Link to={"/equipes"}><button>Retourner à la page des équipes</button></Link>
                  <button type='submit' className='btnSave'>Ajouter</button>
                </div>
            </form>
          </div>
            </section>
          </div>
      )
  }