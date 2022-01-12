import React from 'react';
import './Letter.scss';

const Letter = (props) => {
  const clickButton = () => {
    props.onClick(true);
  };
  return (
    <div>
      <div class="card">
        <div class="card__wrapper">
          <div contenteditable="true" class="card__message">
            西装、卷发、大眼眶、尖细的嗓门和敦实的身材、没话找话的闲聊，人生何必如初见，但求相看两不厌。
            执手之间，光阴的长廊把你的事无巨细变成了我们的依靠。敏感虽然有时会是牵跘，距离却让思想变得开阔。
            局限是一种禁锢，“求同存异”和“改造”如今看来似乎也并不是水火不容的两个词。偶尔的浪漫点缀了无数的柴米油盐。
            即便曲高和寡与笔墨纸砚不知在何处才能相交，但这些都不影响飞机声轰鸣的远方连着守望的牵挂。
            清澈的眼神虽然渐渐迷朦，但独自一人的晨昏常让我幸运我有个我们。千禧年之初至今每年的这一天，你都在我们身边。
            2022的岁末年初，虽然一人一城，但物理的波长让天涯成为了咫尺。怀着对生活的热爱，所有的出走都是为了更好的归来。
            亲爱的，生日快乐!
          </div>
        </div>
      </div>
      <div style={wrapperStyle}>
        <button onClick={clickButton} style={buttonStyle}>
          折叠
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  color: '#3d3d3d',
  backgroundColor: '#dbcfb4',
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
export default Letter;
