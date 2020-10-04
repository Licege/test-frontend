import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createNewCatalog, isAvailableCatalog } from '../../thunks/catalogs'
import { CustomForm } from '../../common/Form'
import { CATALOG_FORM_FIELDS } from '../../utils/constants'
import { actions } from '../../actions/catalogs'
import '../../styles/form.css'


export const CreateCatalog = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const errors = useSelector(state => state.app.errors)

    const submit = (data) => (event) => {
        event.preventDefault()
        dispatch(createNewCatalog(data))
    }

    const goBack = () => history.goBack()

    const clearTitleError = useCallback(() => dispatch(actions.checkCatalogTitle(true)), [dispatch])

    const checkAvailableTitle = useCallback((title) => dispatch(isAvailableCatalog(title)), [dispatch])

    return (
        <main>
            <h2>Новый каталог</h2>
            <CustomForm fields={CATALOG_FORM_FIELDS}
                        errors={errors}
                        onSubmit={submit}
                        onCancel={goBack}
                        clearTitleError={clearTitleError}
                        checkAvailableTitle={checkAvailableTitle}
            />
        </main>
    )
}

// export const CreateCatalog = () => {
//     const [ title, setTitle] = useState('')
//     const [ description, setDescription ] = useState('')
//     const history = useHistory()
//     const dispatch = useDispatch()
//     const errors = useSelector(state => state.app.errors)
//
//     const setTitleHandler = ({ target }) => setTitle(target.value)
//     const setDescriptionHandler = ({ target }) => setDescription(target.value)
//
//     let debouncedTitle = useDebounced(title, 3000)
//
//     useEffect(() => {
//         if (debouncedTitle) {
//             dispatch(isAvailableCatalog(debouncedTitle))
//         }
//     }, [debouncedTitle, dispatch])
//
//     useEffect(() => {
//         if (!title) {
//             dispatch(actions.checkCatalogTitle(true))
//         }
//     }, [title, dispatch])
//
//     const submit = (event) => {
//         event.preventDefault()
//         dispatch(createNewCatalog({ title, description }))
//     }
//
//     const goBack = () => history.goBack()
//
//     return (
//         <main>
//             <h2>Новый каталог</h2>
//             <Form className='form' onSubmit={submit}>
//                 <Form.Group controlId='form_title'>
//                     <Form.Label>Название:</Form.Label>
//                     <Form.Control type='text'
//                                   name='title'
//                                   value={title}
//                                   onChange={setTitleHandler}
//                                   isInvalid={errors.title}
//                                   required={true}
//                     />
//                     {errors.title && <span>{errors.title}</span>}
//                 </Form.Group>
//                 <Form.Group controlId='form_title'>
//                     <Form.Label>Описание:</Form.Label>
//                     <Form.Control as='textarea'
//                                   value={description}
//                                   onChange={setDescriptionHandler}
//                                   name='description'
//                                   rows={8}
//                     />
//                 </Form.Group>
//                 <div className='form-actions'>
//                     <Button variant='secondary' type='button' onClick={goBack}>Отмена</Button>
//                     <Button variant='primary' type='submit'>Создать</Button>
//                 </div>
//             </Form>
//         </main>
//     )
// }
