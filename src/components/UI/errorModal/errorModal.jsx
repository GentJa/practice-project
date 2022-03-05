import React from 'react';
import classes from './errorModal.module.scss'
import Card from '../Card';
import Button from '../Button/button';

const ErrorModal = props => {
    return (
        <>
            <div className={classes.backdrop} onClick={props.errorHandler}></div>
            <Card className={classes.modal}>
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
        </>
    )
}

export default ErrorModal;