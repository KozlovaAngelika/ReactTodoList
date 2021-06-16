import React from "react";
import Header from "./../Header/Header";
import SearchPanel from "./../SearchPanel/SearchPanel";
import TodoList from "./../TodoList/TodoList";
import { Container } from "react-bootstrap";

const App = () => {
    const todoData = [
        {
            value: 'Drink coffee',
            important: false,
            id: 1
        },
        {
            value: 'Make enslish hometask',
            important: true,
            id: 2
        },
        {
            value: 'Cook dinner',
            important: true,
            id: 3
        }
    ]
    return (
        <Container className="app">
            <Header />
            <SearchPanel />
            <TodoList todoData={todoData} />
        </Container>
    )
}
export default App;