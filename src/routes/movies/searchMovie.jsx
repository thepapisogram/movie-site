import { useState, useEffect } from "react";
import axios from "axios";
import api_key from "../api";

import Loading from "./Loading";

const SearchMovie = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=${api_key}&s=${props.query}`
        );
        console.log(response.data.Error)
        setData(response.data.Search);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchData();
  }, [props.query]);

  if (!data) {
    if(props.query != ''){
        return <Loading />;
    }else {
      return (
        <div className="text-center my-5 p-5">
          <box-icon name="search-alt" size="lg" color="#6c757d"></box-icon>
          <h3 className="text-muted">Let's find your movie</h3>
        </div>
      );
    }
  }
  return (
    <div>
      <h3 className="text-warning">Results</h3>
      <div className="movie-grid mt-3">
        {data.map((item, index) => (
          <div
            className="shadow"
            key={index}
            onClick={() => props.navigator(item.Title)}
          >
            <img src={item.Poster} alt={item.Title} />
            <p className="text-center text-warning my-1">{item.Title}</p>
            <small className="d-block text-center text-muted mb-3">
              {item.Genre}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchMovie;

// export default function SearchMovie () {
//     return (
//       <>
//         <div id="movie-search-results" className="bg-dark p-5 shadow rounded">
//           <p className="text-info">Hello There</p>
//           <p className="text-info">Hello There</p>
//           <p className="text-info">Hello There</p>
//           <p className="text-info">Hello There</p>
//         </div>
//       </>
//     );
// }
