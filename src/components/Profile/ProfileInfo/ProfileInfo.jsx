import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../img/panda.png";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader />;
  return (
    <div className="profile__head">
      <div className="avatar_wrapper">
        <img src={props.profile.photos.large || userPhoto} alt="" />
      </div>
      <div className="profile__bio">
        <div className="profile__name"> {props.profile.fullName}</div>
        <div className="profile__status">
          <ProfileStatusHooks
            status={props.status}
            updateUserStatus={props.updateUserStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
