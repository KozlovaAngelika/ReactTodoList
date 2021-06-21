import React from "react";
import { Row } from 'react-bootstrap';
import SearchItems from "./SearchPanel/SearchItems";
import FilterItems from "./FilterItems/FilterItems"
import style from "./ControlPanel.module.scss";

const ControlPanel = ({ searchPhrase, onSearchChange }) => {
    return <Row className={style.controlPanel}>
        <SearchItems searchPhrase={searchPhrase} onSearchChange={onSearchChange} />
        <FilterItems />
    </Row>
}
export default ControlPanel;