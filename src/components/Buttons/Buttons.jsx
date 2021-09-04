import React from 'react';
import PropTypes from 'prop-types';
import styles from './Buttons.module.css';
const Buttons = ({ state, handleIncrement }) => {
  // console.log(name);
  return (
    <ul className={styles.buttonList}>
      {Object.keys(state).map(item => (
        <li className={styles.item} key={item}>
          <button type="button" onClick={handleIncrement}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

Buttons.propTypes = {
  state: PropTypes.object.isRequired,
  handleIncrement: PropTypes.func.isRequired,
};

export default Buttons;
