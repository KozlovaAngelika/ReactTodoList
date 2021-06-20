import React from "react";
import { Col } from 'react-bootstrap';
import style from "./ItemTextContent.module.scss";

const ItemTextContent = ({ value, onToggleDone, isImportant, isDone }) => {
    return <Col md={10} onClick={onToggleDone} className={`${isDone ? style.done : ''} ${isImportant ? style.important : ''}`}>{value}</Col>
}

export default ItemTextContent;