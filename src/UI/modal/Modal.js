import Loading from "../loading/Loading";
import {Fragment} from 'react';
import './Modal.css';

const Modal = () => {

    return(
    <Fragment>
        <div className="backdrop">
        <div className="content">
        <Loading />
        </div>
        </div>
    </Fragment>)
}

export default Modal;
