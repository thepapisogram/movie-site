import { useState, useEffect } from "react";
import axios from "axios";
import api_key from "../api";

import Loading from "./Loading";

const popular = [
  "boo bitch",
  "black clover sword of the wizard king",
  "avengers age of ultron",
  "day shift",
  "12 strong",
  "bridgerton",
  "365 days",
  "den of thieves"
];

const Popular = (props) => {
    console.log(props.navigator)
  useEffect(() => {
    document.title = "Movies";
  });
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = popular.map((title) =>
          axios.get(`https://www.omdbapi.com/?apikey=${api_key}&t=${title}`)
        );

        const responses = await Promise.all(requests);

        const responseData = responses.map((response) => response.data);

        setData(responseData);
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <Loading />;
  }
  return (
    <div>
      <h3 className="text-warning">Most Watched</h3>
      <div className="movie-grid mt-3">
        {data.map((item, index) => (
          <div className="shadow" key={index} onClick={ () => props.navigator(item.Title) }>
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

export default Popular;
