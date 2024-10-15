import React, { useState, useEffect } from "react";
import Data from "../../data.json";
import Slider from "../slider/Slider";
import HeroContents from "./HeroContents";
import "./Hero.css";

const Hero = () => {
  const [featuredData, setFeaturedData] = useState(Data.Featured);
  const [tendings, setTendings] = useState(Data.TendingNow);
  const [videoBackground, setVideoBackground] = useState(false);
  const [animatedMovieId, setAnimatedMovieId] = useState(null);

  useEffect(() => {
    const trendingMovies = Data.TendingNow;
    const lastClickedId = sessionStorage.getItem("lastClickedMovieId");

    if (lastClickedId) {
      const lastClickedMovie = trendingMovies.find(
        (movie) => movie.Id === lastClickedId
      );

      if (lastClickedMovie) {
        setFeaturedData(lastClickedMovie);
        const sortedTendings = [
          lastClickedMovie,
          ...trendingMovies.filter((movie) => movie.Id !== lastClickedId)
        ];
        setTendings(sortedTendings);
      } else {
        setTendings(trendingMovies);
      }
    } else {
      setTendings(trendingMovies);
    }

    const timer = setTimeout(() => {
      setVideoBackground(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = (selectedItem) => {
    setVideoBackground(false);
    setAnimatedMovieId(selectedItem.Id);

    setTimeout(() => {
      setFeaturedData(selectedItem);
      sessionStorage.setItem("lastClickedMovieId", selectedItem.Id);

      setTendings((prevTendings) => {
        const updatedTendings = prevTendings.filter(
          (movie) => movie.Id !== selectedItem.Id
        );
        return [selectedItem, ...updatedTendings];
      });

      setTimeout(() => {
        setVideoBackground(true);
      }, 2000);
    }, 200);
  };

  return (
    <div className='hero'>
      {videoBackground ? (
        <div className='video-background'>
          <video autoPlay loop muted>
            <source
              src={`src/assets/${featuredData.VideoUrl}`}
              type='video/mp4'
            />
            Browser doesn't support the video tag.
          </video>
        </div>
      ) : (
        <img
          src={`src/assets/${featuredData.CoverImage}`}
          alt='Hero'
          className='hero-image'
        />
      )}
      <div className='hero-overlay'></div>
      <HeroContents
        featuredData={featuredData}
        onClick={() => setVideoBackground(true)}
      />
      <div className='tending-films'>
        <Slider
          handleImageClick={handleImageClick}
          tendings={tendings}
          animatedMovieId={animatedMovieId}
        />
      </div>
    </div>
  );
};

export default Hero;
