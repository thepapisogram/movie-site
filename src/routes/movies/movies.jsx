import "../../assets/movie.css";

const navigatePage = (title) => {
  window.location = `/movies/${title}`;
};

import Popular from "./Popular";
import Animations from './Animations'
import Series from "./Series";

const Movies = () => {
  return (
    <div className="px-4 py-3">
      <Popular navigator={navigatePage} />
      <Animations navigator={navigatePage} />
      <Series navigator={navigatePage} />
    </div>
  );
};

export default Movies;