import React, { useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CustomForm } from '../../common/Form'
import { GOOD_FORM_FIELDS } from '../../utils/constants'
import { actions } from '../../actions/goods'
import { createNewGood, isAvailableGood } from '../../thunks/goods'

export const CreateGood = () => {
    const currentCatalog = useSelector(state => state.app.currentCatalog)
    const status = useSelector(state => state.app.status)
    const errors = useSelector(state => state.app.errors)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = 'Создание товара'
        return () => dispatch(actions.clear())
    }, [dispatch])

    const submit = (data) => (event) => {
        event.preventDefault()
        dispatch(createNewGood({ ...data, CatalogId: currentCatalog.id }))
    }

    const goBack = useCallback(() => {
        history.goBack()
    }, [history])

    useEffect(() => {
        if (status === 'redirect') {
            goBack()
        }
    }, [status, goBack])

    const clearTitleError = useCallback(() => dispatch(actions.isAvailableTitle(true)), [dispatch])

    const checkAvailableTitle = useCallback((title) => dispatch(isAvailableGood(title)), [dispatch])

    return (
        <main>
            <h2>Новый товар</h2>
            <CustomForm fields={GOOD_FORM_FIELDS}
                        errors={errors}
                        onSubmit={submit}
                        onCancel={goBack}
                        clearTitleError={clearTitleError}
                        checkAvailableTitle={checkAvailableTitle}
            />
        </main>

    )
}
