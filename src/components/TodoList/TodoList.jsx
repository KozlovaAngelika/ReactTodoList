import React from "react";
import ListItem from "./ListItem/ListItem";
import style from "./TodoList.module.scss"
import { Col, Row } from 'react-bootstrap';
const TodoList = (props) => {
    const ListElements = props.todoData.map((item) => {
        const { id, ...itemProps } = item;
        return <li key={item.id}><ListItem {...itemProps} onDeleted={() => { props.onDeleted(id) }}></ListItem></li>
    })
    return (
        <Row className={style.listElements}>
            <Col>
                <ul className={style.list}>
                    {ListElements}
                </ul>
            </Col>
        </Row>
    )
}
export default TodoList;