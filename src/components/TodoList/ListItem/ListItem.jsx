import React from "react";
import { Row } from 'react-bootstrap';
import ItemButtons from "./ItemButtons/ItemButtons";
import ItemTextContent from "./ItemTextContent/ItemTextContent";
import style from "./ListItem.module.scss"
import { useState } from "react";

const ListItem = ({ value, isImportant, isDone, onDeleted, onToggleImportant, onToggleDone }) => {
    return (
        <Row className={style.ListItem}>
            <ItemTextContent value={value} onToggleDone={onToggleDone} isImportant={isImportant} isDone={isDone}></ItemTextContent>
            <ItemButtons onToggleImportant={onToggleImportant} onDeleted={onDeleted} />
        </Row>
    )
}

export default ListItem;