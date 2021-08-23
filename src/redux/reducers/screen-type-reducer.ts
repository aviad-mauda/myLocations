import { ScreensTypes } from "../../entities/ScreensTypes";

const screenTypeReducer = (state = ScreensTypes.CATEGORY_LIST, action: any) => {
    switch (action.type) {
        case "changeScreenType":
            return state = action.payload;
        default:
            return state;
    }
}

export default screenTypeReducer;
