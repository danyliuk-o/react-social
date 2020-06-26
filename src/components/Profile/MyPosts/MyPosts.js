import React from 'react';
import Post from './Post/Post';



const MyPosts = props => {
    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

    let newPostElement = React.createRef();
    const addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }
    return (
        <div className="posts_section">
            <div className="new_posts">
                <h3>My posts</h3>
                <textarea ref={newPostElement} name="" id="" cols="30" rows="3"></textarea>
                <button className="custom-btn" onClick={addPost}>Send</button>
            </div>
            <div className="all_posts">
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts