import { useSelector, useDispatch } from 'react-redux';
import { cancelReservation } from '../redux/rockets/rocketsSlice';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets.filter((rocket) => rocket.reserved));
  const dispatch = useDispatch();
  if (rockets.length === 0) {
    return <p className="myprofile">No rockets reserved</p>;
  }
  return (
    <div className="flex myprofile">
      <div>
        <h3>My Rockets</h3>
        <ul className="profile-list-holder">
          {rockets.map((rocket) => (
            <li key={rocket.id} className="flex list-profile">
              <p>{rocket.name}</p>
              <button type="button" className="profile-btn cancel-btn" onClick={() => { dispatch(cancelReservation(rocket.id)); }}>Cancel Reservation</button>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default MyProfile;
