/* eslint-disable linebreak-style */
import { useSelector, useDispatch } from 'react-redux';
import { RxArrowRight } from 'react-icons/rx';
import { cancelReservation } from '../redux/rockets/rocketsSlice';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets.filter((rocket) => rocket.reserved));
  const missionsReserved = useSelector(
    (state) => state.missions.filter((check) => check.isReserved),
  );
  const dispatch = useDispatch();
  if (rockets.length === 0 && missionsReserved.length === 0) {
    return (
      <p className="myprofile">No rockets reserved and No Missions Joined!</p>
    );
  }
  return (
    <div className="d-flex myprofile">
      <div className="rockets-profile">
        <h3>
          <u>My Rockets</u>
        </h3>
        <ul className="profile-list-holder">
          {rockets.length === 0 && <li className="list-profile msg">No rockets reserved</li>}
          {rockets.map((rocket) => (
            <li key={rocket.id} className="flex list-profile">
              <p>
                <span><RxArrowRight /></span>
                {rocket.name}
              </p>
              <button
                type="button"
                style={{ border: 'none', color: 'var(--blue)' }}
                className="profile-btn cancel-btn"
                onClick={() => {
                  dispatch(cancelReservation(rocket.id));
                }}
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="container row col-6">
        <h3>
          <u>My Missions</u>
        </h3>
        <ul className="list-group">
          {missionsReserved.length ? (
            missionsReserved.map((mission) => (
              <li key={mission.id} className="list-group-item">
                <RxArrowRight />
                {mission.name}
              </li>
            ))
          ) : (
            <li className="list-group-item">No Missions Joined</li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default MyProfile;
