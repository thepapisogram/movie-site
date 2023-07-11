import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import api_key from "../api";

import Loading from "./Loading";

const Movie = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    document.title = `${id}`;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=${api_key}&t=${id}&plot=full`
        );
        setData(response.data);
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };

    fetchData();
  }, []);



  // useEffect(() => {
  //   document.title = `Movie - ${data.Title}`;
  // });

  if (!data) {
    return <Loading />
  }
  return (
    <div className="px-4 py-3">
      {data.Error === "Movie not found!" && (
        <div className="p-5 text-center my-5" id="movie-not-found">
          <h1 className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80px"
              height="80px"
              fill="#ffc107"
              className="bi bi-exclamation-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </h1>
          <h1 className="text-warning">Movie Not Found</h1>
          <p className="text-muted">We could not find `{id}`</p>
          <a className="text-warning text-decoration-none" href="/">
            Return to Homepage
          </a>
        </div>
      )}
      {data.Error !== "Movie not found!" && (
        <div className="movie-head">
          <h1 className="text-warning">{data.Title}</h1>
          <p className="text-muted">{data.Genre}</p>
          <div className="row m-0" id="movie-grid-1">
            <div className="d-flex justify-content-start m-0 p-0 col-12 col-xl-4">
              <img
                className="movie-poster shadow"
                src={data.Poster}
                alt={data.Title}
              />
            </div>
            <div className="col-12 col-xl-8 p-0">
              <p className="lead my-0 text-warning">Summary</p>
              <span className="d-block text-muted mb-3">{data.Writer}</span>
              <p className="lead text-light">{data.Plot}</p>
              <div>
                <p className="lead text-warning mb-0">Available Languages</p>
                <p className="text-light">{data.Language}</p>
              </div>
              <div>
                <p className="lead text-warning mb-0">Actors</p>
                <p className="text-light">{data.Actors}</p>
              </div>
              <div>
                <p className="lead text-warning mb-0">Awards</p>
                <p className="text-light">{data.Awards}</p>
              </div>
              <div className="row m-0">
                <div className="col-12 ml-0 p-0">
                  <p className="lead text-warning">Additional Info</p>
                </div>
                <div className="col bg-dark text-warning rounded text-center">
                  Released {data.Year}
                </div>
                <div className="col bg-dark mx-1 text-warning rounded text-center">
                  {data.Runtime}
                </div>
                <div className="col bg-dark text-warning rounded text-center">
                  Rated {data.Rated}
                </div>
                <div className="col bg-dark mx-1 text-warning rounded text-center">
                  Rating {data.imdbRating}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
