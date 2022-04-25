import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
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

export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId,
});
export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW,
    userId,
});
export const setUsers = (users) => ({
    type: SET_USERS,
    users,
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount,
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
});

export const requestUsers = (page, pageSize) => async (dispatch) => {
    await dispatch(toggleIsFetching(true));
    await dispatch(setCurrentPage(page));
    const data = await usersAPI.getUsers(page, pageSize)
    await dispatch(toggleIsFetching(false));
    await dispatch(setUsers(data.items));
    await dispatch(setTotalUsersCount(data.totalCount));
}


export const toggleFollow = async (dispatch, userId, apiMethod, actionCreator) => {
    await dispatch(toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        await dispatch(actionCreator(userId));
    }
    await dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => (async (dispatch) => {
    const apiMethod = usersAPI.follow.bind(usersAPI)
    await toggleFollow(dispatch, userId, apiMethod, followSuccess)
})
export const unfollow = (userId) => (async (dispatch) => {
    const apiMethod = usersAPI.unfollow.bind(usersAPI)
    await toggleFollow(dispatch, userId, apiMethod, unfollowSuccess)
})

export default usersReducer;
