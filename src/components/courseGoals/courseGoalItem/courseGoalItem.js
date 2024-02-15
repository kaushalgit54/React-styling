import './courseGoalItem.css';

const CourseGoalItem = (props)=>{

    const deleteHandler = ()=>{
        props.onDelete(props.id);
        console.log('cliked delete');
        
    }
    return (
        <li className="goal-item" onClick={deleteHandler}>{props.children}</li>
    );
}
export default CourseGoalItem;