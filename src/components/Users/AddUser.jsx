import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import classes from './addUser.module.scss'
import Button from '../UI/Button/button';
import ErrorModal from '../UI/errorModal/errorModal';

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


    // const usernameChangeHandler = e => {
    //     setEnteredUsername(e.target.value)
    // }
    // const ageChangeHandler = e => {
    //     setEnteredAge(e.target.value)
    // }

    const addUserHandler = e => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            })
            return;
        }
        // console.log(enteredUsername, enteredAge);
        // const usersData = {
        //     username: enteredUsername,
        //     age: enteredAge
        // }

        props.onAddUser(enteredName, enteredUserAge);
        enteredName = '';
        enteredUserAge = ''
    }

    const errorHandler = () => {
        setError(null);
    }


    return (
        <>
            {error && <ErrorModal errorHandler={errorHandler} title={error.title} message={error.message} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        // value={enteredUsername}
                        type="text"
                        id='username'
                        //onChange={usernameChangeHandler} 
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        // value={enteredAge}
                        type="number"
                        id='age'
                        //  onChange={ageChangeHandler}
                        ref={ageInputRef}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser;