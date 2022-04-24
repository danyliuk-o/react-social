import React, {useEffect, useState} from "react";

const ProfileStatusHooks = props => {
    const [editMode, setEditMode] = useState(false)
    const [newStatus, setNewStatus] = useState(props.status)

    useEffect(() => {
        setNewStatus(props.status)
    }, [props.status])

    const activateEdit = () => {
        setEditMode(true)
    }
    const deactivateEdit = () => {
        setEditMode(false);
        props.updateUserStatus(newStatus);
    }
    const onStatusChange = (e) => {
        setNewStatus( e.target.value)
    }
    return (
      <div>
        {!editMode && (
          <div>
            <span onClick={activateEdit}>
              {props.status || "-----"}
            </span>
          </div>
        )}
        {editMode && (
          <div>
            <span>
              <input
                type="text"
                value={newStatus}
                onChange={onStatusChange}
                autoFocus
                onBlur={deactivateEdit}
              />
            </span>
          </div>
        )}
      </div>
    );
}

export default ProfileStatusHooks;
