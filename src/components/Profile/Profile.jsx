import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <div className="banner">
        <img src="./banner_pic.jpg" alt="" />
      </div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
      <MyPostsContainer />

    </div>
  );
};

export default Profile;
