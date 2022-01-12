import React from 'react';
import ReactPlayer from 'react-player';
import './GiftBox.scss';

const Video = (props) => {
  const clickButton = () => {
    props.onClick(true);
  };

  return (
    <>
      <div class="container" style={videoStyle}>
        <ReactPlayer
          width="450px"
          height="300px"
          controls
          playing
          url="https://youtu.be/BndNkXjR7wY"
        />
      </div>
      <div style={wrapperStyle}>
        <button onClick={clickButton} style={buttonStyle}>
          返回
        </button>
      </div>
    </>
  );
};

const buttonStyle = {
  color: '#3d3d3d',
  backgroundColor: '#9370DB',
  borderRadius: '4px',
  width: '100px',
  height: '40px',
  fontSize: '20px',
  fontWeight: 'bold',
};

const wrapperStyle = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '50px',
};

const videoStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '150px',
};

export default Video;
