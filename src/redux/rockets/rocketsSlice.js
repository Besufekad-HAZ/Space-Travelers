import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    rockets: [],
    isLoading: false,
    error: false,
}

const rocketsSlice = createSlice ({
  name: 'rockets',
  initialState,
  reducers:{
    rocketReserved(state, action){
        const newState = state.rockets.map((rocket) => {
            if (rocket.id !== action.payload) return rocket
            return { ...rocket, reserved: true }
          })
          state.rockets = newState
    },
    rocketCancelled(state, action){
        const newState = state.rockets.map((rocket) => {
          if (rocket.id === action.payload) {
            return { ...rocket, reserved: false }
            }
            return rocket
          })
          state.rockets = newState
    }
  },
})


export const {rocketReserved, rocketCancelled} = rocketsSlice.actions;       
export default rocketsSlice.reducer