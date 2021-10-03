import axios from "axios";
import React from "react";
import userPhoto from "../../img/panda.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(res => {
        res.data.totalCount = 10;
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
        console.log("res.data ->", res.data);
      });
  }
  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(res => {
        this.props.setUsers(res.data.items);
      });
  };
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pagesArr = [];
    for (let i = 1; i <= pagesCount; i++) {
      pagesArr.push(i);
    }

    return (
      <>
        <ul className='pagination'>
          {pagesArr.map(page => {
            return (
              <li
                onClick={() => {
                  this.onPageChanged(page);
                }}
                key={page}
                className={this.props.currentPage === page ? "active" : null}
              >
                {page}
              </li>
            );
          })}
        </ul>
        <div className='users-container'>
          <h2 className='users-title'>Users</h2>
          <ul className='user-list'>
            {this.props.users.map(user => (
              <div className='users-item' key={user.id}>
                <div className='users-ava-wrap'>
                  <div className='users-avatar-wrapper'>
                    <img
                      className='users-avatar-img'
                      src={user.photos.small || userPhoto}
                      alt='avatar'
                    />
                  </div>
                  {user.followed ? (
                    <button
                      className='users-follow-btn'
                      onClick={() => this.props.unfollow(user.id)}
                    >
                      Unfollow
                    </button>
                  ) : (
                      <button
                        className='users-follow-btn'
                        onClick={() => this.props.follow(user.id)}
                      >
                        Follow
                      </button>
                    )}
                </div>
                <div className='users-block'>
                  <div className='users-info'>
                    <div className='users-name'>{user.name}</div>
                    <div className='users-status'>{user.status}</div>
                  </div>
                  <div className='users-location'>
                    <div className='users-country'>{`user.location.country,`}</div>
                    <div className='users-city'>{`user.location.city`}</div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Users;
