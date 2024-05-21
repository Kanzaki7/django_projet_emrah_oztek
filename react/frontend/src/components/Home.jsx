import axios from "axios"
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() { 

    const [dataEquipes, setdataEquipes] = useState([])
    const [dataEquipesImages, setdataEquipesImages] = useState([])
    const [dataBraqueurs, setdataBraqueurs] = useState([])
    const [dataBraqueursImages, setdataBraqueursImages] = useState([])
    const [dataRoles, setdataRoles] = useState([])

  
    
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api')
      .then(res => setdataEquipes(res.data.data.equipes))
      .catch(error => console.log(error))
    }, [])
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api')
      .then(res => setdataEquipesImages(res.data.data.equipesImages))
      .catch(error => console.log(error))
    }, [])
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api')
      .then(res => setdataBraqueurs(res.data.data.braqueurs))
      .catch(error => console.log(error))
    }, [])
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api')
      .then(res => setdataBraqueursImages(res.data.data.braqueursImages))
      .catch(error => console.log(error))
    }, [])
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api')
      .then(res => setdataRoles(res.data.data.roles))
      .catch(error => console.log(error))
    }, [])
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api')
      .then(res => setdataPays(res.data.data.pays))
      .catch(error => console.log(error))
    }, [])
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api')
      .then(res => setdataContinents(res.data.data.continents))
      .catch(error => console.log(error))
    }, [])

    const equipesFull = dataEquipes.filter(data => data.numberEquipe == 12)
    const equipesNon = dataEquipes.filter(data => data.numberEquipe < 12)
    const equipesRandom = equipesNon.sort(() => 0.5 - Math.random());
    const braqueursNon = dataBraqueurs.filter(data => data.equipe == null)
    const braqueursEq = dataBraqueurs.filter(data => data.equipe !== null)
    const braqueuses = braqueursEq.filter(data => data.genre == "F")
    const braqueusesR = braqueuses.sort(() => 0.5 - Math.random());
    const braqueurs = braqueursEq.filter(data => data.genre == "M")
    const braqueursR = braqueurs.sort(() => 0.5 - Math.random());
    const braqueursRandomNon = braqueursNon.sort(() => 0.5 - Math.random());
    const braqueursRandomEq = braqueursEq.sort(() => 0.5 - Math.random());
    const equipesEurope = dataEquipes.filter(data => data.continent == 5)
    const equipesNonEurope = dataEquipes.filter(data => data.continent !== 5)


  return(
    <div>
        <section>
            <h1>Equipes remplies :</h1>
            {equipesFull ? equipesFull.map((equipe)=>(
                <div key={equipe.id}>
                    <h3>{equipe.nomEquipe}</h3>
                    {dataEquipesImages ? dataEquipesImages.map((equipeImage)=>(
                        equipeImage.equipe === equipe.id &&
                        <img key={equipeImage.id} src={`http://127.0.0.1:8000${equipeImage.imageEquipe}`} alt="" />
                    )) : ""}
                </div>
            )) : ""}
        </section>
        <section>
            <h1>Equipes non-remplies :</h1>
            {equipesRandom ? equipesRandom.slice(0, 2).map((equipe)=>(
                <div key={equipe.id}>
                    <h3>{equipe.nomEquipe}</h3>
                    {dataEquipesImages ? dataEquipesImages.map((equipeImage)=>(
                        equipeImage.equipe === equipe.id &&
                        <img key={equipeImage.id} src={`http://127.0.0.1:8000${equipeImage.imageEquipe}`} alt="" />
                    )) : ""}
                </div>
            )) : ""}
        </section>
        <section>
            <h1>Mercenaires sans équipe :</h1>
            {braqueursRandomNon ? braqueursRandomNon.slice(0, 4).map((braqueur)=>(
                <div key={braqueur.id}>
                    <h3>{braqueur.prenomBraqueur} {braqueur.nomBraqueur}</h3>
                    {dataBraqueursImages ? dataBraqueursImages.map((braqueurImage)=>(
                        braqueurImage.braqueur === braqueur.id &&
                        <img key={braqueurImage.id} src={`http://127.0.0.1:8000${braqueurImage.imageBraqueur}`} alt="" width={300} height={300}/>
                    )) : ""}
                    {dataRoles ? dataRoles.map((role)=>(
                        braqueur.role === role.id &&
                        <h4 key={role.id}>Role : {role.nomRole}</h4>
                    )) : ""}
                </div>
            )) : ""}
        </section>
        <section>
            <h1>Mercenaires avec équipe :</h1>
            {braqueursRandomEq ? braqueursRandomEq.slice(0, 4).map((braqueur)=>(
                <div key={braqueur.id}>
                    <h3>{braqueur.prenomBraqueur} {braqueur.nomBraqueur}</h3>
                    {dataBraqueursImages ? dataBraqueursImages.map((braqueurImage)=>(
                        braqueurImage.braqueur === braqueur.id &&
                        <img key={braqueurImage.id} src={`http://127.0.0.1:8000${braqueurImage.imageBraqueur}`} alt="" width={300} height={300}/>
                    )) : ""}
                    {dataRoles ? dataRoles.map((role)=>(
                        braqueur.role === role.id &&
                        <h4 key={role.id}>Role : {role.nomRole}</h4>
                    )) : ""}
                    {dataEquipes ? dataEquipes.map((equipe)=>(
                        braqueur.equipe === equipe.id &&
                        <h4 key={equipe.id}>Equipe : {equipe.nomEquipe}</h4>
                    )) : ""}
                </div>
            )) : ""}
        </section>
        <section>
            <h1>Equipes d'Europe :</h1>
            {equipesEurope ? equipesEurope.map((equipe)=>(
                <div key={equipe.id}>
                <h3>{equipe.nomEquipe}</h3>
                    {dataEquipesImages ? dataEquipesImages.map((equipeImage)=>(
                        equipeImage.equipe === equipe.id &&
                        <img key={equipeImage.id} src={`http://127.0.0.1:8000${equipeImage.imageEquipe}`} alt="" />
                    )) : ""}
                </div>
            )) : ""}
        </section>
        <section>
            <h1>Equipes hors d'Europe :</h1>
            {equipesNonEurope ? equipesNonEurope.map((equipe)=>(
                <div key={equipe.id}>
                <h3>{equipe.nomEquipe}</h3>
                    {dataEquipesImages ? dataEquipesImages.map((equipeImage)=>(
                        equipeImage.equipe === equipe.id &&
                        <img key={equipeImage.id} src={`http://127.0.0.1:8000${equipeImage.imageEquipe}`} alt="" />
                    )) : ""}
                </div>
            )) : ""}
        </section>
        <section>
            <h1>Braqueses :</h1>
            {braqueusesR ? braqueusesR.slice(0, 5).map((braqueur)=>(
                <div key={braqueur.id}>
                    <h3>{braqueur.prenomBraqueur} {braqueur.nomBraqueur}</h3>
                    {dataBraqueursImages ? dataBraqueursImages.map((braqueurImage)=>(
                        braqueurImage.braqueur === braqueur.id &&
                        <img key={braqueurImage.id} src={`http://127.0.0.1:8000${braqueurImage.imageBraqueur}`} alt="" width={300} height={300}/>
                    )) : ""}
                    {dataRoles ? dataRoles.map((role)=>(
                        braqueur.role === role.id &&
                        <h4 key={role.id}>Role : {role.nomRole}</h4>
                    )) : ""}
                    {dataEquipes ? dataEquipes.map((equipe)=>(
                        braqueur.equipe === equipe.id &&
                        <h4 key={equipe.id}>Equipe : {equipe.nomEquipe}</h4>
                    )) : ""}
                </div>
            )) : ""}
        </section>
        <section>
            <h1>Braqueurs :</h1>
            {braqueursR ? braqueursR.slice(0, 5).map((braqueur)=>(
                <div key={braqueur.id}>
                    <h3>{braqueur.prenomBraqueur} {braqueur.nomBraqueur}</h3>
                    {dataBraqueursImages ? dataBraqueursImages.map((braqueurImage)=>(
                        braqueurImage.braqueur === braqueur.id &&
                        <img key={braqueurImage.id} src={`http://127.0.0.1:8000${braqueurImage.imageBraqueur}`} alt="" width={300} height={300}/>
                    )) : ""}
                    {dataRoles ? dataRoles.map((role)=>(
                        braqueur.role === role.id &&
                        <h4 key={role.id}>Role : {role.nomRole}</h4>
                    )) : ""}
                    {dataEquipes ? dataEquipes.map((equipe)=>(
                        braqueur.equipe === equipe.id &&
                        <h4 key={equipe.id}>Equipe : {equipe.nomEquipe}</h4>
                    )) : ""}
                </div>
            )) : ""}
        </section>
    </div>
  )

}