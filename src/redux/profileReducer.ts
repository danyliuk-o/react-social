import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS_PROFILE = "SET-STATUS-PROFILE";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";
const SAVE_PROFILE = "SAVE-PROFILE";




let initialState = {
    postsData: [
        {id: 1, message: "Hello world!", likesCount: 12},
        {id: 2, message: "Hello world!2", likesCount: 5},
        {id: 3, message: "Hello world!2", likesCount: 11},
        {id: 4, message: "Hello world!2", likesCount: 4},
        {id: 5, message: "Hello world!2", likesCount: 8},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText: "",
                postsData: [
                    ...state.postsData,
                    {
                        id: 6,
                        message: action.message,
                        likesCount: 0,
                    },
                ],
            };
        }

        case DELETE_POST: {
            return {
                ...state, postsData: state.postsData.filter(post => post.id !== action.postId)
            }
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType};
        }
        case SAVE_PROFILE: {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType};
        }
        case SET_STATUS_PROFILE: {
            return {
                ...state,
                status: action.status,
            };
        }
        default:
            return state;
    }
};

type AddPostActionCreatorActionType= {
    type: typeof ADD_POST
    message: string
}

export const addPostActionCreator = (message: string): AddPostActionCreatorActionType => ({type: ADD_POST, message});

type DeletePostActionType = {
    type: typeof DELETE_POST, postId: number
}

export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId})

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({
    type: SET_USER_PROFILE,
    profile,
});

type SetStatusProfileActionType = {
    type: typeof SET_STATUS_PROFILE,
    status: string
}

export const setStatusProfile = (status: string): SetStatusProfileActionType => ({
    type: SET_STATUS_PROFILE,
    status,
});

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({
    type: SAVE_PHOTO_SUCCESS,
    photos,
});

type SaveProfileSuccessActionType = {
    type: typeof  SAVE_PROFILE,
    profile: ProfileType
}
export const saveProfileSuccess = (profile: ProfileType): SaveProfileSuccessActionType => ({
    type: SAVE_PROFILE,
    profile
});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatusProfile(response.data));
};

export const updateUserStatus = (status: string) => async (dispatch: any) => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatusProfile(status));
        }
    } catch (error) {
        console.log('error ->', error)
    }

};

export const savePhoto = (file: any) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
};

export default profileReducer;
