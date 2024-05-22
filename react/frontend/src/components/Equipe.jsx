import axios from "axios"
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynavbar from "./Navbar"
import Button from "react-bootstrap/esm/Button"


export default function Equipe() { 

    let  { id }  = useParams()

    const [dataEquipe, setdataEquipe] = useState([])
    const [dataBraqueurs, setdataBraqueurs] = useState([])
    const [equipes, setEquipes] = useState([])
    const [pays, setPays] = useState([])
    const [roles, setRoles] = useState([])
  
    
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/equipe/'+id)
      .then(res => setdataEquipe(res.data.data.equipe))
      .catch(error => console.log(error))
    }, [])
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/equipe/'+id)
      .then(res => setdataBraqueurs(res.data.data.braqueurs))
      .catch(error => console.log(error))
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

console.log(id);

  const destroy = async (id) => {
    await axios.delete('http://127.0.0.1:8000/api/braqueur/delete/'+id)
    setdataBraqueurs(dataBraqueurs.filter(item => item.id !== id))
  }

    const braqueursFilter = dataBraqueurs.filter(data => data.equipe == id)

  return(
    <div className="braqueursEquipe">
    <Mynavbar />
        <section className="braqueursSection">
            <h1>Braqueurs de {dataEquipe.nomEquipe}:</h1>
            <div className="braqueursMap">
              {braqueursFilter ? braqueursFilter.map((braqueur)=>(
                  <div key={braqueur.id} className="fut-player-card">
                    <div className="player-card-top">
                      <div className="player-master-info">
                        <div className="player-nation">
                        {pays ? pays.map((pays)=>(
                          braqueur.pays === pays.id &&
                          <img key={pays.id} src={pays.imagePays} alt="" draggable="false"/>
                        )):null}
                        </div>
                        <div className="player-club">
                        {equipes ? equipes.map((equipe)=>(
                          braqueur.equipe === equipe.id &&
                          <img key={equipe.id} className="equipeBraqueur"src={`http://127.0.0.1:8000${equipe.imageEquipe}`} alt="" draggable="false"/>
                        )):null}
                        </div>
                      </div>
                      <div className="player-picture">
                        <img src={`http://127.0.0.1:8000${braqueur.imageBraqueur}`} alt="" draggable="false"/>
                        <div className="player-extra">
                        {roles ? roles.map((role)=>(
                          braqueur.role === role.id &&
                          <span key={role.id}>{role.nomRole}</span>
                        )):null}
                        </div>
                      </div>
                    </div>
                    <div className="player-card-bottom">
                      <div className="player-info">
                        {/* Player Name */}
                        <div className="player-name">
                          <Link to={"/braqueur/"+braqueur.id}>
                            <span className="name">{braqueur.prenomBraqueur} {braqueur.nomBraqueur}</span>
                          </Link>
                        </div>
                        {/* Player Features */}
                        <div className="player-features">
                          <div className="player-features-col">
                            <span>
                              <div className="player-feature-value">{braqueur.charisme}</div>
                              <div className="player-feature-title">Char</div>
                            </span>
                            <span>
                              <div className="player-feature-value">{braqueur.charisme}</div>
                              <div className="player-feature-title">Comm</div>
                            </span>
                            <span>
                              <div className="player-feature-value">{braqueur.force}</div>
                              <div className="player-feature-title">For</div>
                            </span>
                            <span>
                              <div className="player-feature-value">{braqueur.discretion}</div>
                              <div className="player-feature-title">Dis</div>
                            </span>
                          </div>
                          <div className="player-features-col">
                            <span>
                              <div className="player-feature-value">{braqueur.agilite}</div>
                              <div className="player-feature-title">Agil</div>
                            </span>
                            <span>
                              <div className="player-feature-value">{braqueur.intelligence}</div>
                              <div className="player-feature-title">intel</div>
                            </span>
                            <span>
                              <div className="player-feature-value">{braqueur.intimidation}</div>
                              <div className="player-feature-title">INT</div>
                            </span>
                            <span>
                              <div className="player-feature-value">{braqueur.hacking}</div>
                              <div className="player-feature-title">HACK</div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btns-Card">
                      <div>
                        <Link to={"/update-braqueur/"+braqueur.id}>
                          <Button variant="success" className="btnCardGreen"> 
                              Editer
                          </Button>
                        </Link>
                        </div>
                        <div>
                          <Button variant="danger" onClick={() => destroy(braqueur.id)} className="btnCardRed">
                            Supprimer
                          </Button>
                        </div>
                    </div>
                  </div>
              )) : ""}
            </div>
        </section>
    </div>
  )

}