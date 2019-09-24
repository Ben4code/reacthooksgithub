import React from 'react'
import UserItem from './UserItem'
import PropTypes from 'prop-types'

const Users = ({ users }) => {

    const showUserItem = () => {
        return users.map(user => {
            const { id, avatar_url, login, html_url } = user;
            return (
                <div className="container" key={id}>
                    <UserItem name={login} Img={avatar_url} url={html_url} />
                </div>
            )
        })
    }
    return (
        <div className="row">
            {showUserItem()}
        </div>
    )
}

export default Users;

Users.propTypes = {
    users : PropTypes.object.isRequired
}