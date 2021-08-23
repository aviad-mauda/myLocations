import CategoryEntity from "../../entities/CategoryEntity";

const categoriesReducer = (state: CategoryEntity[] = [], action: any): CategoryEntity[]  => {
    var newState;
    switch (action.type) {
        case "addCategory":
            if(state.some((category) => category.name === action.payload.name)) {
                alert("category already exist");
                
                return state;
            }

            newState = [...state, action.payload];

            window.localStorage.setItem('categories', JSON.stringify(newState));

            return newState;
        case "updateCategory":
            if(action.payload.categories.some((category: CategoryEntity) => category.name === action.payload.categoryNewName )) {
                alert("category already exist");
                
                return state;
            }
            
            newState = action.payload.categories.map((category: CategoryEntity) => 
                category.name === action.payload.category.name ? {...category, name: action.payload.categoryNewName } : category
            )

            window.localStorage.setItem('categories', JSON.stringify(newState));

            return newState;
        case "deleteCategory":
            newState = action.payload.categories.filter((category: CategoryEntity) => category.name !== action.payload.category.name);
            window.localStorage.setItem('categories', JSON.stringify(newState));

            return newState;
        default:
            return state;
    }
}

export default categoriesReducer;