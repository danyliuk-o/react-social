import React, {useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../img/panda.png";
import ProfileStatusHooks from "./ProfileStatusHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    const {profile, updateUserStatus, status, isOwner, savePhoto, saveProfile} = props
    const [editMode, setEditMode] = useState(false)
    const changeEditMode = () => {
        setEditMode(true)
    }
    const mainPhotoSelected = (event) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(() => setEditMode(false))
    }
    if (!profile) return <Preloader/>;
    return (
        <div className="profile__head">
            <div className="avatar_wrapper">
                <img src={profile.photos ? profile.photos.large : userPhoto} alt=""/>
            </div>
            <div className="profile__bio">
                {editMode ?
                    <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/> :
                    <ProfileData profile={profile} isOwner={isOwner} changeEditMode={changeEditMode}/>}
                <div className="profile__status">
                    {isOwner && <input type="file" onChange={mainPhotoSelected}/>}
                    <ProfileStatusHooks
                        status={status}
                        updateUserStatus={updateUserStatus}
                    />
                </div>
            </div>
        </div>
    );
};

export const Contacts = (props) => {
    const {contactTitle, contactValue} = props
    return (
        <div>
            <b>{contactTitle}:</b> {contactValue}
        </div>
    )
}

const ProfileData = ({profile, isOwner, changeEditMode}) => {
    return (
        <div className="profile__data">
            {isOwner && <button onClick={changeEditMode}>Edit</button>}
            <div className="profile__name"><b>Full name:</b> {profile.fullName}</div>
            <div><b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}</div>
            {profile.lookingForAJob &&
                <div><b>My professional skills:</b> {profile.lookingForAJob ? 'Yes' : 'No'}</div>}
            <div><b>About me:</b> {profile.aboutMe ? profile.aboutMe : null}</div>
            <div>
                <b>Contact: {Object.keys(profile.contacts).map((item) => {
                    return (
                        <Contacts contactTitle={item} contactValue={profile.contacts[item]} key={item}/>
                    )
                })}</b>
            </div>
        </div>
    )
}


export default ProfileInfo;
