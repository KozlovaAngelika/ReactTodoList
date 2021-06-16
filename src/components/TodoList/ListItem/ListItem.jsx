import React from "react";
import style from "./ListItem.module.scss"
const ListItem = ({ value, important = false }) => {
    const s = {
        color: important ? 'tomato' : 'black'
    }
    return <div style={s} className={style.ListItem}>{value}</div>
}
export default ListItem;