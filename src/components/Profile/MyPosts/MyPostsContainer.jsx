
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import { connect } from 'react-redux';
import MyPosts from './MyPosts';

const mapStateToProps = state => {
  return ({
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  })
}
const mapDispatchToProps = dispatch => {
  return ({
    updateNewPostText: text => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => dispatch(addPostActionCreator())
  })
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
