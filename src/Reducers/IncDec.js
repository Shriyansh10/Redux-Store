const initialState = 100;

const numberUpdate = (state = initialState, action) =>{
    switch(action.type){
        case 'increment' : return state + 5;
        case 'decrement' : return state - 1;
        default: return state;
    }
}

export default numberUpdate;