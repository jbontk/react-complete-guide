import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
import { Fragment } from 'react';
import rd from 'react-dom';

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onClick} />
);

const ModalOverlay = (props) => (
  <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <p className={classes.content}>{props.message}</p>
    <footer className={classes.actions}>
      <Button onClick={props.onClick}>Close</Button>
    </footer>
  </Card>
);

const ErrorModal = (props) => {
  return (
    <Fragment>
      {rd.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {rd.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onClose}
        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default ErrorModal;
