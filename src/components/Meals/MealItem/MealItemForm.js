import {useRef, useState} from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
    const [counter, setCounter] = useState(0);
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (
            enteredAmount.trim().length === 0 || 
            enteredAmountNumber < 1 || 
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        //props.onAddToCart(enteredAmountNumber);
    };

    const incrementCounter = () => {
        setCounter(counter+1)
        return counter;
    }

    const decrementCounter = () => {
        setCounter(counter-1)
        return counter;
    }

    const increase = () => {
        props.onAdd();
        incrementCounter();
    }

    const decrease = () => {
        props.onRemove();
        decrementCounter();
    }
    
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef} 
                label="Amount"
                input={ {
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    defaultValue: '1',
                }}
            />
            <p>
                <label>Counter</label>
                <span> {counter} </span>
            </p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            {/* <button>+ Add</button> */}
            {/* {!amountIsValid && <p>Please enter a valid amount</p>} */}
        </form>
    )
}

export default MealItemForm;