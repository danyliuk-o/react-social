import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../img/panda.png";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = (props) => {
    const {profile, updateUserStatus, status} = props
  if (!profile) return <Preloader />;
  return (
    <div className="profile__head">
      <div className="avatar_wrapper">
        <img src={profile.photos.large || userPhoto} alt="" />
      </div>
      <div className="profile__bio">
        <div className="profile__name"> {profile.fullName}</div>
        <div className="profile__status">
          <ProfileStatusHooks
            status={status}
            updateUserStatus={updateUserStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
