import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Mission from '../component/missions';
import { retriveMissions } from '../redux/missions/slice-Missions';

function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retriveMissions());
  }, [dispatch]);
  const missions = useSelector((state) => state.missions);
  const renderMissions = (missionsData) => missionsData.map((mission) => (
    <Mission
      name={mission.name}
      key={mission.id}
      id={mission.id}
      description={mission.description}
      isReserved={mission.isReserved}
    />
  ));
  return (
    <div className="table-container">
      <Table striped className="main-table my-5">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>{missions && renderMissions(missions)}</tbody>
      </Table>
    </div>
  );
}

export default Missions;
