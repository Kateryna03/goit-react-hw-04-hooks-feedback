//import React, { Component, Fragment } from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import Section from '../components/Section';
import Expresso from '../components/Expresso';
import Buttons from '../components/Buttons';
import Notification from '../components/Notification';
import './App.css';

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = e => {
    //const textButton = e.target.textContent;
    const { name } = e.target;
    console.log(name);
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  // const buttonsName = e => {
  //   const { name } = e.trget.name;
  //   return name;
  // }
  const countTotalFeedback = () => {
    // return Object.keys(good, neutral, bad).reduce(
    //   (acc, value) => acc + [value],
    //   0,
    // );
    const total = good + neutral + bad;
    return total;
  };
  const totalFeedback = countTotalFeedback();
  const countPositiveFeedbackPercentage = () => {
    const positive = Math.round((good * 100) / totalFeedback);
    console.log(good);
    return !positive ? 0 : positive;
  };

  return (
    <Fragment>
      <Section title="PLEASE LEAVE FEEDBACK">
        <Buttons
          state={['good', 'neutral', 'bad']}
          handleIncrement={handleIncrement}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Expresso
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Section>
    </Fragment>
  );
}

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <Fragment>
//         <Section title="PLEASE LEAVE FEEDBACK">
//           <Buttons state={this.state} handleIncrement={this.handleIncrement} />
//         </Section>
//         <Section title="Statistics">
//           {!this.countTotalFeedback() ? (
//             <Notification message="No feedback given"></Notification>
//           ) : (
//             <Expresso
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback}
//               positiveFeedback={this.countPositiveFeedbackPercentage}
//             />
//           )}
//         </Section>
//       </Fragment>
//     );
//   }
// }
export default App;
