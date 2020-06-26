import React from 'react';

const Post = (props) => {
    return (
        <div className="post post1">
            <div className="post_ava_wrapper"><img src="" alt="" /></div>
            <div className="post_text_wrapper">{props.message}</div>
            <span className="likes">likes&nbsp;{props.likesCount}</span>
        </div>
    )
}
export default Post