export const incr = (dispatch) => () => dispatch({ type: 'INC' });
export const decr = (dispatch) => () => dispatch({ type: 'DEC' });
export const res = (dispatch) => () => dispatch({ type: 'RES', payload: 0 });