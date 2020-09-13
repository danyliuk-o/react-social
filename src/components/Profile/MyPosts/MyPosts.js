import React from "react";
import Post from "./Post/Post";


const MyPosts = (props) => {
  debugger
  let postsElements = props.posts.map((post, key) => (
    <Post key={key} message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();
  const onAddPost = () => {
    props.addPost();
    

  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)

  };
  return (
    <div className="posts_section">
      <div className="new_posts">
        <h3>My posts</h3>
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
          ref={newPostElement}
          cols="30"
          rows="3"
        ></textarea>
        <button className="custom-btn" onClick={onAddPost}>
          Send
        </button>
      </div>
      <div className="all_posts">{postsElements}</div>
    </div>
  );
};

export default MyPosts;
