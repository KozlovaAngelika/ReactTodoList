import React from "react";
import { Col, Row, Form } from 'react-bootstrap';
import style from "./SearchPanel.module.scss"
const SearchPanel = ({ searchPhrase, onSearchChange }) => {
    return <Row>
        <Col xs={4} offset={8}>
            <Form className={style.form}>
                <Form.Control type="text" placeholder="search" value={searchPhrase} onChange={(e) => {
                    onSearchChange(e.target.value);
                }} />
            </Form>
        </Col>
    </Row>
}
export default SearchPanel;