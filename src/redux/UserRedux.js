const types = {
    SET_SELECTED_VALUES: 'SET_SELECTED_VALUES'
}

export const actions = {
    setSelectedValues: (result) => {
        return({type: types.SET_SELECTED_VALUES, result});
    }
}

const initialState = {
    result: []
};

export const reducer = (state = initialState, action) => {
    const {type, result} = action;
    switch (type) {
        case types.SET_SELECTED_VALUES:
            return { ...state, result };
        default:
            return state;
    }
}