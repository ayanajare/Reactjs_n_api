import React , {Component} from 'react'; 
import {Button, Select} from 'semantic-ui-react'; 
import './recherche.css'; 

class Recherche extends Component 
{
    state = {
        dpt : '', 
        type : ''
    }

    OnDptChange=(e, data) => {
        this.setState({ dpt : data.value})

    }

    OnTypeChange=(e, data) => {
        this.setState({ type : data.value})

    }

    render()
    {
        const optionsDpt=[
            { value: "44", key: "44", text:"Loire Atlantique"},
            { value: "49", key: "49", text:"Maine et Loire"},
            { value: "53", key: "53", text:"Mayenne"},
            { value: "72", key: "72", text:"Sarthe"}, 
            { value: "85", key: "85", text:"Vendée"}
        ]

        const optionsType= [
            {value:"cpam", key:"cpam", text:"Caisse primaire d'assurance maladie"},
            {value:"cci", key:"cci", text:"Chambre de commerce et de l'industrie"},

            {value:"crous", key:"crous", text:"Crous et ses antennes"}

        ]
        return(
            <div className="recherche">
                <Select placeholder="Choisissez un département" onChange={this.OnDptChange} options={optionsDpt} value={this.state.dpt}/>
                <Select placeholder="Choisissez une administration" onChange={this.OnTypeChange} options={optionsType} value={this.state.type}/>
                <Button primary onClick={()=> this.props.onSearch(this.state.dpt, this.state.type)}>Lancer la recherche</Button>
                <Button secondary onClick={this.props.onEmpty}>Vider la recherche </Button>
            </div>
        )
    }
}

export default Recherche; 