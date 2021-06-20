import React from "react";
import Header from "./../Header/Header";
import SearchPanel from "./../SearchPanel/SearchPanel";
import TodoList from "./../TodoList/TodoList";
import { Container } from "react-bootstrap";
import { useState } from "react";
import CreateListItem from "./../CreateListItem/CreateListItem"
let id = 1;
const App = () => {
    const initialState = [];
    const [todoData, setTododata] = useState(initialState);
    const deleteItem = (id) => {
        setTododata((todoData) => {
            const itemForDelete = todoData.findIndex(item => item.id === id);
            const newData = [...todoData.slice(0, itemForDelete), ...todoData.slice(itemForDelete + 1)];
            return todoData = newData;
        })
    }
    const doneCount = todoData.filter((item) => item.isDone === true).length;
    const todoCount = todoData.length - doneCount;
    const addItem = (message) => {
        setTododata((todoData) => {
            const newData = todoData.concat([{
                value: message,
                id: id++,
                isDone: false,
                isImportant: false
            }]);
            return newData;
        })
    }
    const updateToggleProperty = (arr, id, propertyForUpdate) => {
        const inx = arr.findIndex((item) => item.id === id);
        const newItem = todoData[inx];
        newItem[propertyForUpdate] = !newItem[propertyForUpdate];
        const newData = arr.slice();
        newData[inx] = newItem;
        return newData;
    }
    const onToggleDone = (id) => {
        setTododata((todoData) => {
            return updateToggleProperty(todoData, id, 'isDone');
        })
    }
    const onToggleImportant = (id) => {
        setTododata((todoData) => {
            return updateToggleProperty(todoData, id, 'isImportant');
        })
    }
    return (
        <Container className="app">
            <Header doneCount={doneCount} todoCount={todoCount} />
            <SearchPanel />
            <TodoList todoData={todoData} onDeleted={deleteItem} onToggleDone={onToggleDone} onToggleImportant={onToggleImportant} />
            <CreateListItem addItem={addItem} />
        </Container>
    )
}
export default App;