import React from "react";
import { Col, Row, Form } from 'react-bootstrap';
import style from "./SearchPanel.module.scss"
const SearchPanel = () => {
    return <Row>
        <Col xs={4} offset={8}>
            <Form className={style.form}>
                <Form.Control type="text" placeholder="search" />
            </Form>
        </Col>
    </Row>
}
export default SearchPanel;