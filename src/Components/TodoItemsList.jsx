import { useSelector, useDispatch} from 'react-redux';
import { setList } from '../redux/TodoReducer';



function TodoItemsList(){

    let state = useSelector((state) => state.todo);

    let dispatch = useDispatch();
    // console.log(state.listItems);
    // console.log(state.listItems.filter(el => el != item))
let todos = state.listItems.map((item) => <div><div>{item}</div><button onClick={() => (dispatch(setList(state.listItems.filter(el => el != item))))}>-</button></div>)
    // console.log(todos)

    return(
        <div>{todos}</div>
    )
}

export default TodoItemsList;