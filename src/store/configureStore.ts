import {createStore} from "redux";
import {rootReducer} from "./AppState";
import {composeWithDevTools} from "redux-devtools-extension";

const configureStore = () => {
    return createStore(rootReducer, composeWithDevTools());
};

export default configureStore;