import { createSlice, configureStore } from '@reduxjs/toolkit'

// Redux toolkit introduced 'slices' where you can organize your state,
// actions, and reducers in one place.
const counterSlice = createSlice({
  name: 'counter', // name of slice
  initialState: {  // initial state
    count: 0
  },
  reducers: {      // everything that touches the state
    incremented: state => {
        state.count += 1
    },
    decremented: state => {
        state.count -= 1
    },
    incrementByAmount: (state, action) => {
        state.count += action.payload
    }
  }
})

export const { incremented, decremented, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer