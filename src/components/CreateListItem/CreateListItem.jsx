import React from "react";
import { useState } from "react";
import { Col, Row, Button, Form } from 'react-bootstrap'
const CreateListItem = ({ addItem }) => {
    const [message, setMessage] = useState();
    const input = React.createRef();
    const changeTextHandle = (event) => {
        setMessage(event.target.value.toUpperCase());
    }
    const addItemHandler = () => {
        addItem(message);
        setMessage('');
    }
    return (
        < Form onSubmit={(e) => {
            e.preventDefault();
            addItemHandler()
        }
        }>
            <Row>
                <Col>
                    <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        value={message}
                        onChange={changeTextHandle}
                    />
                </Col>
                <Col xs="auto">
                    <Button type="submit" className="xs-2" >
                        Add
                    </Button>
                </Col>
            </Row>
        </Form >
    )
}
export default CreateListItem;