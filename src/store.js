import {
    createStore,
    applyMiddleware,
    compose
} from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducer"
// import createBrowserHistory from 'history/createBrowserHistory';

// import reduxHistoryPushMiddleware from 'reduxHistoryPushMiddleware';

const initialState = {
    auth: {
        isAuthenticated: false
    },
    post: {}
}
const middleware = [thunk]
// const history = createBrowserHistory()
// const reduxHistoryPush = reduxHistoryPushMiddleware(history, { matcher: '_FULFILLED$' });



const store = createStore(
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware),
    // applyMiddleware(reduxHistoryPush),
    )
)

export default store