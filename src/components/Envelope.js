import React from 'react';
import './Envelope.css';

const Letter = (props) => {
  const handleClick = () => {
    props.onClick();
  };

  return (
    <div>
      <div class="envelope-card">
        <div class="heart" onClick={handleClick}></div>
      </div>
    </div>
  );
};

export default Letter;
