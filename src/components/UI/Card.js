import styles from './Card.module.css';

const Card = (props) => {
  let className = styles.card;
  if (props.className && props.className.trim().length) className += ` ${props.className}`;
  return <div className={className}>{props.children}</div>;
};

export default Card;
