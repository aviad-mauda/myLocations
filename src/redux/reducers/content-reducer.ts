const contentReducer = (state = {}, action: any) => {
    switch (action.type) {
        case "categoryToAdd":
            return action.payload;
        default:
            return state;
    }
}

export default contentReducer;