import React from "react";
import MovieList from "./MovieList";
import ReviewForm from "./ReviewForm";
import { useState } from "react";


export default function Movie(props) {

    const [allReviews, setAllReviews] = useState([{
        Name: "yoggwork",
        Review: "A very low-key and introverted film. The structure of the film is very clever, the most moving flight process is scattered in the middle of the film, constantly re-enacted fragments to enhance the heat. But from another point of view, the story of the film is very simple, it can be said that the plot has no depth, especially reflected in the final hearing, a sentence to achieve a big turnaround. After watching it, there was even a feeling that it was a documentary rather than a commercial movie.",
        Rating: "4",
        Id: 1,
        movieID: 4,
    }])
    console.log(props.movies.Reviews)
    function addReview(review) {
        setAllReviews([...allReviews, review])
    }

    return (
        console.log(props.movies),
        <>
            {props.movies.map(movie => (
                <div key={movie.Id}>
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
                                        <div className="card-footer">
                                            <h3>Reviews</h3>
                                            {allReviews.filter(Review => (Review.movieID == movie.Id)).map(review => (
                                                <div key={review.Id}>
                                                    <p className="blockquote card-text">{review.Review}</p>
                                                    <p className="blockquote-footer card-text">User: {review.Name} Rating: {review.Rating}/5</p>
                                                </div>
                                            ))}
                                            <h3 className="mt-3">Leave your Review!</h3>
                                            <ReviewForm onSubmit={addReview} movieID={movie.Id} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >

                </div>
            ))}
        </>
    )
}