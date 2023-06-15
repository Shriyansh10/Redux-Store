import { legacy_createStore as CreateStore } from "redux";
import rootReducer from "./Reducers";

const store = CreateStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;