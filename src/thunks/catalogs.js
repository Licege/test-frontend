import { catalogAPI } from '../api/api'
import { actions } from '../actions/catalogs'

export const getAllCatalogs = () => async ( dispatch ) => {
    let response = await catalogAPI.getCatalogs()
    dispatch(actions.getAllCatalogs(response.data))
}

export const getCatalogById = ( id ) => async ( dispatch ) => {
    let response = await catalogAPI.getCatalogById(id)
    dispatch(actions.getCatalogById(response.data))
}

export const isAvailableCatalog = ( title ) => async ( dispatch ) => {
    let response = await catalogAPI.isAvailableTitle(title)
    dispatch(actions.checkCatalogTitle(response.data))
}

export const createNewCatalog = ( data ) => async ( dispatch ) => {
    let response = await catalogAPI.postCatalog(data)
    if (!response.ok) {
        response.data?.message === 'Already Exists' && dispatch(actions.checkCatalogTitle(false))
    } else {
        dispatch(actions.createCatalog(response.data))
    }
}

export const updateCatalog = ( data ) => async ( dispatch ) => {
    let response = await catalogAPI.updateCatalog(data)
    if (!response.ok) {
        response.data?.message === 'Already Exists' && dispatch(actions.checkCatalogTitle(false))
    } else {
        dispatch(actions.updateCatalog(response.data))
    }
}

export const destroyCatalog = ( id ) => async ( dispatch ) => {
    await catalogAPI.deleteCatalog(id)
    dispatch(actions.deleteCatalog(id))
}
