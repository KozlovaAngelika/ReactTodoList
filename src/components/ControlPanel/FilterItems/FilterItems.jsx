import React from "react";
import { Col, Button, ButtonGroup } from 'react-bootstrap';
import style from "./FilterItems.module.scss"

const FilterItems = ({ filterStatus, setFilterStatus }) => {
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
        const isActive = filterStatus === button.name;
        const classBtn = `btn ${isActive ? 'btn-info' : 'btn-light'}`
        return <Button type="button" key={button.name} className={classBtn} onClick={(event) => { changeFilterStatusHandler(button.name) }}>{button.label}</Button>
    })
    const changeFilterStatusHandler = (status) => {
        setFilterStatus(status);
    }
    return <Col xs={8} className="d-flex align-items-center justify-content-center">
        <ButtonGroup aria-label="Basic example">
            {buttons}
        </ButtonGroup>
    </Col>
}
export default FilterItems;