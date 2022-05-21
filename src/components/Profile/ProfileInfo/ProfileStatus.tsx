import React, {ChangeEvent} from "react";

type PropsType = {
    status: string
    updateUserStatus: (newStatus: string) => void
}
type PropsState = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType, PropsState> {
    state = {
        editMode: false,
        status: this.props.status,
    };
    activateEdit = () => {
        this.setState({
            editMode: true,
        });
    };
    deactivateEdit = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateUserStatus(this.state.status);
    };
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.target.value,
        });
    };

    componentDidUpdate(prevProps: PropsType, prevState: PropsState) {
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status,
            });
    }

    render() {
        return (
            <div>
                {!this.state.editMode && (
                    <div>
            <span onClick={this.activateEdit}>
              {this.props.status || "-----"}
            </span>
                    </div>
                )}
                {this.state.editMode && (
                    <div>
            <span>
              <input
                  type="text"
                  value={this.state.status}
                  onChange={this.onStatusChange}
                  autoFocus
                  onBlur={this.deactivateEdit}
              />
            </span>
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
