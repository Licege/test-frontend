import React from 'react'
import { Table, Button } from 'react-bootstrap'

export const CustomTable = ({ labels = [], children }) => (
    <Table striped={true} bordered={true} hover={true}>
        <thead>
                <tr>
                    {labels.map((label, key) => <th key={key}>{label}</th>)}
                    <th/>
                    <th/>
                </tr>
        </thead>
        <tbody>
                <tr>
                    {children}
                    <td>
                           <Button variant='link'>Редактировать</Button>
                    </td>
                    <td>
                            <Button variant='link'>Удалить</Button>
                    </td>
                </tr>
        </tbody>
    </Table>
)
