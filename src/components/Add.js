import React, { useState } from "react"
import ResultCard from "./ResultCard"

const Add = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [queryLength, setQueryLength] = useState('')
  
  const handleClick = (e) => {
    e.preventDefault()
    setQuery(e.target.value)

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.APP_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      })
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <form className="submit-wrapper">
            <input type="text" placeholder="Search for a movie" value={query}/>
            <button className="submit-btn" onClick={handleClick()}>Submit</button>
            </form>
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Add