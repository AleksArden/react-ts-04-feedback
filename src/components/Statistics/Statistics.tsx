import { NumberOfVotes } from 'type/numberOfVotes';

import css from './Statistics.module.css';

interface IProps {
  total: number,
  positivePercentage: number,
  dataFeedback: NumberOfVotes,
}

export const Statistics = ({ total, positivePercentage, dataFeedback }: IProps) => {
  return (
    <>
      <h3 className={css.title}>Statistics</h3>
      <ul className={css.list}>
        {Object.entries(dataFeedback).map(item => (
          <li key={item[0]}>
            <p>
              {item[0]}: {item[1]}
            </p>
          </li>
        ))}
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback: {positivePercentage || 0}%</p>
        </li>
      </ul>
    </>
  );
};
