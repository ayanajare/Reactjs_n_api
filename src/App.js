import React, {Component} from 'react'; 
import { Card, Message } from 'semantic-ui-react';
import './App.css';
import Recherche from './components/Recherche'; 
import Etablissement from './components/Etablissement';

class App extends Component{
  state = {
    data: [], 
    error : ''
  }

  onEmpty = ()=> {
    this.setState({data : [], error: ''})
  }

  onSearch= async(dpt, type) => {
    if(dpt && type){
      try{
        let response =await fetch(`https://etablissements-publics.api.gouv.fr/v3/departements/${dpt}/${type}`)
        let data = await response.json();
        this.setState({
          data: data.features, 
          error : ''
        })

      }
      catch(e){
        this.setState({error : "Erreur lors de la recherche"})
      }

    }
    else{
      this.setState({ error: "Merci de choisir un département et un établissement"})
    }
  }

  renderResults = () => {
    return this.state.data.map((etablissement)=> {
      return <Etablissement key = {etablissement.properties.id } properties = {etablissement.properties}/>
    })
  }
  render(){
    return (
      <div className="App">
        <h1>Annuaire des administrations en Pays de la Loire</h1>
        <Recherche onSearch={this.onSearch} onEmpty={this.onEmpty}/>
        {this.state.error ? <Message warning>{this.state.error}</Message> : undefined }


        {this.state.data ?  /*if state.data n'est pas vide  renvoyer les résultats dynamique */
        <Card.Group>
        {this.renderResults()}
        </Card.Group>
        : undefined   /*else ne renvoie rien  */};    
        {/* si il y a une erreur=> ? afficher la => component Message avec warning  */}
        {/*undefined =>pour dire que si il n'y a pas d'erreur n'afficher rien */}
        
        
      </div>

      
    );
  }
}

export default App;
