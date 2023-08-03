import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter'

// add any new reducers here so all components have access to them
export default configureStore({
    reducer: {
        counter: counterReducer
    }
})