import axios from "axios"
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom";
import Mynavbar from "./Navbar";

export default function UpdateBraqueur() { 
    
    let  { id }  = useParams()
    let navigate = useNavigate();
  
  const [braqueur, setBraqueur] = useState([])
  const [equipes, setEquipes] = useState([])
  const [pays, setPays] = useState([])
  const [roles, setRoles] = useState([])
  
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/braqueur/'+id)
    .then(res => setBraqueur(res.data.data.braqueur))
    .catch(error => console.log(error) )
  }, [])
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api')
    .then(res => setEquipes(res.data.data.equipes))
    .catch(error => console.log(error))
    }, [])
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api')
    .then(res => setPays(res.data.data.pays))
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
  
      
// console.log(formData);

function handleChange(e) {
    const {name, value, type, files} = e.target;
    setFormBraqueur({...formBraqueur, [name]: type == 'file' ? files[0] : value});
}


const updateBraqueur = async (e) => {
    e.preventDefault();
    const formBraqueurToSend = new FormData();
    formBraqueurToSend.append('nomBraqueur', formBraqueur.nomBraqueur);
    formBraqueurToSend.append('prenomBraqueur', formBraqueur.prenomBraqueur);
    formBraqueurToSend.append('age', formBraqueur.age);
    formBraqueurToSend.append('telephone', formBraqueur.telephone);
    formBraqueurToSend.append('email', formBraqueur.email);
    formBraqueurToSend.append('genre', formBraqueur.genre);
    formBraqueurToSend.append('quote', formBraqueur.quote);
    formBraqueurToSend.append('charisme', formBraqueur.charisme);
    formBraqueurToSend.append('communication', formBraqueur.communication);
    formBraqueurToSend.append('force', formBraqueur.force);
    formBraqueurToSend.append('discretion', formBraqueur.discretion);
    formBraqueurToSend.append('agilite', formBraqueur.agilite);
    formBraqueurToSend.append('intelligence', formBraqueur.intelligence);
    formBraqueurToSend.append('intimidation', formBraqueur.intimidation);
    formBraqueurToSend.append('hacking', formBraqueur.hacking);
    formBraqueurToSend.append('imageBraqueur', formBraqueur.imageBraqueur);
    formBraqueurToSend.append('pays', formBraqueur.pays);
    formBraqueurToSend.append('equipe', formBraqueur.equipe);
    formBraqueurToSend.append('role', formBraqueur.role);



    try {
        await axios.put(`http://127.0.0.1:8000/api/braqueur/update/${id}`, formBraqueurToSend, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(res => console.log(res))
        console.log('Equipe updated successfully');
        return navigate("/braqueurs");
    } catch (error) {
        console.error('Error updating product:', error);
    }
};



return (
    <div className="braqueurs">
    <Mynavbar />
    <section className="braqueursSection">
    <h2>Editer le braqueur {braqueur.prenomBraqueur} {braqueur.nomBraqueur} : </h2>
    <div className="login-box">
      <form onSubmit={updateBraqueur} className="vraiForm">
          <div className="user-box">
          <input type="text" name="nomBraqueur" placeholder="Nom" value={formBraqueur.nomBraqueur} onChange={(e)=>handleChange(e)} required/>
          </div>
          <div className="user-box">
          <input type="text" name="prenomBraqueur" placeholder="Prénom" value={formBraqueur.prenomBraqueur} onChange={(e)=>handleChange(e)} required/>
          </div>
          <div className="user-box">
          <input type="number" name="age" placeholder="Age" onChange={(e)=>handleChange(e)} required/>
          </div>
          <div className="user-box">
          <input type="text" name="telephone" placeholder="Telephone" value={formBraqueur.telephone} onChange={(e)=>handleChange(e)} required/>
          </div>
          <div className="user-box">
          <input type="email" name="email"  placeholder="Email" value={formBraqueur.email} onChange={(e)=>handleChange(e)} required/>
          </div>
          <div className="user-box">
          <input type="text" name="genre" placeholder="Genre" value={formBraqueur.genre} onChange={(e)=>handleChange(e)} required/>
          </div>
          <div className="user-box">
          <textarea name="quote"  placeholder="Quote" value={formBraqueur.quote} onChange={(e)=>handleChange(e)} required id="quote"></textarea>
          </div>
          <div className="user-box">
          <input type="number" name="charisme" placeholder="Charisme" onChange={(e)=>handleChange(e)} required/>
          </div>
          <div className="user-box">
          <input type="number" name="communication" placeholder="Communication" onChange={(e)=>handleChange(e)} required/>
          </div>
          <div className="user-box">
          <input type="number" name="force" placeholder="Force" onChange={(e)=>handleChange(e)} required/>
          </div>
          <div className="user-box">
          <input type="number" name="discretion" placeholder="Discretion" onChange={(e)=>handleChange(e)} required/>
          </div>
          <div className="user-box">
          <input type="number" name="agilite" placeholder="Agilite" onChange={(e)=>handleChange(e)} required/>
          </div>
          <div className="user-box">
          <input type="number" name="intelligence" placeholder="Intelligence" onChange={(e)=>handleChange(e)} required/>
          </div>
          <div className="user-box">
          <input type="number" name="intimidation" placeholder="Intimidation" onChange={(e)=>handleChange(e)} required/>
          </div>
          <div className="user-box">
          <input type="number" name="hacking" placeholder="Hacking" onChange={(e)=>handleChange(e)} required/>
          </div>
          <div className="user-box">
          <select onChange={(e) => setFormBraqueur({...formBraqueur, 'pays': parseInt(e.target.value)})} name="pays">
                  <option value={0}>Select un pays</option>
                  {pays ? pays.map(pays => (
                  <option key={pays.id} value={parseInt(pays.id)}>{pays.nomPays}</option>
                  )) : null}
            </select>
          </div>
          <div className="divInput">
          <select onChange={(e) => setFormBraqueur({...formBraqueur, 'equipe': parseInt(e.target.value)})} name="equipe">
                  <option value={0}>Select une equipe</option>
                  {equipes ? equipes.map(equipe => (
                  <option key={equipe.id} value={parseInt(equipe.id)}>{equipe.nomEquipe}</option>
                  )) : null}
            </select>
          </div>
          <div className="divInput">
          <select onChange={(e) => setFormBraqueur({...formBraqueur, 'role': parseInt(e.target.value)})} name="role">
                  <option value={0}>Select un role</option>
                  {roles ? roles.map(role => (
                  <option key={role.id} value={parseInt(role.id)}>{role.nomRole}</option>
                  )) : null}
            </select>
          </div>
          <div className="divInputImg">
          <input type="file" name="imageBraqueur" className="urlInput" onChange={(e)=>handleChange(e)} required/>
          </div>
          <Link to={"/braqueurs"}><button>Retourner à la page des braqueurs</button></Link>
          <button type='submit' className='btnSave'>Editer</button>
      </form>
    </div>
    </section>
    </div>
);
}