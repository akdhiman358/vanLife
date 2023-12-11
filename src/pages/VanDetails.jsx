import React, { useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
function VanDetails() {
    const params = useParams()
    const [van,setVan] = React.useState(null)
    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    },
    [])

  return (
    <div className='van-details-container'>
        {van ?
        ( <div className="van-details">
            
            <img src={van.imageUrl} alt="van-image" />
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p className='van-price'><span>${van.price}</span>/day</p>
            <p className='van-description'>{van.description}</p>
            <button className="link-button">Rent this van</button>
        </div>                 
        ) :  <h1>Loading.......</h1>
         }
        
    </div>
  )
}

export default VanDetails