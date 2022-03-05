import React from 'react';
import ReactDOM from 'react-dom';
import classes from './errorModal.module.scss'
import Card from '../Card';
import Button from '../Button/button';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.errorHandler}></div>
}

const ModalOverlay = props => {
    return <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.errorHandler}>Close Modal</Button>
        </footer>
    </Card>
}

const ErrorModal = props => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop errorHandler={props.errorHandler} />,
                document.getElementById("backdrop-root"))
            }

            {
                ReactDOM.createPortal(
                    <ModalOverlay title={props.title} message={props.message} onClick={props.onClick} />,
                    document.getElementById('modal-root')
                )
            }


        </>
    )
}

export default ErrorModal;