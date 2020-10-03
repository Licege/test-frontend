import { GET_CATALOGS } from '../actions/catalogs'

let initialState = {
    catalogs: [],
    goods: [],
    status: ''
}

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATALOGS:
            return {
                ...state,
                catalogs: action.payload,
            }
        default:
            return state
    }
}

export default catalogReducer
