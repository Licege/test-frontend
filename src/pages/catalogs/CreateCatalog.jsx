import React from 'react'
import { useHistory } from 'react-router-dom'
import { CustomForm } from '../../common/Form'

const FIELDS = [
    {
        name: 'title',
        label: 'Название:',
        as: 'input',
        type: 'text',
        func: (e) => console.log(e.target.value),
        required: true,
    },
    {
        name: 'description',
        label: 'Описание:',
        as: 'textarea',
        required: false,
        rows: 8,
    }
]

export const CreateCatalog = () => {
    const history = useHistory()

    const goBack = () => history.goBack()

    return (
        <main>
            <h1>Новый каталог</h1>
            <CustomForm submit={(data) => console.log(data)} fields={FIELDS} cancel={goBack} />
        </main>
    )
}
