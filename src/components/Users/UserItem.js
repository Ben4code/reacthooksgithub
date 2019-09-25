import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

 const UserItem = (props) => {

    const { Img, name } = props;
    return (
        <div className="col m3">
            <div className="card-panel center-align">
                <img src={Img} alt="avatar" className="circle responsive-img"
                    style={{ width: '25rem', height: '15rem', objectFit: 'cover' }}
                />
                <h6>{name}</h6>
                <Link to={`/user/${name}`}  className="btn-small red pulse">View Profile</Link>
            </div>
        </div>
    )
}

export default UserItem;

UserItem.propTypes = {
    Img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}