import React, {useContext} from 'react'
import UserItem from './UserItem'
import GithubContext from '../Context/GithubContext'

const Users = () => {
    const githubContext = useContext(GithubContext);
    const {users} = githubContext;

    return (
        <div className="row">
            {
                users.map(user => {
                    const { id, avatar_url, login } = user;
                    return (
                        <div className="container" key={id}>
                            <UserItem name={login} Img={avatar_url} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;

