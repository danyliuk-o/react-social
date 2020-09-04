const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postsData: [
    { id: 1, message: "Hello world!", likesCount: 12 },
    { id: 2, message: "Hello world!2", likesCount: 5 },
    { id: 3, message: "Hello world!2", likesCount: 11 },
    { id: 4, message: "Hello world!2", likesCount: 4 },
    { id: 5, message: "Hello world!2", likesCount: 8 },
  ],
  newPostText: "it-kamasutra.com",
};

const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
