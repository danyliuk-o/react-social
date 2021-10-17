const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SET-USERS-PROFILE";

let initialState = {
  postsData: [
    { id: 1, message: "Hello world!", likesCount: 12 },
    { id: 2, message: "Hello world!2", likesCount: 5 },
    { id: 3, message: "Hello world!2", likesCount: 11 },
    { id: 4, message: "Hello world!2", likesCount: 4 },
    { id: 5, message: "Hello world!2", likesCount: 8 },
  ],
  newPostText: "it-kamasutra.com",
  profile: null
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        newPostText: "",
        postsData: [...state.postsData, {
          id: 6,
          message: state.newPostText,
          likesCount: 0,
        }]
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USERS_PROFILE: {
      return {...state, profile: action.profile}
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile,
});

export default profileReducer;
