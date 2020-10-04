import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getCatalogById, isAvailableCatalog, updateCatalog } from '../../thunks/catalogs'
import { CustomForm } from '../../common/Form'
import { CATALOG_FORM_FIELDS } from '../../utils/constants'
import { actions } from '../../actions/catalogs'
import '../../styles/form.css'


export const EditCatalog = () => {
    const history = useHistory()
    const { id } = useParams()
    const dispatch = useDispatch()
    const catalog = useSelector(state => state.app.currentCatalog)
    const errors = useSelector(state => state.app.errors)

    useEffect(() => {
        document.title = 'Редактирование каталога'
        dispatch(getCatalogById(id))
    }, [id, dispatch])

    const submit = (data) => (event) => {
        event.preventDefault()
        dispatch(updateCatalog(data))
    }

    const goBack = () => history.goBack()

    const clearTitleError = useCallback(() => dispatch(actions.checkCatalogTitle(true)), [dispatch])

    const checkAvailableTitle = useCallback((title) => dispatch(isAvailableCatalog(title)), [dispatch])

    return (
        <main>
            <h2>Редактировать каталог</h2>
            {catalog && <CustomForm data={catalog}
                                    fields={CATALOG_FORM_FIELDS}
                                    errors={errors}
                                    onSubmit={submit}
                                    onCancel={goBack}
                                    clearTitleError={clearTitleError}
                                    checkAvailableTitle={checkAvailableTitle}
            />}
        </main>
    )
}
