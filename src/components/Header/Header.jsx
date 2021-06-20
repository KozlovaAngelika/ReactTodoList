import React from "react";
import { Col, Row } from 'react-bootstrap';
import style from "./Header.module.scss"
const Header = ({ doneCount, todoCount }) => {
    return <Row className={style.header}>
        <Col sm={12} md={7} lg={9}><h1>My Todo List</h1></Col>
        <Col sm={12} md={5} lg={3} className={style.counter}><span>{`${todoCount} more to do, ${doneCount} done`}</span></Col>
    </Row>
}
export default Header;