const categoryReducer = (state = {}, action: any) => {
    switch (action.type) {
        case "selectCategory":
            return action.payload;
        default:
            return state;
    }
}

export default categoryReducer;