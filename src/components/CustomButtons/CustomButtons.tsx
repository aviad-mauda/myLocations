import "./CustomButton.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import CategoryEntity from "../../entities/CategoryEntity";
import { ContentTypes } from "../../entities/ContentTypes";
import { ScreensTypes } from "../../entities/ScreensTypes";
import { actionsCreators } from "../../redux";
import { RootState } from "../../redux/reducers/reducers";

function addClicked(actions: any) {
    actions.changeContentType(ContentTypes.ADD_CATEGORY);
    actions.changeScreenType(ScreensTypes.NEW_CATEGORY);
    actions.selectCategory({});
}

function updateClicked(actions: any) {
    actions.changeContentType(ContentTypes.ADD_CATEGORY);
    actions.changeScreenType(ScreensTypes.NEW_CATEGORY);
}

function saveClicked(actions: any, content: String, category: CategoryEntity, categories: CategoryEntity[]) {
    if(category.name != null) {
        actions.updateCategory(categories, category, content);
        actions.changeScreenType(ScreensTypes.CATEGORY_PROPERTIES);
        actions.changeContentType(ContentTypes.CATEGORY_DETAILS);

        if(!categories.some((category: CategoryEntity) => category.name === content)) {
            category.name = content;
            actions.selectCategory(category);
        }

        return;
    }
    
    actions.addCategory(new CategoryEntity(content));
    actions.changeScreenType(ScreensTypes.CATEGORY_LIST);
    actions.changeContentType(ContentTypes.EMPTY);
    actions.selectCategory({});
}

function deleteClicked(actions: any, category: CategoryEntity, categories: CategoryEntity[]) {
    actions.deleteCategory(categories, category);
    actions.changeScreenType(ScreensTypes.CATEGORY_LIST);
    actions.changeContentType(ContentTypes.EMPTY);
    actions.selectCategory({});
}

function getButtons(screenType: ScreensTypes, content: String, actions: any, category: CategoryEntity, categories: CategoryEntity[]):JSX.Element {
    switch(screenType) {
        case ScreensTypes.NEW_CATEGORY:
            return <button className="button" id="save-button" onClick={() => saveClicked(actions, content, category, categories)}>save</button>

        case ScreensTypes.CATEGORY_PROPERTIES:
            return <div>
                <button className="button" id="update-button" onClick={() => updateClicked(actions)}>update</button>
                <button className="button" id="add-button" onClick={() => addClicked(actions)}>Add New Category</button>
                <button className="button" id="delete-button" onClick={() => deleteClicked(actions, category, categories)}>Delete Category</button>
            </div>

        case ScreensTypes.CATEGORY_LIST:
        default:
            return <button className="button" id="add-button" onClick={() => addClicked(actions)}>Add New Category</button>
    }
}

export default function CustomButtons() {

    const {screenType, content, category, categories} = useSelector((state: RootState) => state);
    const dispatch = useDispatch();
    const actions = bindActionCreators(actionsCreators, dispatch);

    return (
        <div className="buttons">
            {getButtons(screenType, content, actions, category, categories)}
        </div>
    )
}