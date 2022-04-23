import React from "react";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

const MyPosts = (props) => {
  const postsElements = props.posts.map((post, key) => (
    <Post key={key} message={post.message} likesCount={post.likesCount} />
  ));

  const onAddPost = (values) => {
    props.addPost(values.message);
  };
  return (
    <div className="posts_section">
      <div className="new_posts">
        <h3>My posts</h3>
        <PostFormMessageRedux onSubmit={onAddPost} />
      </div>
      <div className="all_posts">{postsElements}</div>
    </div>
  );
};

const PostFormMessage = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="message"
          component={Textarea}
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button className="custom-btn">Send</button>
      </div>
    </form>
  );
};

const PostFormMessageRedux = reduxForm({ form: "postFormMessage" })(
  PostFormMessage
);

export default MyPosts;
