import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, updateInput} from '../redux/TodoReducer';

function Todo(){

    let text = useRef(null);

    let stateHook = useSelector((state) => state.todo);
    // console.log(gook.input);

    let dispatch = useDispatch();

    const onChange = (() => {
        dispatch(updateInput(text.current.value))
    })
    
    const addItemToArray = (() => {
        if(stateHook.input){
            dispatch(addItem());
        }
    })

    return(
        <div>
            <input type="text" value={stateHook.input} onChange={onChange} ref={text} />
            <button onClick={addItemToArray} >+</button>
        </div>
    )
}

export default Todo;