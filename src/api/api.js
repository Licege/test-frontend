import { fetchClient } from '../utils/tools'

export const catalogAPI = {
    getCatalogs() {
        return fetchClient(`/catalogs/`)
    },
    getCatalogById(id) {
        return fetchClient(`/catalogs/${id}`)
    },
    postCatalog(body) {
        return fetchClient(`/catalogs/`, {
            method: 'POST',
            body,
        })
    },
    updateCatalog(body) {
        return fetchClient(`/catalogs/${body.id}`, {
            method: 'PUT',
            body,
        })
    },
    deleteCatalog(id) {
        return fetchClient(`/catalogs/${id}`, {
            method: 'DELETE',
        })
    }
}

export const goodsAPI = {
    getAllGoods() {
        return fetchClient(`/goods/`)
    },
    getGoodById(id) {
        return fetchClient(`/goods/${id}`)
    },
    createGood(body) {
        return fetchClient(`/goods/`, {
            method: 'POST',
            body,
        })
    },
    updateGood(body) {
        return fetchClient(`/goods/${body.id}`, {
            method: 'PUT',
            body,
        })
    },
    deleteGood(id) {
        return fetchClient(`/goods/${id}`, {
            method: 'DELETE',
        })
    }
}
