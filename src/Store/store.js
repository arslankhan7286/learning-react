import { createStore,applyMiddleware,combineReducers,compose } from "redux";
import thunk from 'redux-thunk'
import reducer from '../Reducer/reducer'

const componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(combineReducers({store:reducer}),componseEnhancer(applyMiddleware(thunk)));
export default store;
