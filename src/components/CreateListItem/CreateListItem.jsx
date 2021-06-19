import React from "react";
import { useState } from "react";
import { Col, Row, Button, Form } from 'react-bootstrap'
const CreateListItem = ({ addItem }) => {
    const [message, setMessage] = useState();
    const input = React.createRef();
    const changeTextHandle = (event) => {
        setMessage(event.target.value);
    }
    const addItemHandler = () => {
        addItem(message);
        input.current.value = '';
        setMessage('');
    }
    return (
        < Form >
            <Row>
                <Col>
                    <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        ref={input}
                        onChange={changeTextHandle}
                    />
                </Col>
                <Col xs="auto">
                    <Button type="button" className="xs-2" onClick={() => { addItemHandler() }}>
                        Add
                    </Button>
                </Col>
            </Row>
        </Form >
    )
}
export default CreateListItem;