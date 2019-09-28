import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from '../Spinner/Spinner'
import Git from '../Repos/git.png'



const User = ({ match, history }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [repos, setRepos] = useState('')

    useEffect(() => {
        setLoading(true);
        const username = match.params.login;
        axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secrete=${process.env.REACT_APP_GITHUB_CLIENT_SECRETE}`)
        .then(userRes => {
            axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secrete=${process.env.REACT_APP_GITHUB_CLIENT_SECRETE}`)
            .then(reposRes => {
                setUser(userRes.data)
                setRepos(reposRes.data)
                setLoading(false);
            })
        })
    }, [match.params.login])


    const { name, avatar_url, location, bio, blog, company, login, html_url, followers, following, public_repos, public_gists, hireable } = user;
    if (loading) {
        return (
            <Spinner />
        )
    }
    return (

        <div className="container">
            <div className="row btn_links">
                <button onClick={history.goBack} className="btn-small red"> &larr; Back</button>
                <a href={html_url} target="_blank" rel="noopener noreferrer" className="right btn-small blue"><i className="fa fa-github"></i> View on Github</a>
            </div>
            <div className="row">
                <div className="col m12">
                    <div className="col m4">
                        <div className="card-panel center-align">
                            <img src={avatar_url} alt="avatar" className="circle responsive-img" />
                            <h5>{name}</h5>
                            <h6>Location: {location}</h6>
                            {hireable && (<h6>Hireable: <span className="blue-text"> &#10003; </span> </h6>)}
                        </div>
                    </div>

                    <div className="col m8">
                        <div className="card-panel">
                            <h5>Bio</h5>
                            <p>{bio}</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur quisquam sit aperiam. Cupiditate in quas hic et, consectetur quam.</p>
                            <hr />
                            <p>Username: {login}</p>
                            {company && (<p>Company: {company}</p>)}
                            {blog && (<p>Website: {blog}</p>)}

                            <div className="row chip_group">
                                <span className="chip red"><i className="fa fa-users"></i> Followers: {followers}</span>
                                <span className="chip blue"><i className="fa fa-user-plus"></i> Following: {following}</span>
                                <span className="chip green"><i className="fa fa-sticky-note"></i> Repos: {public_repos}</span>
                                <span className="chip orange"><i className="fa fa-wechat"></i> Gists: {public_gists}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                    repos &&
                    repos.map(repo => {
                        return (
                            <ul key={repo.full_name} className="card collection">
                                <li className="collection-item ">
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        <img src={Git} alt="git" width="30" className="circle" />
                                        <span className="title">{repo.full_name.toUpperCase()}</span>
                                    </a>
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="secondary-content">&rsaquo;</a>
                                </li>
                            </ul>
                        )
                    })
                }
        </div>
    )

}

export default User