const ADD_ITEM = 'ADD_ITEM';
const UPDATE_INPUT = 'UPDATE_INPUT';
const SET_LIST = 'SET_LIST';

let initState = {
    listItems: [],
    input: ''
}

export function todoReducer(state = initState, action){
    switch(action.type){
        case ADD_ITEM:{
            let stateCopy = {...state};
            stateCopy.listItems = [...state.listItems];
            stateCopy.listItems.push(state.input);
            stateCopy.input = '';
            return stateCopy;
        }
        case UPDATE_INPUT:{
            let stateCopy = {...state};
            stateCopy.input = action.text
            return stateCopy;
        }
        case SET_LIST: {
            debugger
            let stateCopy = {...state};
            stateCopy.listItems = [...action.list];
            return stateCopy;
        }
        default:
            return state;
    }
}

export function addItem(){
    return{ type: ADD_ITEM };
}

export function updateInput(text){
    return{ type: UPDATE_INPUT, text: text };
}

export function setList(list){
    return{ type: SET_LIST, list: list };
}
