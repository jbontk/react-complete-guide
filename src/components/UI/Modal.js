import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onClick} />
);

const ModalOverlay = (props) => (
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
);

const portalElement = document.getElementById('overlay-root');
const Modal = (props) => (
  <>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClose} />, portalElement)}
    {ReactDOM.createPortal(
      <ModalOverlay>{props.children}</ModalOverlay>,
      portalElement
    )}
  </>
);

export default Modal;
