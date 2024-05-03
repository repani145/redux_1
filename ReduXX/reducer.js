
const initialState=['mango','apple']

export const reduceR=(state=initialState,action)=>{
    switch(action.type){
        case 'change_count':
            return 'hello'
        case 'addFruit':
            return [...state,action.payload]
        default:
            return state;
    }
}



