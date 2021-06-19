import React from "react";
import { Row } from 'react-bootstrap';
import ItemButtons from "./ItemButtons/ItemButtons";
import ItemTextContent from "./ItemTextContent/ItemTextContent";
import style from "./ListItem.module.scss"
import { useState } from "react";

const ListItem = ({ value, onDeleted }) => {
    const [isDone, setIsDone] = useState(false);
    const [isImportant, setIsImportant] = useState(false);
    const isDoneHandler = (event) => {
        setIsDone((isDone) => {
            return isDone = !isDone;
        });
    }
    const isImportantHandler = () => {
        setIsImportant((isImportant) => {
            return isImportant = !isImportant;
        })
    }
    return (
        <Row className={style.ListItem}>
            <ItemTextContent value={value} isDoneHandler={isDoneHandler} isDone={isDone} isImportant={isImportant}></ItemTextContent>
            <ItemButtons isImportantHandler={isImportantHandler} onDeleted={onDeleted} />
        </Row>
    )
}

export default ListItem;