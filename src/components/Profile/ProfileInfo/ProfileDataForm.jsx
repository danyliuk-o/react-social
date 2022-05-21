import React from 'react';
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import classes from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = (props) => {
    const {profile, handleSubmit, error} = props
    return (
        <div className="profile__data">
            <form onSubmit={handleSubmit}>
                <div>
                    <button>Save</button>
                </div>
                {error && <div className={classes.formError}>{error}</div>}
                <div className="profile__name">
                    <div>
                        <Field
                            name={"fullName"}
                            component={Input}
                            type="text"
                        />
                    </div>
                </div>
                <div><b>Looking for a job:</b> <Field
                    name={"lookingForAJob"}
                    component={Input}
                    type="checkbox"
                /></div>

                <div><b>My professional skills:</b><Field
                    name={"lookingForAJobDescription"}
                    component={Textarea}
                /></div>
                <div><b>About me:</b><Field
                    name={"aboutMe"}
                    component={Textarea}
                /></div>
                <div>
                    <b>Contact: {Object.keys(profile.contacts).map((item) => {
                        return (
                            // <Contacts contactTitle={item} contactValue={profile.contacts[item]} key={item}/>
                            <div key={item}>
                                <b>{item}: </b><Field component={Input} name={`contacts.${item}`}/>
                            </div>
                        )
                    })}</b>
                </div>
            </form>
        </div>
    );
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm;