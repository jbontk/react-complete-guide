import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const ErrorModal = (props) => {
  const closeModalHandler = (event) => {
    event.preventDefault();
    props.onClose();
  };

  return (
    <div className={classes.backdrop}>
      <Card className={classes.modal}>
        <div className={classes.header}>
          <h2>{props.header}</h2>
        </div>
        <div className={classes.content}>{props.children}</div>
        <div className={classes.actions}>
          <Button onClick={closeModalHandler}>Close</Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
