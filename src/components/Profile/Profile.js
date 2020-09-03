import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profilePage, dispatch}) => {
  return (
    <div>
      <div className="banner">
        <img src="./banner_pic.jpg" alt="" />
      </div>
      <ProfileInfo />
      <MyPosts posts={profilePage.postsData} dispatch={dispatch} />
    </div>
  );
};

export default Profile;
