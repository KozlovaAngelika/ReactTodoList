import React from "react";
import Header from "./../Header/Header";
import TodoList from "./../TodoList/TodoList";
import { Container } from "react-bootstrap";
import { useState } from "react";
import CreateListItem from "./../CreateListItem/CreateListItem";
import ControlPanel from "./../ControlPanel/ControlPanel";
let id = 1;
const App = () => {
    const initialState = [{
        value: 'Drink coffee',
        id: 7859555,
        isDone: false,
        isImportant: false
    }, {
        value: 'Cook dinner',
        id: 7859888885,
        isDone: false,
        isImportant: false
    }];
    const [todoData, setTododata] = useState(initialState);
    const [searchPhrase, setSearchPhrase] = useState('');
    const [filterStatus, setFilterStatus] = useState('all')// all, active, done
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
                value: message ? message : '',
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
    const searchItems = (items, phraseForSearch) => {
        return items.filter((item) => item.value.toLowerCase().indexOf(phraseForSearch.toLowerCase()) > -1);
    }
    const filterItems = (items, filterState) => {
        switch (filterState) {
            case 'all':
                return items;

            case 'active':
                return items.filter((item) => !item.isDone);
            case 'done':
                return items.filter((item) => item.isDone);
            default: return items;
        }
    }

    const visibleData = filterItems(searchItems(todoData, searchPhrase), filterStatus);
    const onSearchChange = (searchPhrase) => {
        setSearchPhrase(searchPhrase);
    }
    return (
        <Container className="app">
            <Header doneCount={doneCount} todoCount={todoCount} />
            <ControlPanel searchPhrase={searchPhrase} onSearchChange={onSearchChange} filterStatus={filterStatus} setFilterStatus={setFilterStatus}></ControlPanel>
            <TodoList todoData={visibleData} onDeleted={deleteItem} onToggleDone={onToggleDone} onToggleImportant={onToggleImportant} />
            <CreateListItem addItem={addItem} />
        </Container>
    )
}
export default App;