import axios from "axios"
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynavbar from "./Navbar";


export default function Home() { 

    const [dataEquipes, setdataEquipes] = useState([])
    const [dataBraqueurs, setdataBraqueurs] = useState([])
    const [dataRoles, setdataRoles] = useState([])
    const [dataPays, setdataPays] = useState([])

  
    
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api')
      .then(res => setdataEquipes(res.data.data.equipes))
      .catch(error => console.log(error))
    }, [])
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api')
      .then(res => setdataBraqueurs(res.data.data.braqueurs))
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
    <div className="braqueursHome">
    <Mynavbar />
        <section className="braqueursSection">
            <h1>Equipes(effectif complet) :</h1>
            <div className="braqueursMap">
                {equipesFull ? equipesFull.map((equipe)=>(
                  <div key={equipe.id} className="cardEquipe">
                      <Link to={"/equipes/"+equipe.id}>
                          <h3 className="name">{equipe.nomEquipe}</h3>
                      </Link>
                      <img src={`http://127.0.0.1:8000${equipe.imageEquipe}`} alt="" width={370} height={400}/>
                  </div>
              )) : ""}
            </div>
        </section>
        <section className="braqueursSection">
            <h1>Equipes(effectif non-complet) :</h1>
            <div className="braqueursMap">
                {equipesRandom ? equipesRandom.slice(0, 2).map((equipe)=>(
                  <div key={equipe.id} className="cardEquipe">
                      <Link to={"/equipes/"+equipe.id}>
                          <h3 className="name">{equipe.nomEquipe}</h3>
                      </Link>
                      <img src={`http://127.0.0.1:8000${equipe.imageEquipe}`} alt="" width={370} height={400}/>
                  </div>
              )) : ""}
            </div>
        </section>
        <section className="braqueursSection">
            <h1>Braqueurs sans équipe :</h1>
            <div className="braqueursMap">
                {braqueursRandomNon ? braqueursRandomNon.slice(0, 4).map((braqueur)=>(
                  <div key={braqueur.id} className="fut-player-card">
                    <div className="player-card-top">
                      <div className="player-master-info">
                        <div className="player-nation">
                        {dataPays ? dataPays.map((pays)=>(
                          braqueur.pays === pays.id &&
                          <img key={pays.id} src={pays.imagePays} alt="" draggable="false"/>
                        )):null}
                        </div>
                        <div className="player-club">
                        {dataEquipes ? dataEquipes.map((equipe)=>(
                          braqueur.equipe === equipe.id &&
                          <img key={equipe.id} className="equipeBraqueur"src={`http://127.0.0.1:8000${equipe.imageEquipe}`} alt="" draggable="false"/>
                        )):null}
                        </div>
                      </div>
                      <div className="player-picture">
                        <img src={`http://127.0.0.1:8000${braqueur.imageBraqueur}`} alt="" draggable="false"/>
                        <div className="player-extra">
                        {dataRoles ? dataRoles.map((role)=>(
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
                  </div>
              )) : ""}
            </div>
        </section>
        <section className="braqueursSection">
            <h1>Braqueurs avec équipe :</h1>
            <div className="braqueursMap">
                {braqueursRandomEq ? braqueursRandomEq.slice(0, 4).map((braqueur)=>(
                  <div key={braqueur.id} className="fut-player-card">
                    <div className="player-card-top">
                      <div className="player-master-info">
                        <div className="player-nation">
                        {dataPays ? dataPays.map((pays)=>(
                          braqueur.pays === pays.id &&
                          <img key={pays.id} src={pays.imagePays} alt="" draggable="false"/>
                        )):null}
                        </div>
                        <div className="player-club">
                        {dataEquipes ? dataEquipes.map((equipe)=>(
                          braqueur.equipe === equipe.id &&
                          <img key={equipe.id} className="equipeBraqueur"src={`http://127.0.0.1:8000${equipe.imageEquipe}`} alt="" draggable="false"/>
                        )):null}
                        </div>
                      </div>
                      <div className="player-picture">
                        <img src={`http://127.0.0.1:8000${braqueur.imageBraqueur}`} alt="" draggable="false"/>
                        <div className="player-extra">
                        {dataRoles ? dataRoles.map((role)=>(
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
                  </div>
              )) : ""}
            </div>
        </section>
        <section className="braqueursSection">
            <h1>Equipes d'Europe :</h1>
            <div className="braqueursMap">
                {equipesEurope ? equipesEurope.map((equipe)=>(
                  <div key={equipe.id} className="cardEquipe">
                      <Link to={"/equipes/"+equipe.id}>
                          <h3 className="name">{equipe.nomEquipe}</h3>
                      </Link>
                      <img src={`http://127.0.0.1:8000${equipe.imageEquipe}`} alt="" width={370} height={400}/>
                  </div>
              )) : ""}
            </div>
        </section>
        <section className="braqueursSection">
            <h1>Equipes hors d'Europe :</h1>
            <div className="braqueursMap">
                {equipesNonEurope ? equipesNonEurope.map((equipe)=>(
                  <div key={equipe.id} className="cardEquipe">
                      <Link to={"/equipes/"+equipe.id}>
                          <h3 className="name">{equipe.nomEquipe}</h3>
                      </Link>
                      <img src={`http://127.0.0.1:8000${equipe.imageEquipe}`} alt="" width={370} height={400}/>
                  </div>
              )) : ""}
            </div>
        </section>
        <section className="braqueursSection">
            <h1>Braqueuses :</h1>
            <div className="braqueursMap">
                {braqueusesR ? braqueusesR.slice(0, 5).map((braqueur)=>(
                  <div key={braqueur.id} className="fut-player-card">
                    <div className="player-card-top">
                      <div className="player-master-info">
                        <div className="player-nation">
                        {dataPays ? dataPays.map((pays)=>(
                          braqueur.pays === pays.id &&
                          <img key={pays.id} src={pays.imagePays} alt="" draggable="false"/>
                        )):null}
                        </div>
                        <div className="player-club">
                        {dataEquipes ? dataEquipes.map((equipe)=>(
                          braqueur.equipe === equipe.id &&
                          <img key={equipe.id} className="equipeBraqueur"src={`http://127.0.0.1:8000${equipe.imageEquipe}`} alt="" draggable="false"/>
                        )):null}
                        </div>
                      </div>
                      <div className="player-picture">
                        <img src={`http://127.0.0.1:8000${braqueur.imageBraqueur}`} alt="" draggable="false"/>
                        <div className="player-extra">
                        {dataRoles ? dataRoles.map((role)=>(
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
                  </div>
              )) : ""}
            </div>
        </section>
        <section className="braqueursSection">
            <h1>Braqueurs :</h1>
            <div className="braqueursMap">
                {braqueursR ? braqueursR.slice(0, 5).map((braqueur)=>(
                  <div key={braqueur.id} className="fut-player-card">
                    <div className="player-card-top">
                      <div className="player-master-info">
                        <div className="player-nation">
                        {dataPays ? dataPays.map((pays)=>(
                          braqueur.pays === pays.id &&
                          <img key={pays.id} src={pays.imagePays} alt="" draggable="false"/>
                        )):null}
                        </div>
                        <div className="player-club">
                        {dataEquipes ? dataEquipes.map((equipe)=>(
                          braqueur.equipe === equipe.id &&
                          <img key={equipe.id} className="equipeBraqueur"src={`http://127.0.0.1:8000${equipe.imageEquipe}`} alt="" draggable="false"/>
                        )):null}
                        </div>
                      </div>
                      <div className="player-picture">
                        <img src={`http://127.0.0.1:8000${braqueur.imageBraqueur}`} alt="" draggable="false"/>
                        <div className="player-extra">
                        {dataRoles ? dataRoles.map((role)=>(
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
                  </div>
              )) : ""}
            </div>
        </section>
    </div>
  )

}