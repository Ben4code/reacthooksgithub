import React, { useState, useEffect } from 'react';
import Users from '../Users/Users'
import axios from 'axios'
import Spinner from '../Spinner/Spinner'
import Search from '../Search/Search'
import Alert from '../Alert/Alert'


const Home = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [showAlertMsg, setAlert] = useState(false)

    useEffect(() => {
        setLoading(true);
        axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secrete=${process.env.REACT_APP_GITHUB_CLIENT_SECRETE}`)
            .then(res => {
                setUsers(res.data)
                setLoading(false);
            })
    }, []);

    const filterText = (text) => {
        setLoading(true);
        axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secrete=${process.env.REACT_APP_GITHUB_CLIENT_SECRETE}`)
            .then(res => {
                setUsers(res.data.items)
                setLoading(false);
            })
    };

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
                        <Search filterText={filterText} showAlert={getAlert} />
                    </div>
                </div>
            </div>
            {
                users.length === 0
                    ?
                    <Spinner />
                    :
                    <Users users={users} />
            }
        </div>
    );
}

export default Home;
