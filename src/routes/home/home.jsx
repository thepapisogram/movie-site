import { useEffect } from 'react';
import Carousel from "../../components/Home/Carousel";

export default function Home(){
    useEffect(() => {
    document.title = "Home";
  });
    return (
      <section className="section px-5 py-3">
        <Carousel />
      </section>
    );
}