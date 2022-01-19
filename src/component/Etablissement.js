import React from 'react';
import { Card } from 'semantic-ui-react';

const Etablissement = ({properties})  => {
    console.log(properties);
    
    const {nom , telephone, email} = properties
    return (
        <Card>
            <Card.Content >
                <Card.Header>{nom}</Card.Header>
                        {telephone ? 
                    <Card.Meta>Téléphone: {telephone} </Card.Meta>
                    : undefined }
         
                        {email ?
                    <Card.Meta>Email: {email} </Card.Meta>
                    : undefined }
            </Card.Content>
        </Card>
    )
    }

export default Etablissement;