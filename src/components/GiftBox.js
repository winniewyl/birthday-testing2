import React from 'react';
import './GiftBox.scss';

const GiftBox = (props) => {
  const handleClick = () => {
    console.log('box is clicked');
    props.onClick(false);
  };

  return (
    <div>
      <div class="gift" onClick={handleClick}>
        <div class="linehead">
          <div class="lineheadone"></div>
          <div class="lineheadtwo"></div>
        </div>
        <div class="headside"></div>
        <div class="headline"></div>
        <div class="bottomline"></div>
        <div class="bottomside"></div>
      </div>
    </div>
  );
};

export default GiftBox;

// import React from 'react';
// import './GiftBox.css';

// const GiftBox = (props) => {
//   const handleClick = () => {
//     console.log('box is clicked');
//     props.onClick(false);
//   };

//   return (
//     <div class="container">
//       <div class="gift" onClick={handleClick}>
//         <div class="cover"></div>
//       </div>
//     </div>
//   );
// };

// export default GiftBox;
