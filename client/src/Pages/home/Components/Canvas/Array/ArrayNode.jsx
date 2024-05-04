import React from 'react';

const ArrayNode = () => {
  const handleClickTop = () => {
    console.log('Top rectangle clicked');
    // Add your desired functionality here
  }

  const handleClickBottom = () => {
    console.log('Bottom rectangle clicked');
    // Add your desired functionality here
  }

  const handleClickLeft = () => {
    console.log('Left rectangle clicked');
    // Add your desired functionality here
  }

  const handleClickRight = () => {
    console.log('Right rectangle clicked');
    // Add your desired functionality here
  }

  return (
    <div style={{ width: '300px', height: '300px', border: '1px solid black', position: 'relative' }}>
      <div style={{ width: '100%', height: '25%', position: 'absolute', top: '0', left: '0', backgroundColor: 'red' }} onClick={handleClickTop}></div>
      <div style={{ width: '100%', height: '25%', position: 'absolute', bottom: '0', left: '0', backgroundColor: 'blue' }} onClick={handleClickBottom}></div>
      <div style={{ width: '25%', height: '100%', position: 'absolute', top: '0', left: '0', backgroundColor: 'green' }} onClick={handleClickLeft}></div>
      <div style={{ width: '25%', height: '100%', position: 'absolute', top: '0', right: '0', backgroundColor: 'yellow' }} onClick={handleClickRight}></div>
    </div>
  );
}

export default ArrayNode;
