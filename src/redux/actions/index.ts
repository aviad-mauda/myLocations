import CategoryEntity from "../../entities/CategoryEntity"
import { ContentTypes } from "../../entities/ContentTypes"
import { ScreensTypes } from "../../entities/ScreensTypes"

export const changeScreenType = (screenType: ScreensTypes) => {
    return (dispatch: any) => {
        dispatch({
            type: "changeScreenType",
            payload: screenType
        })
    }
}

export const changeContentType = (contentType: ContentTypes) => {
    return (dispatch: any) => {
        dispatch({
            type: "changeContentType",
            payload: contentType
        })
    }
}

export const addCategory = (category: CategoryEntity) => {
    return (dispatch: any) => {
        dispatch({
            type: "addCategory",
            payload: category
        })
    }
}

export const updateCategory = (categories: CategoryEntity[], category: CategoryEntity, categoryNewName: string) => {
    return (dispatch: any) => {
        dispatch({
            type: "updateCategory",
            payload: {categories,category,categoryNewName}
        })
    }
}

export const deleteCategory = (categories: CategoryEntity[], category: CategoryEntity) => {
    return (dispatch: any) => {
        dispatch({
            type: "deleteCategory",
            payload: {categories, category}
        })
    }
}

export const selectCategory = (category: CategoryEntity) => {
    return (dispatch: any) => {
        dispatch({
            type: "selectCategory",
            payload: category
        })
    }
}

export const categoryToAdd = (categoryName: String) => {
    return (dispatch: any) => {
        dispatch({
            type: "categoryToAdd",
            payload: categoryName
        })
    }
}

