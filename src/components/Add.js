import React, { useEffect, useState } from "react"
import ResultCard from "./ResultCard"

const Add = () => {

  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])
  
  useEffect(() => {

  })
    
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.APP_KEY}&language=en-US&page=1&include_adult=false&query=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      })
  

  const updateSearch = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
           <form className="form">
             <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
             <button className="search-btn" type="submit">
               Search
             </button>
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