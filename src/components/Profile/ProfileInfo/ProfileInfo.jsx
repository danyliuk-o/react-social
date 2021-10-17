import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../img/panda.png";

const ProfileInfo = props => {
    if (!props.profile) return <Preloader/>
    return (
        <div className="content_head">
            <div className="avatar_wrapper">
                <img src={props.profile.photos.large || userPhoto} alt=""/>
            </div>
            <div className="bio_wrapper">{props.profile.fullName}</div>
        </div>
    );
};

export default ProfileInfo;
