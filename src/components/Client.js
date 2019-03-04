import React from 'react'
import {DeleteClientButton} from './DeleteClientButton'





export const Client=({client, deleteClient, loggedIn})=>{
    return(
      <div>
    <u><h2>{client.name}</h2></u>
    <b>Age:</b> {client.age}<br/>
    <b>Chore:</b> {client.chore}<br />
    <b>Job:</b>{client.job}<br/>
    {console.log(deleteClient)}
      {!!loggedIn() && deleteClient ? <button onClick={()=>deleteClient(client.id)}>Delete Client</button>: false}

      </div>
    )
  }
