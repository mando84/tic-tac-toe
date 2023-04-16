//import { useDispatch } from 'react-redux'
//import { deleteRecord } from '../features/goals/goalSlice'

function GoalItem({ record }) {
  return (
    <div className="goal">
      <div>{new Date(record.createdAt).toLocaleString("en-US")}</div>
      <h2>{record.text}</h2>
    </div>
  );
}

export default GoalItem;
