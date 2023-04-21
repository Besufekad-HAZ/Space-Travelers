import {
  createReducer,
  createAsyncThunk,
  createAction,
} from '@reduxjs/toolkit';

const UPDATE_MISSION = 'UPDATE_MISSION';
const FETCH_MISSIONS = 'FETCH_MISSIONS';
const INITIAL_STATE = [];
const fetchMissions = async () => {
  const data = await (
    await fetch('https://api.spacexdata.com/v3/missions')
  ).json();
  return data;
};

export const retriveMissions = createAsyncThunk(
  FETCH_MISSIONS,
  async (obj, thunkAPI) => {
    const currentState = thunkAPI.getState();
    if (currentState.missions.length === 0) {
      const response = await fetchMissions();
      const missionData = [];
      response.forEach((mission) => {
        const singleMission = {
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
          isReserved: false,
        };
        missionData.push(singleMission);
      });
      return missionData;
    }
    return currentState.missions;
  },
);

export const updateMission = createAction(UPDATE_MISSION, (id) => ({
  payload: id,
}));

const missionsSlice = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(retriveMissions.fulfilled, (state, action) => action.payload)
    .addCase(updateMission, (state, action) => state.map((mission) => (mission.id === action.payload
      ? { ...mission, isReserved: !mission.isReserved }
      : mission)))
    .addDefaultCase((state) => [...state]);
});

export default missionsSlice;
