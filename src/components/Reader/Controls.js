import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Controls = ({ length, items, nextPage, prevPage }) => {
  return (
    <section className={styles.controls}>
      <button
        type="button"
        disabled={items === 0}
        className={styles.button}
        onClick={prevPage}
      >
        Назад
      </button>
      <button
        type="button"
        disabled={items === length - 1}
        className={styles.button}
        onClick={nextPage}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  length: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
};

export default Controls;
