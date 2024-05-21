import axios from "axios"
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

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
      'pays': 0,
      'equipe': 0,
      'role': 0,
    })

    const [formImage, setFormImage] = useState({
        'imageBraqueur': null,
    })
    console.log(formBraqueur);
  
    const createBraqueur = async(e)=>{
      e.preventDefault()
      try {
        await axios.post("http://127.0.0.1:8000/api/braqueur/create", {
            braqueur: formBraqueur,
            image: formImage,
          }, {
          'headers' : {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => console.log(res))
        return navigate("/braqueurs");
      } catch (error) {
        console.log(error)
      }
    }

    
    function handleChange(e) {
        const {name, value, type, files} = e.target;
        if (name === "nomBraqueur" || name === 'prenomBraqueur' || name === 'age' || name === 'telephone' || name === 'email' || name === 'genre' || name === 'quote' || name === 'charisme' || name === 'communication' || name === 'force' || name === 'discretion' || name === 'agilite' || name === 'intelligence' || name === 'intimidation' || name === 'hacking' || name === 'pays' || name === 'equipe' || name === 'role'){
            setFormBraqueur({...formBraqueur, [name]: type == 'file' ? files[0] : value});}
        else if (name === "imageEquipe"){
            setFormImage({...formImage, [name]: type == 'file' ? files[0] : value})
        }
    }
    
  
      return(
          <div className="App">
          <Link to={"/equipes"}><button>Retourner à la page des équipes</button></Link>
          <h2>Ajouter une équipe : </h2>
          <div className="form">
            <form onSubmit={createBraqueur} className="vraiForm">
                <div className="divInput">
                <label htmlFor="nomBraqueur">Nom :</label>
                <input type="text" name="nomBraqueur" value={formBraqueur.nomBraqueur} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="prenomBraqueur">Prénom :</label>
                <input type="text" name="prenomBraqueur" value={formBraqueur.prenomBraqueur} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="age">Age :</label>
                <input type="number" name="age" value={formBraqueur.age} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="telephone">Telephone :</label>
                <input type="text" name="telephone" value={formBraqueur.telephone} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" value={formBraqueur.email} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="genre">Genre :</label>
                <input type="text" name="genre" value={formBraqueur.genre} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="quote">Quote :</label>
                <input type="text" name="quote" value={formBraqueur.quote} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="charisme">Charisme :</label>
                <input type="number" name="charisme" value={formBraqueur.charisme} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="communication">Communication :</label>
                <input type="number" name="communication" value={formBraqueur.communication} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="force">Force :</label>
                <input type="number" name="force" value={formBraqueur.force} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="discretion">Discretion :</label>
                <input type="number" name="discretion" value={formBraqueur.discretion} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="agilite">Agilite :</label>
                <input type="number" name="agilite" value={formBraqueur.agilite} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="intelligence">Intelligence :</label>
                <input type="number" name="intelligence" value={formBraqueur.intelligence} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="intimidation">Intimidation :</label>
                <input type="number" name="intimidation" value={formBraqueur.intimidation} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="discretion">Discretion :</label>
                <input type="number" name="discretion" value={formBraqueur.discretion} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="hacking">
                <label htmlFor="hacking">Hacking :</label>
                <input type="number" name="hacking" value={formBraqueur.discretion} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="pays">Pays :</label>
                <select onChange={(e) => setFormBraqueur({...formBraqueur, 'pays': parseInt(e.target.value)})} name="pays">
                        <option value={0}>Select category</option>
                        {pays ? pays.map(pays => (
                        <option key={pays.id} value={parseInt(pays.id)}>{pays.nomPays}</option>
                        )) : null}
                  </select>
                </div>
                <div className="divInput">
                <label htmlFor="equipe">Equipe :</label>
                <select onChange={(e) => setFormBraqueur({...formBraqueur, 'equipe': parseInt(e.target.value)})} name="equipe">
                        <option value={0}>Select category</option>
                        {equipes ? equipes.map(equipe => (
                        <option key={equipe.id} value={parseInt(equipe.id)}>{equipe.nomEquipe}</option>
                        )) : null}
                  </select>
                </div>
                <div className="divInput">
                <label htmlFor="role">Role :</label>
                <select onChange={(e) => setFormBraqueur({...formBraqueur, 'pays': parseInt(e.target.value)})} name="pays">
                        <option value={0}>Select category</option>
                        {roles ? roles.map(role => (
                        <option key={role.id} value={parseInt(role.id)}>{role.nomRole}</option>
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