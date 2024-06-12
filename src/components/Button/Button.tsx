import cn from 'classnames';
import './button.css';

type ButtonProps = {
  content: string;
  classes: string;
};

export const Button = (props: ButtonProps) => {
  const classNames = cn(props.classes);
  return <button className={classNames}>{props.content}</button>;
};
