import {updateObjectInArray} from "../utils/helpers";
import {UsersType} from "../types/types";
import {AppStateType, InferActionsTypes} from "./reduxStore";
import {Dispatch} from "react";
import {ThunkAction} from "redux-thunk";
import {usersAPI} from "../api/users-api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";


type InitialStateType = typeof initialState

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    followSuccess: (userId: number) => ({
        type: FOLLOW,
        userId,
    } as const),
    unfollowSuccess: (userId: number) => ({
        type: UNFOLLOW,
        userId,
    } as const),
    setUsers: (users: Array<UsersType>) => ({
        type: SET_USERS,
        users,
    } as const),
    setCurrentPage: (currentPage: number) => ({
        type: SET_CURRENT_PAGE,
        currentPage,
    } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount,
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({
        type: TOGGLE_IS_FETCHING,
        isFetching,
    } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId,
    } as const)
}

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, //array of users ids
};

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
                // users: state.users.map((user) => {
                //     if (user.id === action.userId) {
                //         return {...user, followed: true};
                //     }
                //     return user;
                // }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
                // users: state.users.map((user) => {
                //     if (user.id === action.userId) {
                //         return {...user, followed: false};
                //     }
                //     return user;
                // }),
            };
        case SET_USERS: {
            return {...state, users: action.users};
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage};
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count};
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching};
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id !== action.userId),
            };
        }
        default:
            return state;
    }
};


// type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        // await dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(page));
        const data = await usersAPI.getUsers(page, pageSize)
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    }
}


export const _toggleFollow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) =>
    ActionsTypes) => {
    await dispatch(actions.toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        await dispatch(actionCreator(userId));
    }
    await dispatch(actions.toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => (async (dispatch) => {
    const apiMethod = usersAPI.follow.bind(usersAPI)
    await _toggleFollow(dispatch, userId, apiMethod, actions.followSuccess)
})
export const unfollow = (userId: number): ThunkType => (async (dispatch) => {
    const apiMethod = usersAPI.unfollow.bind(usersAPI)
    await _toggleFollow(dispatch, userId, apiMethod, actions.unfollowSuccess)
})

export default usersReducer;
