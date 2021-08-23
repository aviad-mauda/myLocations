import "./Content.css";
import { useDispatch, useSelector } from "react-redux";
import CategoryEntity from "../../entities/CategoryEntity";
import { RootState } from "../../redux/reducers/reducers";
import { bindActionCreators } from "redux";
import { actionsCreators } from "../../redux";
import { ContentTypes } from "../../entities/ContentTypes";

function getContent(contentType: ContentTypes, category: CategoryEntity, actions: any):JSX.Element {
    switch(contentType) {
        case ContentTypes.CATEGORY_DETAILS:
            return <div>
                <span className="category-name">Category Name:</span> {category.name}
            </div>;
        case ContentTypes.ADD_CATEGORY:
            return <div>
                <span className="category-name">Category Name:</span>
                <input type="text" id="categoryNameAdded" onChange={(e) => {actions.categoryToAdd(e.target.value)}}></input>
            </div>;
        case ContentTypes.EMPTY:
        default:
            return <span></span>;
    }
}

export default function Content() {

    const {contentType, category} = useSelector((state: RootState) => state);
    const dispatch = useDispatch();
    const actions = bindActionCreators(actionsCreators, dispatch);
    
    return (
        <div className="content">
             {getContent(contentType, category, actions)}
        </div>
    )
}