import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Counter = ({ length, items }) => {
  return (
    <p className={styles.counter}>
      {items + 1} / {length}
    </p>
  );
};

Counter.propTypes = {
  length: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
};

export default Counter;
