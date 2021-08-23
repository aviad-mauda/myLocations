import { ContentTypes } from "../../entities/ContentTypes";

const contentTypeReducer = (state = ContentTypes.EMPTY, action: any) => {
    switch (action.type) {
        case "changeContentType":
            return state = action.payload;
        default:
            return state;
    }
}

export default contentTypeReducer;
