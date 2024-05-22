import axios from "axios"
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Mynavbar from "./Navbar";

export default function CreateBraqueur() { 
  

    const [pays, setPays] = useState([])
    const [equipes, setEquipes] = useState([])
    const [roles, setRoles] = useState([])

let navigate = useNavigate();

    useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api')
    .then(res => setPays(res.data.data.pays))
    .catch(error => console.log(error))
    }, [])
    useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api')
    .then(res => setEquipes(res.data.data.equipes))
    .catch(error => console.log(error))
    }, [])
    useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api')
    .then(res => setRoles(res.data.data.roles))
    .catch(error => console.log(error))
    }, [])


    const [formBraqueur, setFormBraqueur] = useState({
      'nomBraqueur': "",
      'prenomBraqueur': "",
      'age': 0,
      'telephone': "",
      'email': "",
      'genre': "",
      'quote': "",
      'charisme': 0,
      'communication': 0,
      'force': 0,
      'discretion': 0,
      'agilite': 0,
      'intelligence': 0,
      'intimidation': 0,
      'hacking': 0,
      'imageBraqueur': null,
      'pays': 0,
      'equipe': 0,
      'role': 0,
    })

  
    const createBraqueur = async(e)=>{
      e.preventDefault()
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/braqueur/create", formBraqueur, {
          'headers' : {
            "Content-Type": "multipart/form-data"
          }
        })
        console.log(response.data);
        return navigate("/braqueurs");
      } catch (error) {
        console.log(error)
      }
    }

    
    const handleChange = (e) => {
      const { name, value, type, files } = e.target;
      setFormBraqueur({ ...formBraqueur, [name]: type == 'file' ? files[0] : value });
  };
    
  
      return(
          <div className="braqueurs">
          <Mynavbar />
          <section className="braqueursSection">
          <h2>Ajouter un braqueur : </h2>
          <div className="login-box">
            <form onSubmit={createBraqueur} className="vraiForm">
                <div className="user-box">
                <input type="text" name="nomBraqueur" placeholder="Nom" value={formBraqueur.nomBraqueur} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="user-box">
                <input type="text" name="prenomBraqueur" placeholder="Prénom" value={formBraqueur.prenomBraqueur} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="user-box">
                <input type="number" name="age" placeholder="Age"  onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="user-box">
                <input type="text" name="telephone" placeholder="Telephone" value={formBraqueur.telephone} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="user-box">
                <input type="email" name="email" placeholder="Email" value={formBraqueur.email} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="user-box">
                <input type="text" name="genre" placeholder="Genre" value={formBraqueur.genre} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="user-box">
                <textarea name="quote"  placeholder="Quote" value={formBraqueur.quote} onChange={(e)=>handleChange(e)} required id="quote"></textarea>
                </div>
                <div className="user-box">
                <input type="number" name="charisme" placeholder="Charisme"  onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="user-box">
                <input type="number" name="communication" placeholder="Communication"  onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="user-box">
                <input type="number" name="force" placeholder="Force"  onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="user-box">
                <input type="number" name="discretion" placeholder="Discretion"  onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="user-box">
                <input type="number" name="agilite" placeholder="Agilite"  onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="user-box">
                <input type="number" name="intelligence" placeholder="Intelligence"  onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="user-box">
                <input type="number" name="intimidation" placeholder="Intimidation"  onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="user-box">
                <input type="number" name="hacking" placeholder="Hacking"  onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="user-box">
                <select onChange={(e) => setFormBraqueur({...formBraqueur, 'pays': parseInt(e.target.value)})} name="pays">
                        <option value={0}>Select un pays</option>
                        {pays ? pays.map(pays => (
                        <option key={pays.id} value={parseInt(pays.id)}>{pays.nomPays}</option>
                        )) : null}
                  </select>
                </div>
                <div className="user-box">
                <select onChange={(e) => setFormBraqueur({...formBraqueur, 'equipe': parseInt(e.target.value)})} name="equipe">
                        <option value={0}>Select une équipe</option>
                        {equipes ? equipes.map(equipe => (
                        <option key={equipe.id} value={parseInt(equipe.id)}>{equipe.nomEquipe}</option>
                        )) : null}
                  </select>
                </div>
                <div className="user-box">
                <select onChange={(e) => setFormBraqueur({...formBraqueur, 'role': parseInt(e.target.value)})} name="role">
                        <option value={0}>Select un role</option>
                        {roles ? roles.map(role => (
                        <option key={role.id} value={parseInt(role.id)}>{role.nomRole}</option>
                        )) : null}
                  </select>
                </div>
                <div className="user-box">
                <input type="file" name="imageBraqueur" className="urlInput" onChange={(e)=>handleChange(e)} required/>
                </div>
                <Link to={"/braqueurs"}><button>Retourner à la page des braqueurs</button></Link>
                <button type='submit' className='btnSave'>Ajouter</button>
            </form>
          </div>
          </section>
          </div>
      )
  }