
// import { useState } from 'react';
import './AnchorPoint.css'
import PropTypes from 'prop-types';

const AnchorPoint = ({ x, y }) => {
  //for future use
  //const [connectionPoint, setConnectionPoint] = useState({x: x, y: y});

  return (
    <div className='point' style={{ left: x, top: y }}>
    </div>
  );
}
AnchorPoint.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};
export default AnchorPoint;
