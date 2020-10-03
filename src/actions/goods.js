export const GET_GOODS = 'GOODS/GET_GOODS'
export const GET_GOOD_BY_ID = 'GOODS/GET_GOOD_BY_ID'
export const CREATE_GOOD = 'GOODS/CREATE_GOOD'
export const UPDATE_GOOD = 'GOODS/UPDATE_GOOD'
export const DELETE_GOOD = 'GOODS/DELETE_GOOD'

export const actions = {
    getAllGoods: () => ({ type: GET_GOODS }),
    getGoodById: (id) => ({ type: GET_GOOD_BY_ID, id }),
    createGood: (payload) => ({ type: CREATE_GOOD, payload }),
    updateGood: (payload) => ({ type: UPDATE_GOOD, payload }),
    deleteGood: (id) => ({ type: DELETE_GOOD, id })
}
