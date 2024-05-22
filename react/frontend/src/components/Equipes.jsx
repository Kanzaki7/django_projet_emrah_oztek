import axios from "axios"
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Mynavbar from "./Navbar";


export default function Equipes() { 

    const [dataEquipes, setdataEquipes] = useState([])

  
    
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/equipes')
      .then(res => setdataEquipes(res.data.data.equipes))
      .catch(error => console.log(error))
    }, [])

    const destroy = async (id) => {
      await axios.delete('http://127.0.0.1:8000/api/equipe/delete/'+id)
      setdataEquipes(dataEquipes.filter(item => item.id !== id))
    }



  return(
    <div className="braqueurs">
    <Mynavbar />
        <section className="braqueursSection">
          <Link to={"/create-equipe/"}>
              <Button variant="warning">
                  Créer équipe
              </Button>
          </Link>
            <h1>Equipes :</h1>
            <div className="braqueursMap">
              {dataEquipes ? dataEquipes.map((equipe)=>(
                  <div key={equipe.id} className="cardEquipe">
                      <Link to={"/equipes/"+equipe.id}>
                          <h3 className="name">{equipe.nomEquipe}</h3>
                      </Link>
                      <img src={`http://127.0.0.1:8000${equipe.imageEquipe}`} alt="" width={370} height={400}/>
                      <div className="btns-Card">
                        <div>
                          <Link to={"/update-equipe/"+equipe.id}>
                            <Button variant="success">
                                Editer
                            </Button>
                          </Link>
                          </div>
                          <div>
                            <Button variant="danger" onClick={() => destroy(equipe.id)}>
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