import React from 'react';
import './mission.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

function Missions() {
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
        <tbody>
          <tr>
            <td>Thaicom</td>
            <td>
              Thaicom is the name of a series of communications satellites
              operated from Thailand, and also the name of Thaicom Public
              Company Limited, which is the company that owns and operates the
              Thaicom satellite fleet and other telecommunication businesses in
              Thailand and throughout the Asia-Pacific region. The satellite
              projects were named Thaicom by the King of Thailand, His Majesty
              the King Bhumibol Adulyadej, as a symbol of the linkage between
              Thailand and modern communications technology.
            </td>
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
          <tr>
            <td>Telstar</td>
            <td>
              Telstar 19V (Telstar 19 Vantage) is a communication satellite in
              the Telstar series of the Canadian satellite communications
              company Telesat. It was built by Space Systems Loral (MAXAR) and
              is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is
              the heaviest commercial communications satellite ever launched,
              weighing at 7,076 kg (15,600 lbs) and surpassing the previous
              record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane
              5ECA on 1 July 2009.
            </td>
            <td className="buttons">
              <button type="button" className="status">
                NOT A MEMBER
              </button>
            </td>
            <td className="buttons">
              <button type="button" className="join">
                Join Mission
              </button>
            </td>
          </tr>
          <tr>
            <td>Thaicom</td>
            <td>
              Thaicom is the name of a series of communications satellites
              operated from Thailand, and also the name of Thaicom Public
              Company Limited, which is the company that owns and operates the
              Thaicom satellite fleet and other telecommunication businesses in
              Thailand and throughout the Asia-Pacific region. The satellite
              projects were named Thaicom by the King of Thailand, His Majesty
              the King Bhumibol Adulyadej, as a symbol of the linkage between
              Thailand and modern communications technology.
            </td>
            <td className="buttons">
              <button type="button" className="status">
                NOT A MEMBER
              </button>
            </td>
            <td className="buttons">
              <button type="button" className="join">
                Join Mission
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Missions;
