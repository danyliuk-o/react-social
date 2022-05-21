import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    const {profile, status, updateUserStatus, isOwner, savePhoto, saveProfile} = props
    return (
        <div>
            <div className="banner">
                <img src="./banner_pic.jpg" alt=""/>
            </div>
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateUserStatus={updateUserStatus}
                savePhoto={savePhoto}
                saveProfile={saveProfile}
            />
            <MyPostsContainer/>

        </div>
    );
};

export default Profile;
