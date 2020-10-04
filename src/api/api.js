import { fetchClient } from '../utils/tools'

export const catalogAPI = {
    getCatalogs() {
        return fetchClient(`/catalogs/`)
    },
    getCatalogById(id) {
        return fetchClient(`/catalogs/${id}`)
    },
    isAvailableTitle(title) {
        return fetchClient(`/catalogs/available_title/${title}`)
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
    getAllGoods(query = '') {
        return fetchClient(`/goods${query || '/'}`)
    },
    getGoodById(id) {
        return fetchClient(`/goods/${id}`)
    },
    isAvailableTitle(title) {
        return fetchClient(`/goods/available_title/${title}`)
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
