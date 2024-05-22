import axios from "axios"
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynavbar from "./Navbar"
import ProgressBar from 'react-bootstrap/ProgressBar';


export default function Braqueur() { 

    let  { id }  = useParams()

    const [dataBraqueurs, setdataBraqueurs] = useState([])
    const [pays, setPays] = useState([])
    const [equipes, setEquipes] = useState([])
    const [roles, setRoles] = useState([])

  
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/braqueur/'+id)
      .then(res => setdataBraqueurs(res.data.data.braqueur))
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


  return(
    <div className="braqueurInfo">
    <Mynavbar />
          {/* <Link to={"/braqueurs"}><button>Retourner à la page braqueurs</button></Link> */}
          <h1>{dataBraqueurs.prenomBraqueur} {dataBraqueurs.nomBraqueur}</h1>
          {roles ? roles.map((role)=>(
              dataBraqueurs.role === role.id &&
                <div key={role.id}><h3>{role.nomRole}</h3></div>
          )):null}
            <div className="carDetail">
                <div className="carImg">
                  <img className="imgDetail" src={`http://127.0.0.1:8000${dataBraqueurs.imageBraqueur}`} alt=""/>
                </div>
                <div className="infoCar">
                    <div><span className="gras">Nom :</span> {dataBraqueurs.nomBraqueur}</div>
                    <div><span className="gras">Prénom:</span> {dataBraqueurs.prenomBraqueur}</div>
                    <div><span className="gras">Age :</span> {dataBraqueurs.age}</div>
                    <div><span className="gras">Telephone :</span> {dataBraqueurs.telephone}</div>
                    <div><span className="gras">Email :</span> {dataBraqueurs.email}</div>
                    <div><span className="gras">Genre :</span> {dataBraqueurs.genre}</div>
                    {pays ? pays.map((pays)=>(
                      dataBraqueurs.pays === pays.id &&
                        <div key={pays.id}><span className="gras">Nationalité :</span>  <img src={pays.imagePays} alt="" width={55} height={30}/></div>
                    )):null}
                    {equipes ? equipes.map((equipe)=>(
                      dataBraqueurs.equipe === equipe.id &&
                        <div key={equipe.id}><span className="gras">Equipe :</span>  <img src={`http://127.0.0.1:8000${equipe.imageEquipe}`} alt="" width={70} height={80}/></div>
                    )):null}
                    <div className="cinzel"><span className="gras"></span> "{dataBraqueurs.quote}"</div>
                </div>
                <div>
                  <span>Charisme</span>
                  <ProgressBar variant="warning" now={dataBraqueurs.charisme} />
                  <span>Communication</span>
                  <ProgressBar variant="warning" now={dataBraqueurs.communication} />
                  <span>Force</span>
                  <ProgressBar variant="warning" now={dataBraqueurs.force} />
                  <span>Discretion</span>
                  <ProgressBar variant="warning" now={dataBraqueurs.discretion} />
                  <span>Agilité</span>
                  <ProgressBar variant="warning" now={dataBraqueurs.agilite} />
                  <span>Intelligence</span>
                  <ProgressBar variant="warning" now={dataBraqueurs.intelligence} />
                  <span>Intimidation</span>
                  <ProgressBar variant="warning" now={dataBraqueurs.intimidation} />
                  <span>Hacking</span>
                  <ProgressBar variant="warning" now={dataBraqueurs.hacking} />
                </div>
            </div>
          </div>
  )

}

