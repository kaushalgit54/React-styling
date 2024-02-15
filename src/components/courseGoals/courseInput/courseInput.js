import React, { useState } from 'react';
import './courseInput.css';
import Button from '../../UI/Button/Button';
//Using styled-components
import styled from 'styled-components';

const FormControl = styled.div`

    display: flex;
    flex-direction: column;
    padding: 20px;

& label{
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
    color : ${props => (props.invalid?'red':'black')}
}
& input{
    width: 80%;
    height: 20px;
    border-radius: 5px;
    border: 1px solid ${props => (props.invalid?'red':'black')};
    background-color:${props =>(props.invalid?'#FFCCBA':'transparent')};
}
@media (max-width: 420px){
    & input{
        width:85%;
    }
  }
`;

const CourseInput = (props)=>{
    const [enteredValue, setEnteredValue] = useState('');
   
   const [isValid, setIsValid] = useState(true);
   
    const formSubmitHandler = (event)=>{
        event.preventDefault();
        if(enteredValue.trim().length == 0){
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
        setEnteredValue('');
    };
    const goalInputChangeHanadler = (event)=>{
        if(event.target.value.trim().length > 0){
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };
     return (
        <form onSubmit={formSubmitHandler}>
            <FormControl invalid={!isValid}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHanadler} value={enteredValue}/>
            </FormControl>
            <Button type='submit'>Add Goal</Button>
        </form>
     );
}
export default CourseInput;