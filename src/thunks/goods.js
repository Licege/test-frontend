import { goodsAPI } from '../api/api'
import { actions } from '../actions/goods'

export const getAllGoods = ( query ) => async ( dispatch ) => {
    let response = await goodsAPI.getAllGoods(query)
    dispatch(actions.getAllGoods(response.data))
}

export const getGoodById = ( id ) => async ( dispatch ) => {
    let response = await goodsAPI.getGoodById(id)
    dispatch(actions.getGoodById(response.data))
}

export const isAvailableGood = ( title ) => async ( dispatch ) => {
    let response = await goodsAPI.isAvailableTitle(title)
    if (response?.ok) {
        dispatch(actions.isAvailableTitle(response.data))
    }
}

export const createNewGood = ( data ) => async ( dispatch ) => {
    let response = await goodsAPI.createGood(data)
    if (!response.ok) {
        response.data?.message === 'Already Exists' && dispatch(actions.isAvailableTitle(false))
    } else {
        dispatch(actions.createGood(response.data))
    }
}

export const updateGood = ( data ) => async ( dispatch ) => {
    let response = await goodsAPI.updateGood(data)
    if (!response.ok) {
        response.data?.message === 'Already Exists' && dispatch(actions.isAvailableTitle(false))
    } else {
        dispatch(actions.updateGood(data))
    }
}

export const destroyGood = ( id ) => async ( dispatch ) => {
    await goodsAPI.deleteGood(id)
    dispatch(actions.deleteGood(id))
}
