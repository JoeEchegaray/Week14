import React from "react";
import Movie from "./Movies";


export default function MovieList(props) {
    const movies = [
        {
            Title: "Avatar",
            Year: "2009",
            About: "When his brother is killed in a robbery, paraplegic Marine Jake Sully decides to take his place in a mission on the distant world of Pandora. There he learns of greedy corporate figurehead Parker Selfridge's intentions of driving off the native humanoid 'Na'vi' in order to mine for the precious material scattered throughout their rich woodland. In exchange for the spinal surgery that will fix his legs, Jake gathers knowledge, of the Indigenous Race and their Culture, for the cooperating military unit spearheaded by gung-ho Colonel Quaritch, while simultaneously attempting to infiltrate the Na'vi people with the use of an 'Avatar' identity. While Jake begins to bond with the native tribe and quickly falls in love with the beautiful alien Neytiri, the restless Colonel moves forward with his ruthless extermination tactics, forcing the soldier to take a stand - and fight back in an epic battle for the fate of Pandora.",
            Photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ahQEHQmX4a5vtnZ2xCTTL2UIfWpHfXT8kw&usqp=CAU",
            Id: 0,
            Reviews: [{
                Name: "MrHeraclius",
                Review: "Avatar tells a familiar story but its a story that works so well inside of this movie. The visuals and 3d are still one of the best to date and i totally get why it made so much money.",
                Rating: 3,
            }],
        }, {
            Title: "The Da Vinci Code",
            Year: "2006",
            About: "Dan Brown's controversial best-selling novel about a powerful secret that's been kept under wraps for thousands of years comes to the screen in this suspense thriller from Director Ron Howard. The stately silence of Paris' Louvre museum is broken when one of the gallery's leading curators is found dead on the grounds, with strange symbols carved into his body and left around the spot where he died. Hoping to learn the significance of the symbols, police bring in Sophie Neveu (Audrey Tautou), a gifted cryptographer who is also the victim's granddaughter. Needing help, Sophie calls on Robert Langdon (Tom Hanks), a leading symbologist from the United States. As Sophie and Robert dig deeper into the case, they discover the victim's involvement in the Priory of Sion, a secret society whose members have been privy to forbidden knowledge dating back to the birth of Christianity. In their search, Sophie and Robert happen upon evidence that could lead to the final resting place of the Holy Grail, while members of the priory and an underground Catholic society known as Opus Dei give chase, determined to prevent them from sharing their greatest secrets with the world.",
            Photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfHyRSVddlDO2I_3oOgCLssHwr3vFYmE-JQ&usqp=CAU",
            Id: 1,
            Reviews: [{
                Name: "TheLittleSongbird",
                Review: "This was much better than I expected, and it is far from the worst film ever made. My dad loved the book, and he thinks the film did it justice, and at 17 I liked it. Though with all the different views on Christianity and the complicated plot, it is confusing and convoluted. The dialogue is a little clunky, the violence like the whipping quite disturbing, and the direction perhaps too leisurely. But this is compensated by the splendid locations, especially Paris itself, and the music by Hans Zimmer was very nice, if not his best work. The acting was pretty decent, though all have given better performances, and this includes Tom Hanks and Audrey Tautou in the leads. Jean Reno and Paul Bettany are pretty solid, but it is Ian McKellan, who is a great actor and rarely disappoints in anything he's in, who gives the best performance of the film. All in all, a good film, though it could have been better. It was cleverly constructed though confusing, and it is nowhere near as bad as people make it out to be.",
                Rating: 5,
            }],
        }, {
            Title: "Interstellar",
            Year: "2014",
            About: "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.",
            Photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScoHafkRCRKFm7eAgXnG6hfplU4O-zG5Cjew&usqp=CAU",
            Id: 2,
            Reviews: [{
                Name: "kosmasp",
                Review: "A lot has been said and written about Interstellar. You can obviously take apart any movie that is out there. You'll either love this one or you won't. I kind of would have loved to have watched this on an IMAX screen, the sheer scope of the whole thing. It's just amazing, what Nolan has put on screen here. It's not only the visual experience (there is no 3D here by the way), it's the story/ride you take with it. It might be clear to some earlier than to others, where it's heading (no pun intended), but it doesn't change the fact that it's beautiful ... and terrifying at the same time. Going out and saying this will be considered a classic, might not be too far stretched, but you still can never predict those things. The deserved love the movie gets on IMDb and other places would be an indicator that this will ring true though.The acting is really good, but I can understand if some people have issues with the ending.But the movie had to end in one way or another. 'It's' the best possible way this could go, even if it's not in our grasps just yet ...",
                Rating: 4,
            }],
        }, {
            Title: "Hidden Figures",
            Year: "2016",
            About: "As the United States raced against Russia to put a man in space, NASA found untapped talent in a group of African-American female mathematicians that served as the brains behind one of the greatest operations in U.S. history. Based on the unbelievably true life stories of three of these women, known as 'human computers', we follow these women as they quickly rose the ranks of NASA alongside many of history's greatest minds specifically tasked with calculating the momentous launch of astronaut John Glenn into orbit, and guaranteeing his safe return. Dorothy Vaughan, Mary Jackson, and Katherine Gobel crossed all gender, race, and professional lines while their brilliance and desire to dream big, beyond anything ever accomplished before by the human race, firmly cemented them in U.S. history as true American heroes.",
            Photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPkWezY4FYBIuybWj9N2VMMeN7E07foEuHA&usqp=CAU",
            Id: 3,
            Reviews: [{
                Name: "nadrojh",
                Review: "Hidden Figures is a really good movie. I never read Margot Lee Shetterly's book, but I might now. This is a wonderful movie about civil rights, space travel, and new technology. It pulls in many different characters and personalities. Theodore Melt did a wonderful job directing. The story focus on the technical aspects. However the movie is never slow, it keeps moving and keeps you interested. The casting was good. Octavia Spencer, Taraji Henson, Janelle Mona, and Kevin Costner did an incredible job. There was also wonderful performances by Jim Parsons and Kirsten Dunst. Hidden Figures is a fun and exciting movie about advancement in ideas and technology. Its is also a very uplifting movie about bravery and taking chances. It is really good. I enjoyed it.",
                Rating: 4,
            }],
        }, {
            Title: "Sully",
            Year: "2016",
            About: "On Thursday, January 15, 2009, the world witnessed the 'Miracle on the Hudson' when pilot Chesley 'Sully' Sullenberger glided his disabled plane onto the frigid waters of the Hudson River, saving the lives of all one hundred fifty-five aboard. However, even as Sully was being heralded by the public and the media for his unprecedented feat of aviation skill, an investigation was unfolding that threatened to destroy his reputation and his career.",
            Photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAq0eSpC9uTOJ7V9iVy5SsTMoFag9J6S8Cg&usqp=CAU",
            Id: 4,
            Reviews: [{
                Name: "yoggwork",
                Review: "A very low-key and introverted film. The structure of the film is very clever, the most moving flight process is scattered in the middle of the film, constantly re-enacted fragments to enhance the heat. But from another point of view, the story of the film is very simple, it can be said that the plot has no depth, especially reflected in the final hearing, a sentence to achieve a big turnaround. After watching it, there was even a feeling that it was a documentary rather than a commercial movie.",
                Rating: "4",
            }],
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