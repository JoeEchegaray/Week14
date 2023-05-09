import React from "react";
import Movie from "./Movies";


export default function MovieList(props) {
    const movies = [
        {
            Title: "Avatar",
            About: "Random Text 1",
            Photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYK12l6BER5Omfzlc-nopGmTzO1udleH_E3g&usqp=CAU",
            Id: 0,
            Reviews: [],
        }, {
            Title: "Avatar 2",
            About: "Random Text 2",
            Photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJzh3ST8UlqtV2613_4c1lrZWMT7c8Ndfgg&usqp=CAU",
            Id: 1,
            Reviews: [],
        }
    ]
    return (
        <div>
            <Movie movies={movies} />
            <p>
                {props.movie}
            </p>
        </div>
    )
}