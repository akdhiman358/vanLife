import React from "react"
import { Link } from "react-router-dom"

 export default function HostVans() {
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    console.log(vans)
    const hostVansEl = vans.map(
      van => {
      return(        
        <Link
        to={`/host/hostvans/${van.id}`}
        key={van.id}
        className="host-van-link-wrapper"
    >
        <div className="host-van-single" key={van.id}>
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
            <div className="host-van-info">
                <h3>{van.name}</h3>
                <p>${van.price}/day</p>
            </div>
        </div>
    </Link>
    )}
    )
  return (
    <section>
      <div className='host-vans-title'>
          <h1>Your Listed Vans</h1>
          
      </div>
      <div className='host-vans-list'>
      {
                        vans.length > 0 ? (
                            <section>
                                {hostVansEl}
                            </section>

                        ) : (
                                <h2>Loading...</h2>
                            )
                    }  
        </div>
       
      </section>
      
    )
  }

  