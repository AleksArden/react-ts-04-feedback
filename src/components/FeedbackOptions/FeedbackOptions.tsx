import css from './FeedbackOptions.module.css';

interface IProps {
  options: Array<string>,
  onLeaveFeedback: (evt: React.MouseEvent<HTMLButtonElement>) => void
}

export const FeedbackOptions = ({ options, onLeaveFeedback }: IProps) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li key={option}>
          <button
            className={css.button}
            name={option}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

