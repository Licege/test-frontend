import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { CustomTable } from '../../common/Table'
import { destroyCatalog, getAllCatalogs } from '../../thunks/catalogs'
import { CATALOG_TABLE_LABELS } from '../../utils/constants'


export const CatalogsList = () => {
    const catalogs = useSelector(state => state.app.catalogs)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCatalogs())
        document.title = 'Каталоги'
    }, [dispatch])

    const create = () => history.push('/catalogs/new')
    const detail = (id) => () => history.push(`/catalog/${id}`)
    const edit = (id) => (event) => {
        event.stopPropagation()
        history.push(`/catalogs/edit/${id}`)
    }
    const destroy = (id) => (event) => {
        event.stopPropagation()
        dispatch(destroyCatalog(id))
    }

    return (
        <main>
            <Button variant='primary' className='mb-3' onClick={create}>Создать каталог</Button>
            <CustomTable labels={CATALOG_TABLE_LABELS}>
                {catalogs.map((catalog, key) => (
                    <tr key={key} onClick={detail(catalog.id)}>
                        <td>{catalog.title}</td>
                        <td>{catalog.description}</td>
                        <td>
                            <Button variant='link' onClick={edit(catalog.id)}>Редактировать</Button>
                        </td>
                        <td>
                            <Button variant='link' onClick={destroy(catalog.id)}>Удалить</Button>
                        </td>
                    </tr>
                ))}
            </CustomTable>
        </main>
    )
}
