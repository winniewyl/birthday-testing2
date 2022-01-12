import React from 'react';
import './TV.css';

const TV = (props) => {
  const handleClick = () => {
    props.onClick();
  };

  return (
    <div>
      <div className="tv-container" onClick={handleClick}>
        <div class="tv">
          <input type="checkbox"></input>
          <div class="speaker">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="slot"></div>
          <div class="antenna">
            <div class="a"></div>
            <div class="a"></div>
          </div>
          <div class="stand1"></div>
          <div class="stand2"></div>
        </div>
      </div>
    </div>
  );
};

export default TV;
