import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = props => {

    return (
        <div>
            <div className="banner">
                <img src="./banner_pic.jpg" alt="" />
            </div>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={props.addPost} />
        </div>
    )
}

export default Profile