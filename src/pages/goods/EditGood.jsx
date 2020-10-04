import React, { useCallback, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CustomForm } from '../../common/Form'
import { GOOD_FORM_FIELDS } from '../../utils/constants'
import { actions } from '../../actions/goods'
import { getGoodById, isAvailableGood, updateGood } from '../../thunks/goods'

export const EditGood = () => {
    const currentGood = useSelector(state => state.app.currentGood)
    const errors = useSelector(state => state.app.errors)
    const history = useHistory()
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = 'Редактировать товар'
    }, [])

    useEffect(() => {
        dispatch(getGoodById(id))
    }, [id, dispatch])

    const submit = (data) => (event) => {
        event.preventDefault()
        dispatch(updateGood(data))
    }

    const goBack = () => history.goBack()

    const clearTitleError = useCallback(() => dispatch(actions.isAvailableTitle(true)), [dispatch])

    const checkAvailableTitle = useCallback((title) => dispatch(isAvailableGood(title)), [dispatch])

    return (
        <main>
            <h2>Редактировать товар</h2>
            {currentGood && <CustomForm data={currentGood}
                                        fields={GOOD_FORM_FIELDS}
                                        errors={errors}
                                        onSubmit={submit}
                                        onCancel={goBack}
                                        clearTitleError={clearTitleError}
                                        checkAvailableTitle={checkAvailableTitle}
            />}
        </main>

    )
}
