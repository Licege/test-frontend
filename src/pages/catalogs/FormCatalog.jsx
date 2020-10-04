import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useDebounced } from '../../hooks/useDebounce'
import { isAvailableCatalog } from '../../thunks/catalogs'
import { actions } from '../../actions/catalogs'
import { Button, Form } from 'react-bootstrap'

export const FormCatalog = ({ catalog, errors, onSubmit, onCancel }) => {
    const [ title, setTitle] = useState(catalog?.title ?? '')
    const [ description, setDescription ] = useState(catalog?.description ?? '')
    const dispatch = useDispatch()

    const setTitleHandler = ({ target }) => setTitle(target.value)

    const setDescriptionHandler = ({ target }) => setDescription(target.value)

    let debouncedTitle = useDebounced(title, 3000)

    useEffect(() => {
        setTitle(catalog?.title ?? '')
        setDescription(catalog?.description ?? '')
        dispatch(actions.checkCatalogTitle(true))
    }, [catalog, dispatch])

    useEffect(() => {
        if (catalog && debouncedTitle.trim() === catalog.title) {
            dispatch(actions.checkCatalogTitle(true))
        } else if (debouncedTitle) {
            dispatch(isAvailableCatalog(debouncedTitle))
        }
    }, [debouncedTitle, catalog, dispatch])

    useEffect(() => {
        if (!title) {
            dispatch(actions.checkCatalogTitle(true))
        }
    }, [title, dispatch])

    return (
            <Form className='form' onSubmit={onSubmit({ title, description })}>
                <Form.Group controlId='form_title'>
                    <Form.Label>Название:</Form.Label>
                    <Form.Control type='text'
                                  name='title'
                                  value={title}
                                  onChange={setTitleHandler}
                                  isInvalid={errors.title}
                                  required={true}
                    />
                    {errors.title && <span>{errors.title}</span>}
                </Form.Group>
                <Form.Group controlId='form_title'>
                    <Form.Label>Описание:</Form.Label>
                    <Form.Control as='textarea'
                                  value={description}
                                  onChange={setDescriptionHandler}
                                  name='description'
                                  rows={8}
                    />
                </Form.Group>
                <div className='form-actions'>
                    <Button variant='secondary' type='button' onClick={onCancel}>Отмена</Button>
                    <Button variant='primary' type='submit'>{catalog ? 'Обновить' : 'Создать'}</Button>
                </div>
            </Form>
    )
}
