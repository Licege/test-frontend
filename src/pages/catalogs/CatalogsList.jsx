import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { CustomTable } from '../../common/Table'
import { getAllCatalogs } from '../../thunks/catalogs'

const tableLabels = [
    'Название',
    'Количество товаров',
]

export const CatalogsList = () => {
    const catalogs = useSelector(state => state.app.catalogs)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCatalogs())
        document.title = 'Каталоги'
    }, [dispatch])

    const create = () => history.push('/catalog/new')

    return (
        <main>
            <Button variant='primary' className='mb-3' onClick={create}>Создать каталог</Button>
            <CustomTable labels={tableLabels}>
                {catalogs.map((catalog, key) => (
                    <React.Fragment key={key}>
                        <td>{catalog.title}</td>
                        <td>{catalog.description}</td>
                    </React.Fragment>
                ))}
            </CustomTable>
        </main>
    )
}
