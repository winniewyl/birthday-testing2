import React from 'react';
import './Photo.scss';
import image from './50collage.jpg';
//import Button from '@mui/material/Button';

const Photo = (props) => {
  const clickButton = () => {
    props.onClick(true);
  };

  return (
    <div>
      <div className="photo-wrapper">
        <img
          src={image}
          // alt=""
        />
      </div>
      <div style={wrapperStyle}>
        <button onClick={clickButton} style={buttonStyle}>
          收起
        </button>
        {/* <Button variant="contained" size="large">
          收起
        </Button> */}
      </div>
    </div>
  );
};

const buttonStyle = {
  //   boxSizing: 'border-box',
  color: '#fff',
  backgroundColor: '#3d3d3d',
  borderRadius: '4px',
  width: '100px',
  height: '40px',
  fontSize: '20px',
  //   position: 'relative',
  //   margin: 0,
  //   top: 0,
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
};

const wrapperStyle = {
  //   boxSizing: 'border-box',
  //   position: 'relative',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '50px',
};

export default Photo;
