import { reserveCancelled, rocketReserved } from "../redux/rockets/rocketsSlice"

const RocketsList = () => {
  const { rockets} = useSelector((state) => state.rockets )

  return (
    <div className="main-wrapper">
        <ul>
        {rockets.map((rocket) => (
            <li key={rocket.id} className="rock-list">
                <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} className="space-image" />
               <div className="right-panel">
                <h3 className="rocket-name">{rocket.name}</h3>
                <p className="description"> {rocket.reserved && <span className="res-span">Reserved</span>} {rocket.description}</p>
                {rocket.reserved ? (
                    <button onClick={() => dispatch(rocketCancelled(rocket.id))} className="cancel-btn">Cancell Reservation</button>
                 ) : (
                    <button onClick={() => {dispatch(rocketReserved(rocket.id))}} className="reserved-btn">
                        Reserve Rocket
                    </button> 
                 )}
                </div>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default RocketsList
