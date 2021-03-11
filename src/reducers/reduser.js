const initialState = {
    count: 0
}
const reducer = (state = initialState, action) => {   
    switch (action.type) {
        case 'INC':
            return { count: state.count + 1 }
        case 'DEC':
            return { count: state.count - 1 }
        case 'RES':
            return { count: action.payload }
        default:
            return state;
    }
}
export default reducer;