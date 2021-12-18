import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const ErrorModal = (props) => {
  const closeModalHandler = (event) => {
    event.preventDefault();
    props.onClose();
  };

  return (
    <>
      <div className={classes.backdrop} onClick={closeModalHandler} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <p className={classes.content}>{props.message}</p>
        <footer className={classes.actions}>
          <Button onClick={closeModalHandler}>Close</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
