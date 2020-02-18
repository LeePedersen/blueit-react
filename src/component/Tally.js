import React from 'react';
import PropTypes from 'prop-types';

function Tally(props) {
  return (
    <div>
      <p>{props.total}</p>
    </div>
  );
}

Tally.propTypes = {
  total: PropTypes.number
}

export default Tally;
