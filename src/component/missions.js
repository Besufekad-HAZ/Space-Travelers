import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateMission } from '../redux/missions/slice-Missions';
import './mission.css';

const Mission = (props) => {
  const {
    name, id, description, isReserved,
  } = props;
  const dispatch = useDispatch();
  const joinButton = () => {
    dispatch(updateMission(id));
  };
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{description}</td>
        <td className="button-status">
          <div className={isReserved ? 'active_btn' : 'not_active'}>
            {isReserved ? 'Active Member' : 'NOT A MEMBER'}
          </div>
        </td>
        <td className="button-join">
          <button
            type="button"
            className={isReserved ? 'leave' : 'join'}
            onClick={joinButton}
          >
            {isReserved ? 'Leave Mission' : 'Join Mission'}
          </button>
        </td>
      </tr>
    </>
  );
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isReserved: PropTypes.bool.isRequired,
};

export default Mission;
