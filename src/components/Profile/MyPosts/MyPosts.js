import React from "react";
import Post from "./Post/Post";
// import {
//   addPostActionCreator,
//   updateNewPostTextActionCreator,
// } from "../../../redux/profileReducer";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post, key) => (
    <Post key={key} message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();
  const addPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
    // let action = updateNewPostTextActionCreator(text);
    // props.dispatch(action);
  };
  return (
    <div className="posts_section">
      <div className="new_posts">
        <h3>My posts</h3>
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
          ref={newPostElement}
          name=""
          id=""
          cols="30"
          rows="3"
        ></textarea>
        <button className="custom-btn" onClick={addPost}>
          Send
        </button>
      </div>
      <div className="all_posts">{postsElements}</div>
    </div>
  );
};

export default MyPosts;
