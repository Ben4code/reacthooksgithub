import React, { Component } from 'react'
import axios from 'axios'
import Spinner from '../Spinner/Spinner'

export default class User extends Component {
    state = {
        user: {},
        loading: false
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const login = this.props.match.params.login;
        const res = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secrete=${process.env.REACT_APP_GITHUB_CLIENT_SECRETE}`);
        this.setState({ user: res.data, loading: false });
    }

    render() {
        const { name, avatar_url, location, bio, blog, company, login, html_url, followers, following, public_repos, public_gists, hireable } = this.state.user;
        if (this.state.loading) {
            return (
                <Spinner />
            )
        }
        return (

            <div className="container">
                <div className="row btn_links">
                    <button onClick={this.props.history.goBack} className="btn-small red"> &larr; Back</button>
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


            </div>
        )
    }
}
