const reducer = (state = 0, action) => {
    if (action.type === 'deposit') {
        return state + action.payload;
    }
    if (action.type === 'withdraw') {
        return state - action.payload;
    }
    return state;
}

export default reducer;