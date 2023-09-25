import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

import appState from "./appstates";
const store = configureStore({
    reducer: reducers,
    preloadedState: appState
})

export default store