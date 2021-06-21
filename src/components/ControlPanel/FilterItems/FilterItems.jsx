import React from "react";
import { Col, Button, ButtonGroup } from 'react-bootstrap';
import style from "./FilterItems.module.scss"

const FilterItems = () => {
    const buttonsData = [
        {
            name: 'all',
            label: 'All'
        },
        {
            name: 'active',
            label: 'Active'

        },
        {
            name: 'done',
            label: 'Done'
        }
    ]
    const buttons = buttonsData.map((button) => {
        return <Button type="button " variant="secondary" key={button.name} >{button.label}</Button>
    })
    return <Col xs={8} className="d-flex align-items-center justify-content-center">
        <ButtonGroup aria-label="Basic example">
            {buttons}
        </ButtonGroup>
    </Col>
}
export default FilterItems;