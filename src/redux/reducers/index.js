import {combineReducers} from "redux";

const initialState = {
    users: [],
    planets: []
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USERS': {
            return {
                ...state,
                users: [
                    ...action.payload
                ]
            }
        }
        case 'SET_PLANETS': {
            return {
                ...state,
                planets: [
                    ...action.payload
                ]
            }
        }
        default: {
            return state;
        }
    }
}

const rootReducer = combineReducers({
    app: appReducer
})

export default rootReducer;