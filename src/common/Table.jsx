import React from 'react'
import { Table } from 'react-bootstrap'

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
            {children}
        </tbody>
    </Table>
)
