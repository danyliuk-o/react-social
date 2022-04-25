import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    const {profile, status, updateUserStatus} = props
    return (
        <div>
            <div className="banner">
                <img src="./banner_pic.jpg" alt=""/>
            </div>
            <ProfileInfo
                profile={profile}
                status={status}
                updateUserStatus={updateUserStatus}
            />
            <MyPostsContainer/>

        </div>
    );
};

export default Profile;
