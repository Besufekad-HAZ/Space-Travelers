import React from 'react';
import './mission.css';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const { name, description } = props;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{description}</td>
        <td className="button-status">
          <button type="button" className="status">
            NOT A MEMBER
          </button>
        </td>
        <td className="button-join">
          <button type="button" className="join">
            Join Mission
          </button>
        </td>
      </tr>
    </>
  );
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
