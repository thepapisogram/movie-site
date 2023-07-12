import { useState } from 'react';

import SearchMovie from "./movies/searchMovie";

const navigatePage = (title) => {
  window.location = `/movies/${title}`;
};

export default function Search(){

    const [query, setQuery] = useState('');

    const updateQuery = (event) => {
      setQuery(event.target.value)
    }

    return (
      <section className="section px-5 py-3">
        <div className="input-group p-5">
          <input
            id="movie-search"
            className="shadow"
            type="text"
            value={query}
            onChange={updateQuery}
            placeholder="Search for Movies..."
          />
        </div>
        <SearchMovie navigator={navigatePage} query={query} />
      </section>
    );
}