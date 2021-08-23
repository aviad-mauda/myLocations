import { useSelector } from "react-redux";
import CategoryEntity from "../../entities/CategoryEntity";
import { ScreensTypes } from "../../entities/ScreensTypes";
import { RootState } from "../../redux/reducers/reducers";
import AppStrings from "../../utils/strings";
import CustomButton from "../CustomButtons/CustomButtons";

function createTitle(screenType: ScreensTypes, category: CategoryEntity) : String {
    switch(screenType) {
        case ScreensTypes.NEW_CATEGORY:
            return AppStrings.NEW_CATEGORY;
        case ScreensTypes.CATEGORY_PROPERTIES:
            return category.name;
        case ScreensTypes.CATEGORY_LIST:
        default:
            return AppStrings.CATEGORY_LIST;
    }
}


export default function ToolBar() {

    const {screenType , category } = useSelector((state: RootState) => state);
    
    return (
        <div className="toolbar">
            <h3> {createTitle(screenType, category)} </h3>
            <CustomButton />
            <hr/>
        </div>
    )
}

