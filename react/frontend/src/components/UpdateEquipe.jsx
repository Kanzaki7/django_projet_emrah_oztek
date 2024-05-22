import axios from "axios"
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom";
import Mynavbar from "./Navbar";

export default function UpdateEquipe() { 
    
    let  { id }  = useParams()
    let navigate = useNavigate();
  
  const [equipe, setEquipe] = useState([])
  const [pays, setPays] = useState([])
  const [continents, setContinents] = useState([])
  
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/equipe/'+id)
    .then(res => setEquipe(res.data.data.equipe))
    .catch(error => console.log(error) )
  }, [])
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api')
    .then(res => setPays(res.data.data.pays))
    .catch(error => console.log(error))
    }, [])
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api')
    .then(res => setContinents(res.data.data.continents))
    .catch(error => console.log(error))
    }, [])


    const [formEquipe, setFormEquipe] = useState({
        'nomEquipe': "",
        'pays': 0,
        'continent': 0,
        'imageEquipe': 0,
      })
  
      
// console.log(formData);

function handleChange(e) {
    const {name, value, type, files} = e.target;
    setFormEquipe({...formEquipe, [name]: type == 'file' ? files[0] : value});
}


const updateEquipe = async (e) => {
    e.preventDefault();
    const formEquipeToSend = new FormData();
    formEquipeToSend.append('nomEquipe', formEquipe.nomEquipe);
    formEquipeToSend.append('pays', formEquipe.pays);
    formEquipeToSend.append('continent', formEquipe.continent);
    formEquipeToSend.append('imageEquipe', formEquipe.imageEquipe);


    try {
        await axios.put(`http://127.0.0.1:8000/api/equipe/update/${id}`, formEquipeToSend, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(res => console.log(res))
        console.log('Equipe updated successfully');
        return navigate("/equipes");
    } catch (error) {
        console.error('Error updating product:', error);
    }
};



return (
    <div className="braqueurs">
    <Mynavbar />
    <section className="braqueursSection">
    <h2>Editer l'équipe {equipe.nomEquipe} : </h2>
    <div className="login-box">
      <form onSubmit={updateEquipe} className="vraiForm">
          <div className="user-box">
          <input type="text" name="nomEquipe" placeholder={equipe.nomEquipe} value={formEquipe.nomEquipe} onChange={(e)=>handleChange(e)} required/>
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
                  {continents ? continents.map(continent => (
                  <option key={continent.id} value={parseInt(continent.id)}>{continent.nomContinent}</option>
                  )) : null}
            </select>
          </div>
          <div className="user-box">
          <input type="file" name="imageEquipe" placeholder={equipe.imageEquipe} className="urlInput" onChange={(e)=>handleChange(e)} required/>
          </div>
          <Link to={"/equipes"}><button>Retourner à la page des équipes</button></Link>
          <button type='submit' className='btnSave'>Editer</button>
      </form>
    </div>
    </section>
    </div>
);
}