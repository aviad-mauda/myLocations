import "./Category.css";
import { useDispatch, useSelector } from "react-redux";
import CategoryEntity from "../../entities/CategoryEntity";
import { RootState } from "../../redux/reducers/reducers";
import { bindActionCreators } from "redux";
import { actionsCreators } from "../../redux";
import { ScreensTypes } from "../../entities/ScreensTypes";
import { ContentTypes } from "../../entities/ContentTypes";

export default function Category(props: any) {
    const {category} = useSelector((state: RootState) => state);
    const dispatch = useDispatch();
    const actions = bindActionCreators(actionsCreators, dispatch);
    
    return (
        <div className={getClasses(category, props.category)} onClick={() => selectCategory(actions, props.category)}>
            {props.category.name}
        </div>
    )
}

function selectCategory (actions: any, category: CategoryEntity) {
    actions.selectCategory(category);
    actions.changeScreenType(ScreensTypes.CATEGORY_PROPERTIES);
    actions.changeContentType(ContentTypes.CATEGORY_DETAILS);
}

function getClasses(category: CategoryEntity, propsCategory: CategoryEntity) : string {
    return category.name === propsCategory.name ? "category clicked" : "category";
}
