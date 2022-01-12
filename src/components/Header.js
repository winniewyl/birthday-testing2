import react from 'react';
import './Header.scss';

const Header = ({ title }) => {
  return (
    <div>
      {/* <h1>Hello, world!</h1> */}
      <h1 style={fontStyle}>
        今天是2022年1月13号
        <br />
        请点击查收你的生日礼物👇👀🎁
        {/* {this.state.date.toLocaleTimeString()} */}
      </h1>
    </div>
  );
};

const fontStyle = {
  color: '#e85a4f',
  paddingLeft: '100px',
  fontFamily: 'Gill Sans, sans-serif',
  fontSize: '70px',
  font: 'bold',
};

// const headingStyle = {
//   color: '#e85a4f',
//   paddingLeft: '100px',
//   fontFamily: 'Gill Sans, sans-serif',
//   fontSize: '50px',
//   font: 'bold',
// };

// Header.defaultProps = {
//   title: ' default title',
// };

export default Header;
