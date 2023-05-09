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
                <div className="container">
                    <div className="row my-3 mx-auto">
                        <div className="col-lg">
                            <div className="card mx-auto mb-5" style={{ width: "60rem" }}>
                                <img className="card-img-top mt-2 mx-auto" src={movie.Photo} style={{ width: "auto", height: "25rem" }} />
                                <div className="card-header mt-1">
                                    <h2 className="card-title mx-auto mt-3">{movie.Title}</h2>
                                    <h4 className="card-subtitle mx-auto">{movie.Year}</h4>
                                </div>
                                <div className="card-body mx-auto">
                                    <p className="card-text">{movie.About}</p>
                                    <h3>Reviews</h3>
                                    <p className="card-text">{movie.Reviews.Username}</p>
                                    <p className="card-text">{movie.Reviews.Review}</p>
                                    <p className="card-text">{movie.Reviews.Rating}</p>
                                    <div className="card-footer">
                                        <h3>Leave your Review!</h3>
                                        <ReviewForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            ))
            }
        </>
    )
}