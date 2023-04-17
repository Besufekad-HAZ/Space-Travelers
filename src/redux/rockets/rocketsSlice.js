import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk('rockets/rocketsSlice', async () => {
  const respond = await fetch('https://api.spacexdata.com/v4/rockets');
  const data = await respond.json();
  return data;
});

const initialState = {
  rockets: [],
  isLoading: false,
  error: false,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    rocketReserved(state, action) {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      state.rockets = newState;
    },
    rocketCancelled(state, action) {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      state.rockets = newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.rockets = action.payload;
        state.isLoading = false;
        // ...state,
        // isLoading: false
      })
      .addCase(fetchRockets.rejected, (state) => ({
        ...state,
        error: true,
      }));
  },
});

export const { rocketReserved, rocketCancelled } = rocketsSlice.actions;
export default rocketsSlice.reducer;
