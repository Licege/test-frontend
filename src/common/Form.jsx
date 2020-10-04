import React, { useEffect, useState } from 'react'
import { useDebounced } from '../hooks/useDebounce'
import { Button, Form } from 'react-bootstrap'

export const CustomForm = ({ data, fields, errors, onSubmit, onCancel, checkAvailableTitle, clearTitleError }) => {
    const [ values, setValues] = useState(data ?? {})

    const setFieldHandler = ({ target }) => {
        setValues(prevFields => ({ ...prevFields, [target.name]: target.value }))
    }

    let debouncedTitle = useDebounced(values.title, 3000)

    useEffect(() => {
        setValues(data ?? {})
        clearTitleError()
    }, [data, clearTitleError])

    useEffect(() => {
        if (data && debouncedTitle.trim() === data.title) {
            clearTitleError()
        } else if (debouncedTitle) {
            checkAvailableTitle(debouncedTitle)
        }
    }, [debouncedTitle, data, clearTitleError, checkAvailableTitle])

    useEffect(() => {
        if (!values?.title) {
            clearTitleError()
        }
    }, [values, clearTitleError])

    return (
            <Form className='form' onSubmit={onSubmit(values)}>
                {fields.map((field, key) => (
                    <Form.Group controlId={`form_${field.name}`} key={key}>
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control value={values[field.name] || ''}
                                      onChange={setFieldHandler}
                                      isInvalid={errors[field.name]}
                                      {...field}
                        />
                        {errors[field.name] && <span className='form-error'>{errors[field.name]}</span>}
                    </Form.Group>
                ))}
                <div className='form-actions'>
                    <Button variant='secondary' type='button' onClick={onCancel}>Отмена</Button>
                    <Button variant='primary' type='submit'>{data ? 'Обновить' : 'Создать'}</Button>
                </div>
            </Form>
    )
}
