import React from 'react'
import { Form, Button } from 'react-bootstrap'
import '../styles/form.css'

export const CustomForm = ({ fields, submit, cancel }) => {
    const RenderFields = ({ fields }) => {
        return fields.map((field, key) => (
            <Form.Group controlId={`form_${field.name}`} key={key}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control type={field.type}
                              onChange={field.func}
                              as={field.as}
                              rows={field.rows}
                              required={field.required}
                />
            </Form.Group>
        ))
    }

    return (
        <Form className='form' onSubmit={submit}>
            <RenderFields fields={fields} />
            <div className='form-actions'>
                <Button variant='secondary' type='button' onClick={cancel}>Отмена</Button>
                <Button variant='primary' type='submit'>Создать</Button>
            </div>
        </Form>
    )
}
