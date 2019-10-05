import React from 'react'
import UserItem from './UserItem'
import PropTypes from 'prop-types'

const Users = (props) => {

    return (
        <div className="row">
            {
                props.users.map(user => {
                    const { id, avatar_url, login } = user;
                    return (
                        <div className="container" key={id}>
                            <UserItem name={login} Img={avatar_url} viewUser={props.viewUser} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;

Users.propTypes = {
    users: PropTypes.array.isRequired
}