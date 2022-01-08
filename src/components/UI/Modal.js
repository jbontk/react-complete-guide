import classes from './Modal.module.css';
import Card from './Card';
import rd from 'react-dom';

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onClick} />
);

const ModalOverlay = (props) => (
  <Card className={classes.modal}>
    <header>{props.title}</header>
    <main>{props.children}</main>
  </Card>
);

const Modal = (props) => {
  return (
    <>
      {rd.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {rd.createPortal(
        <ModalOverlay title={props.title}>{props.children}</ModalOverlay>,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default Modal;
