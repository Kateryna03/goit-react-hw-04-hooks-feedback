import React, { Component, Fragment } from 'react';
import Section from '../components/Section';
import Expresso from '../components/Expresso';
import Buttons from '../components/Buttons';
import Notification from '../components/Notification';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const textButton = e.target.textContent;
    // console.log(textButton);

    this.setState(prevState => ({
      [textButton]: prevState[textButton] + 1,

      // good: prevState.good + 1,
      // neutral: prevState.neutral + 1,
      // bad: prevState.bad + 1,
    }));
    // console.log([textButton]);
  };
  countTotalFeedback = e => {
    // const target = e.target.value;
    // console.log(target);
    return Object.keys(this.state).reduce(
      (acc, value) => acc + this.state[value],
      0,
    );
    //   let sum = 0;
    //   for (let value of Object.values(this.state)) {
    //     sum += value;
    //   }

    //   return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const positive = Math.round(
      (this.state.good * 100) / this.countTotalFeedback(),
    );
    console.log(positive);
    // if (!positive) {
    //   return 0;
    // } else {
    //   return positive;
    // }
    return !positive ? 0 : positive;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Fragment>
        <Section title="PLEASE LEAVE FEEDBACK">
          <Buttons state={this.state} handleIncrement={this.handleIncrement} />
        </Section>
        <Section title="Statistics">
          {!this.countTotalFeedback() ? (
            <Notification message="No feedback given"></Notification>
          ) : (
            <Expresso
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positiveFeedback={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </Fragment>
    );
  }
}
export default App;
