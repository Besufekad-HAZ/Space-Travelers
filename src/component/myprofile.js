import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets.filter((rocket) => rocket.reserved));
  return (
    <div className="myprofile">
      <div>
        <h3>My Rockets</h3>
        <ul className="profile-list-holder">
          {rockets.map((rocket) => (
            <li key={rocket.id} className="list-profile">
              <p>{rocket.name}</p>
            </li>
          ))}
          ;
        </ul>
      </div>
    </div>

  );
};

export default MyProfile;
