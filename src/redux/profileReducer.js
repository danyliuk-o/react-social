import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS_PROFILE = "SET-STATUS-PROFILE";

let initialState = {
  postsData: [
    { id: 1, message: "Hello world!", likesCount: 12 },
    { id: 2, message: "Hello world!2", likesCount: 5 },
    { id: 3, message: "Hello world!2", likesCount: 11 },
    { id: 4, message: "Hello world!2", likesCount: 4 },
    { id: 5, message: "Hello world!2", likesCount: 8 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
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

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
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

export const addPostActionCreator = (message) => ({ type: ADD_POST, message });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatusProfile = (status) => ({
  type: SET_STATUS_PROFILE,
  status,
});

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatusProfile(response.data));
  });
};

export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatusProfile(status));
    }
  });
};

export default profileReducer;
