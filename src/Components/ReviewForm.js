import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Rating } from "@mui/material";

export default function ReviewForm(props) {
    const [formValues, setFormValues] = useState({ userName: "", reviewContent: "" })
    const handleChange = (event) => setFormValues({
        ...formValues,
        [event.target.name]: event.target.value
    })
    return (

        <Form>
            <Form.Group as={Row} className="mb-3" controlId="userName">
                <Form.Label column sm={2}>
                    Name
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="reviewContent">
                <Form.Label column sm={2}>
                    Your Review
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Your Review" />
                </Col>
            </Form.Group>

            <Rating />

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Col>
            </Form.Group>
        </Form>
    );
}

