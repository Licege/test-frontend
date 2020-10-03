import { catalogAPI } from '../api/api'
import { actions } from '../actions/catalogs'

export const getAllCatalogs = () => async ( dispatch ) => {
    let response = await catalogAPI.getCatalogs()
    dispatch(actions.getAllCatalogs(response))
}
