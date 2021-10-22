import React from "react";
import PropTypes from "prop-types"
import "../components/movie.css"
import {Link} from "react-router-dom";

function Movie ({id, year, title, summary, poster, genres}){
return <Link 
    to={{
    pathname: "/movie-detail",
    state: {
      year,
      title,
      summary,
      poster,
      genres
    }
  }}> 
<div className="movieBox">
 <h1 className="title">{title} ({year})</h1>
 <img  src={poster} alt={title} title={title}></img>
 <div className="movie">
 <ul >
 {genres.map((genre, index)=>(
     <li key={index}>{genre}</li>
 ))}

{/* map 함수에는 자동으로 index가 들어감 */}
</ul>
<p className="movie__summary">{summary.slice(0, 100)}...</p>
</div>
</div>
</Link>
}

Movie.propTypes ={
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired

};

export default Movie;