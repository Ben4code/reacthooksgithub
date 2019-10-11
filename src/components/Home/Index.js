import React, { useState, useEffect, useContext } from 'react';
import Users from '../Users/Users'
import Spinner from '../Spinner/Spinner'
import Search from '../Search/Search'
import Alert from '../Alert/Alert'
import GithubContext from '../Context/GithubContext'

const Home = () => {
    const githubContext = useContext(GithubContext)
    const {users, getUsers} = githubContext;
    const [showAlertMsg, setAlert] = useState(false)

    useEffect(() => {
        getUsers();
    }, [users]);

    const getAlert = (msg) => {
        setAlert(msg);
        setTimeout(() => setAlert(false), 4000)
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col m12">
                        <div className="card-panel blue white-text center-align" style={{ margin: '30px 0', padding: '50px' }}>
                            <h4>Welcome to GitFinder</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col m3 offset-m9 search">
                        {showAlertMsg ? <Alert msg={showAlertMsg} /> : null}
                        <Search showAlert={getAlert} />
                    </div>
                </div>
            </div>
            {
                users.length === 0
                    ?
                    <Spinner />
                    :
                    <Users />
            }
        </div>
    );
}

export default Home;
