import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, rocketReserved } from '../redux/rockets/rocketsSlice';

const RocketsList = () => {
  const { rockets, isLoading, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error occured while fetching rockets</p>;
  }

  if (rockets.length === 0) {
    return <p>No rockets available</p>;
  }

  return (
    <div className="main-wrapper">
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id} className="rock-list">
            <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} className="space-image" />
            <div className="right-panel">
              <h3 className="rocket-name">{rocket.name}</h3>
              <p className="description">
                {' '}
                {rocket.reserved && <span className="res-span">Reserved</span>}
                {' '}
                {rocket.description}
              </p>
              {rocket.reserved ? (
                <button type="button" className="cancel-btn">Cancell Reservation</button>
              ) : (
                <button type="button" onClick={() => { dispatch(rocketReserved(rocket.id)); }} className="reserved-btn">
                  Reserve Rocket
                </button>
              )}

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RocketsList;
