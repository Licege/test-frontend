export const GET_CATALOGS = 'CATALOGS/GET_CATALOGS'
export const GET_CATALOG_BY_ID = 'CATALOGS/GET_CATALOG_BY_ID'
export const CREATE_CATALOG = 'CATALOGS/CREATE_CATALOG'
export const UPDATE_CATALOG = 'CATALOGS/UPDATE_CATALOG'
export const DELETE_CATALOG = 'CATALOGS/DELETE_CATALOG'

export const actions = {
    getAllCatalogs: (payload) => ({ type: GET_CATALOGS, payload }),
    getCatalogById: (id) => ({ type: GET_CATALOG_BY_ID, id }),
    createCatalog: (payload) => ({ type: CREATE_CATALOG, payload }),
    updateCatalog: (payload) => ({ type: UPDATE_CATALOG, payload }),
    deleteCatalog: (id) => ({ type: DELETE_CATALOG, id })
}