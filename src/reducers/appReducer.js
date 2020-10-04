import {
    CHECK_CATALOG_TITLE,
    DELETE_CATALOG,
    GET_CATALOG_BY_ID,
    GET_CATALOGS,
    UPDATE_CATALOG,
} from '../actions/catalogs'
import {
    CHECK_GOODS_TITLE,
    DELETE_GOOD,
    GET_GOOD_BY_ID,
    GET_GOODS,
    UPDATE_GOOD
} from '../actions/goods'

let initialState = {
    catalogs: [],
    goods: [],
    currentCatalog: null,
    currentGood: null,
    status: '',
    errors: {},
}

const appReducer = (state = initialState, action) => {
    let errors

    switch (action.type) {
        case GET_CATALOGS:
            return {
                ...state,
                catalogs: action.payload,
            }
        case GET_CATALOG_BY_ID:
            return {
                ...state,
                currentCatalog: action.payload,
            }
        case CHECK_CATALOG_TITLE:
        case CHECK_GOODS_TITLE:
            errors = { ...state.errors }

            if (action.available) {
                delete errors.title
            } else {
                errors.title = 'Каталог с таким именем уже существует'
            }

            return { ...state, errors }
        case UPDATE_CATALOG:
            return {
                ...state,
                catalogs: state.catalogs.map(catalog => catalog.id === action.payload.id ? action.payload : catalog)
            }
        case DELETE_CATALOG:
            return {
                ...state,
                catalogs: state.catalogs.filter(catalog => catalog.id !== action.id)
            }
        case GET_GOODS:
            return {
                ...state,
                goods: action.payload,
            }
        case GET_GOOD_BY_ID:
            return {
                ...state,
                currentGood: action.payload,
            }
        case UPDATE_GOOD:
            return {
                ...state,
                goods: state.goods.map(good => good.id === action.payload.id ? action.payload : good)
            }
        case DELETE_GOOD:
            return {
                ...state,
                goods: state.goods.filter(good => good.id !== action.id)
            }
        default:
            return state
    }
}

export default appReducer
