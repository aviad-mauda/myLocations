import "./CategoriesList.css";
import { useSelector } from "react-redux";
import CategoryEntity from "../../entities/CategoryEntity";
import { RootState } from "../../redux/reducers/reducers";
import Category from "../category/Category";

export default function CategoriesList() {

    const categories : Array<CategoryEntity> = useSelector((state: RootState) => state.categories);

    return (
        <div className="categories-list">
            {categories.map(category => <Category key={category.name} category={category} />)}
        </div>
    )
}