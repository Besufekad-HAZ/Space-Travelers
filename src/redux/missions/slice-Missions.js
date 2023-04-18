import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_MISSIONS = 'FETCH_MISSIONS';
const INITIAL_STATE = [];
const fetchMissions = async () => {
  const data = await (
    await fetch('https://api.spacexdata.com/v3/missions')
  ).json();
  return data;
};

export const retriveMissions = createAsyncThunk(FETCH_MISSIONS, async () => {
  const response = await fetchMissions();
  const missionData = [];
  response.forEach((mission) => {
    const singleMission = {
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    };
    missionData.push(singleMission);
  });
  return missionData;
});

const missionsSlice = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(retriveMissions.fulfilled, (state, action) => action.payload)
    .addDefaultCase((state) => [...state]);
});

export default missionsSlice;
