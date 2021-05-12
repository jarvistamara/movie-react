import React, { useState } from 'react'

const Add = () => {
    const [query, setQuery] = useState=('')

    const onChange = (e) => {
        e.preventDefault()

        setQuery(e.target.value)

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.APP_KEY}&planguage=en-US&page-1&include_adult=false&query=${e.target.value}`)
        .then((red) => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div className="add-page">
            <div className="container">
                <div className="input-wrapper">
                    <input type="text"
                    placeholder="Search for a Movie"
                    value={query}
                    onChange={onChange}/>
                </div>
            </div>
        </div>
    )
}
export default Add