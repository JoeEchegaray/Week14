import React from "react";
import MovieList from "./MovieList";
import Card from 'react-bootstrap/Card';
import ReviewForm from "./ReviewForm";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Movie(props) {
    return (
        console.log(props.movies),
        <>
            {props.movies.map(movie => (
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <Card style={{ width: "25rem" }}>
                                <Card.Img variant="top" src={movie.Photo} />
                                <Card.Header>
                                    <Card.Title>{movie.Title}</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {movie.About}
                                    </Card.Text>
                                    <ReviewForm />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ))
            }
        </>
    )
}