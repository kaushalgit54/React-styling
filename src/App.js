import React, {useState} from 'react';
import './App.css';
import CourseGoalsList from './components/courseGoals/courseGoalsList/courseGoalsList';
import CourseInput from './components/courseGoals/courseInput/courseInput';
function App() {

   const [courseGoals, setCourseGoals] = useState([
    {text: 'Do all exercises', id: 'g1'},
    {text: 'Finish the course', id: 'g2'}
   ]);

   let content = (<p style={{textAlign:'center'}}>No goals found. Maybe add one!</p>);
   const addGoalHandler = (enteredText)=>{
     setCourseGoals(prevGoals =>{
       const updateGoals = [...prevGoals];
       updateGoals.unshift({text: enteredText, id : Math.random().toString()});
       return updateGoals;
     });
   }
   const deletItemHandler = (goalId)=>{
      setCourseGoals(prevGoals =>{
        const updatedGoals = prevGoals.filter(goal => goal.id !==  goalId);
        return updatedGoals;
      });
   }

   if(courseGoals.length > 0){
    content = (
      <CourseGoalsList items={courseGoals} onDeleteItem = {deletItemHandler} />
    );
   }
  return (
    <div className="App">
       <div className="goal-form">
         <CourseInput onAddGoal = {addGoalHandler}/>
       </div>
       <div className="goals">
         {content}
       </div>     
    </div>
  );
}

export default App;
