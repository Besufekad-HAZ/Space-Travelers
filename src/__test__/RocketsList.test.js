import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer, { fetchRockets, rocketReserved, cancelReservation } from '../redux/rockets/rocketsSlice';

describe('rocketsSlice', () => {
  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        rockets: rocketsReducer,
      },
    });
  });

  it('should get rockets data correctly', async () => {
    const rockets = [{ id: 1, name: 'Falcon 1' }, { id: 2, name: 'Falcon 9' }];
    const mockResponse = [...rockets];
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(mockResponse) }));

    await store.dispatch(fetchRockets());
    expect(store.getState().rockets.rockets).toEqual(rockets);
  });

  it('should implement the booking rocket correctly', () => {
    const initialState = {
      rockets: [{ id: 1, reserved: false }, { id: 2, reserved: false }],
      isLoading: false,
      error: false,
      fetched: true,
    };
    const rocketId = 1;
    const action = rocketReserved(rocketId);
    const newState = rocketsReducer(initialState, action);
    expect(newState.rockets[0].reserved).toEqual(true);
  });

  it('should cancel a rocket reservation correctly', () => {
    const initialState = {
      rockets: [{ id: 1, reserved: true }, { id: 2, reserved: false }],
      isLoading: false,
      error: false,
      fetched: true,
    };
    const rocketId = 1;
    const action = cancelReservation(rocketId);
    const newState = rocketsReducer(initialState, action);
    expect(newState.rockets[0].reserved).toEqual(false);
  });
});
