import React from 'react';
import PropTypes from 'prop-types';
//import Notification from '../Notification/Notification';
import styles from './Expresso.module.css';

const Expresso = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div>
      <ul>
        <li className={styles.item}>
          <p>Good:{good}</p>
        </li>
        <li className={styles.item}>
          <p>Neutral:{neutral}</p>
        </li>
        <li className={styles.item}>
          <p>Bad:{bad}</p>
        </li>
        <li className={styles.item}>
          <p>Total:{total()}</p>
        </li>
        <li className={styles.item}>
          <p>
            Positive feedback:
            {positiveFeedback()}%
          </p>
        </li>
        {/* <Notification message={'No feedback given'}></Notification> */}
      </ul>
    </div>
  );
};

Expresso.defaultProps = {
  positiveFeedback: null,
};

Expresso.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positiveFeedback: PropTypes.func.isRequired,
};

export default Expresso;
