import { combineReducers, createStore } from "redux";
import recordeReducer from "./recorder";
import eventUserReducer from "./user-events";

const rootReducer = combineReducers({
    userEvents: eventUserReducer,
    recorder: recordeReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;