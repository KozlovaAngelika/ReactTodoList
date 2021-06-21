import React from "react";
import { Col, Row, Form } from 'react-bootstrap';
import style from "./SearchItems.module.scss"
const SearchItems = ({ searchPhrase, onSearchChange }) => {
    return <Col xs={4} >
        <Form className={style.form}>
            <Form.Control type="text" placeholder="search" value={searchPhrase} onChange={(e) => {
                onSearchChange(e.target.value);
            }} />
        </Form>
    </Col>

}
export default SearchItems;