import React from "react";
import ListItem from "./ListItem/ListItem";
import style from "./TodoList.module.scss"
const TodoList = (props) => {
    const ListElement = props.todoData.map((item) => {
        const { id, ...itemProps } = item;
        return <li key={item.id}><ListItem {...itemProps}></ListItem></li>
    })
    return (
        <ul className={style.list}>
            {ListElement}
        </ul>
    )
}
export default TodoList;