import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { SearchBar } from '../../common/SearchBar'
import { CustomTable } from '../../common/Table'
import { GOODS_TABLE_LABELS } from '../../utils/constants'
import { destroyGood, getAllGoods } from '../../thunks/goods'
import { formQuery } from '../../utils/tools'
import { getCatalogById } from '../../thunks/catalogs'

export const Catalog = ({ catalog }) => {
    const goods = useSelector(state => state.app.goods)
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams()

    useEffect(() => {
        document.title = 'Каталог'
    }, [])

    useEffect(() => {
        dispatch(getAllGoods(formQuery({ id })))
        dispatch(getCatalogById(id))
    }, [id, dispatch])

    const create = () => history.push(`/goods/new`)
    const edit = (id) => () => history.push(`/goods/edit/${id}`)
    const destroy = (id) => () => dispatch(destroyGood(id))

    const onSearch = (data) => dispatch(getAllGoods(formQuery({ id, search: data })))

    return (
        <main>
            <div className='d-flex align-items-center mb-3'>
                <Link to='/catalogs'>К списку каталогов</Link>
                <Button onClick={create} className='ml-3'>Создать товар</Button>
            </div>
            <h1>{catalog?.title}</h1>
            <SearchBar onSearch={onSearch}
                       placeholder='Название / Бренд / Модель / Стоимость'
            />
            <CustomTable labels={GOODS_TABLE_LABELS}>
                {goods.map((good, key) => (
                    <tr key={key}>
                        <td>{good.title ?? ''}</td>
                        <td>{good.brand ?? ''}</td>
                        <td>{good.model ?? ''}</td>
                        <td>{good.price ?? ''}</td>
                        <td>
                            <Button variant='link' onClick={edit(good.id)}>Редактировать</Button>
                        </td>
                        <td>
                            <Button variant='link' onClick={destroy(good.id)}>Удалить</Button>
                        </td>
                    </tr>
                ))}
            </CustomTable>
        </main>
    )
}
