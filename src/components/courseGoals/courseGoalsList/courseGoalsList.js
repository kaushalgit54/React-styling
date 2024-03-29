import './courseGoalsList.css';
import CourseGoalItem from '../courseGoalItem/courseGoalItem';
const CourseGoalsList = props =>{
    return (
       <ul className="goal-list">
        {props.items.map(goal =>(
         <CourseGoalItem
         key = {goal.id}
         id={goal.id}
         onDelete={props.onDeleteItem}
        >
           {goal.text} 
           </CourseGoalItem>
        ))}
       </ul>
    );
} 
export default CourseGoalsList;