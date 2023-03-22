import css from './Section.module.css';

interface IProps {
  title: string,
  children: React.ReactNode,
}

export const Section = ({ title, children }: IProps) => {
  return (
    <>
      <h2 className={css.title}>{title}</h2>
      {children}
    </>
  );
};
