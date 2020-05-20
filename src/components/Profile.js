import React from 'react';

const Profile = () => {
    return (
        <main className="main">
            <div className="banner">
                <img src="./banner_pic.jpg" alt="" />
            </div>
            <div className="content_head">
                <div className="avatar_wrapper"><img src="./avatar.jpg" alt="" /></div>
                <div className="bio_wrapper">Aleksandr</div>
            </div>
            <div className="posts_section">
                <div className="new_posts">
                    <h3>My posts</h3>
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                    <button>Send</button>
                </div>
                <div className="all_posts">
                    <div className="post1">
                        <div className="post_ava_wrapper"><img src="" alt="" /></div>
                    </div>
                    <div className="post2">Post</div>
                </div>
            </div>
        </main>
    )
}

export default Profile