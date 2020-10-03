import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { SearchBar } from '../../common/SearchBar'
import { CustomTable } from '../../common/Table'

const tableLabels = {
    labels: [
        'Название',
        'Бренд',
        'Модель',
        'Стоимость',
    ]
}

export const Catalog = ({ catalog }) => {
    const history = useHistory()

    const create = () => history.push('/catalog/new')

    return (
        <main>
            <div className='d-flex align-items-center mb-3'>
                <Link to='/catalogs'>К списку каталогов</Link>
                <Button onClick={create} className='ml-3'>Создать товар</Button>
            </div>
            <h1>{catalog?.title}</h1>
            <SearchBar placeholder='Название / Бренд / Модель / Стоимость' />
            <CustomTable data={tableLabels} />
        </main>
    )
}
