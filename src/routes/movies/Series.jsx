import { useState, useEffect } from "react";
import axios from "axios";
import api_key from "../api";

import Loading from "./Loading";

const series = [
  "the blacklist",
  "titans",
  "teen wolf",
  "vampire diaries",
  "the originals",
  "hawkeye",
  "the sandman",
  "big bang theory"
];

const Series = (props) => {
  console.log(props.navigator);
  useEffect(() => {
    document.title = "Movies";
  });
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = series.map((title) =>
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
    <div className="mt-5">
      <h3 className="text-warning">Series / Seasonal Movies</h3>
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

export default Series;