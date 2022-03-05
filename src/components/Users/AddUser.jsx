import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './addUser.module.scss'
import Button from '../UI/Button/button';
import ErrorModal from '../UI/errorModal/errorModal';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


    const usernameChangeHandler = e => {
        setEnteredUsername(e.target.value)
    }
    const ageChangeHandler = e => {
        setEnteredAge(e.target.value)
    }

    const addUserHandler = e => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return;
        }
        if (+enteredAge < 1) {
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

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
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
                        value={enteredUsername}
                        type="text" id='username'
                        onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        value={enteredAge}
                        type="number"
                        id='age'
                        onChange={ageChangeHandler} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser;