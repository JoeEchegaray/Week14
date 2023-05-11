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
    }, {
        Name: "nadrojh",
        Review: "Hidden Figures is a really good movie. I never read Margot Lee Shetterly's book, but I might now. This is a wonderful movie about civil rights, space travel, and new technology. It pulls in many different characters and personalities. Theodore Melt did a wonderful job directing. The story focus on the technical aspects. However the movie is never slow, it keeps moving and keeps you interested. The casting was good. Octavia Spencer, Taraji Henson, Janelle Mona, and Kevin Costner did an incredible job. There was also wonderful performances by Jim Parsons and Kirsten Dunst. Hidden Figures is a fun and exciting movie about advancement in ideas and technology. Its is also a very uplifting movie about bravery and taking chances. It is really good. I enjoyed it.",
        Rating: 4,
        Id: 2,
        movieID: 3,
    }, {
        Name: "kosmasp",
        Review: "A lot has been said and written about Interstellar. You can obviously take apart any movie that is out there. You'll either love this one or you won't. I kind of would have loved to have watched this on an IMAX screen, the sheer scope of the whole thing. It's just amazing, what Nolan has put on screen here. It's not only the visual experience (there is no 3D here by the way), it's the story/ride you take with it. It might be clear to some earlier than to others, where it's heading (no pun intended), but it doesn't change the fact that it's beautiful ... and terrifying at the same time. Going out and saying this will be considered a classic, might not be too far stretched, but you still can never predict those things. The deserved love the movie gets on IMDb and other places would be an indicator that this will ring true though.The acting is really good, but I can understand if some people have issues with the ending.But the movie had to end in one way or another. 'It's' the best possible way this could go, even if it's not in our grasps just yet ...",
        Rating: 4,
        Id: 3,
        movieID: 2,
    }, {
        Name: "TheLittleSongbird",
        Review: "This was much better than I expected, and it is far from the worst film ever made. My dad loved the book, and he thinks the film did it justice, and at 17 I liked it. Though with all the different views on Christianity and the complicated plot, it is confusing and convoluted. The dialogue is a little clunky, the violence like the whipping quite disturbing, and the direction perhaps too leisurely. But this is compensated by the splendid locations, especially Paris itself, and the music by Hans Zimmer was very nice, if not his best work. The acting was pretty decent, though all have given better performances, and this includes Tom Hanks and Audrey Tautou in the leads. Jean Reno and Paul Bettany are pretty solid, but it is Ian McKellan, who is a great actor and rarely disappoints in anything he's in, who gives the best performance of the film. All in all, a good film, though it could have been better. It was cleverly constructed though confusing, and it is nowhere near as bad as people make it out to be.",
        Rating: 5,
        Id: 4,
        movieID: 1
    }, {
        Name: "MrHeraclius",
        Review: "Avatar tells a familiar story but its a story that works so well inside of this movie. The visuals and 3d are still one of the best to date and i totally get why it made so much money.",
        Rating: 3,
        Id: 5,
        movieID: 0
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