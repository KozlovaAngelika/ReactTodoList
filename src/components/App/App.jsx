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
    const addItem = (message) => {
        setTododata((todoData) => {
            const newData = todoData.concat([{
                value: message,
                important: false,
                id: id++
            }]);
            return newData;
        })
    }
    return (
        <Container className="app">
            <Header />
            <SearchPanel />
            <TodoList todoData={todoData} onDeleted={deleteItem} />
            <CreateListItem addItem={addItem} />
        </Container>
    )
}
export default App;