import React from "react";
import Button from "../button/Button";

const HeroContents = ({ featuredData, onClick }) => {
  return (
    <div className='hero-content'>
      <h1>{featuredData.Title}</h1>
      <div className='hero-content-info'>
        <p>{featuredData.ReleaseYear}</p>
        <p>{featuredData.Duration}h</p>
        <p>{featuredData.MpaRating}</p>
      </div>
      <div className='hero-content-desc'>
        <p>{featuredData.Description}</p>
      </div>

      <div className='hero-content-btns'>
        <Button showIcon={true} children='Play' type='play' onClick={onClick} />
        <Button children='More info' type='more' />
      </div>
    </div>
  );
};

export default HeroContents;
