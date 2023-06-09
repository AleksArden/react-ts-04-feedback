import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { NumberOfVotes } from 'type/numberOfVotes';

import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const dataFeedback: NumberOfVotes = { good, neutral, bad };

  const countTotalFeedback = (): number => good + neutral + bad;

  const countPositiveFeedbackPercentage = (): number =>
    Math.round((good * 100) / countTotalFeedback());

  const handleClick = ({ currentTarget: { name } }: React.MouseEvent<HTMLButtonElement>): void => {

    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  
  return (
    <div className={css.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(dataFeedback)}
          onLeaveFeedback={handleClick}
        />
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            dataFeedback={dataFeedback}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};
