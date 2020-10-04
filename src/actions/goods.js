export const GET_GOODS = 'GOODS/GET_GOODS'
export const GET_GOOD_BY_ID = 'GOODS/GET_GOOD_BY_ID'
export const CHECK_GOODS_TITLE = 'GOODS/CHECK_GOODS_TITLE'
export const CREATE_GOOD = 'GOODS/CREATE_GOOD'
export const UPDATE_GOOD = 'GOODS/UPDATE_GOOD'
export const DELETE_GOOD = 'GOODS/DELETE_GOOD'

export const actions = {
    getAllGoods: (payload) => ({ type: GET_GOODS, payload }),
    getGoodById: (payload) => ({ type: GET_GOOD_BY_ID, payload }),
    isAvailableTitle: (available) => ({ type: CHECK_GOODS_TITLE, available }),
    createGood: (payload) => ({ type: CREATE_GOOD, payload }),
    updateGood: (payload) => ({ type: UPDATE_GOOD, payload }),
    deleteGood: (id) => ({ type: DELETE_GOOD, id })
}
