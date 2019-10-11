import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../Context/GithubContext'

const Search = ({showAlert}) => {
    const githubContext = useContext(GithubContext);

    const [text, setText] = useState({searchText: ''})
    
    const changeHandler = (e) => {
        setText({ ...text, [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (text.searchText.trim() === '') return showAlert("Please enter a search term");
        githubContext.filterText(text.searchText.trim())
        setText({searchText: ''});
    }

    return (
        <form onSubmit={submitForm} className="form">
            <div className="form-input">
                <input
                    type="text"
                    name="searchText"
                    placeholder="Search users..."
                    onChange={changeHandler}
                    value={text.searchText}
                />
            </div>
            <button className="btn-small red" style={{ display: 'block', width: '100%' }} type="submit">Search <i className="fa fa-search"></i></button>
        </form>
    )
}

export default Search;

Search.propTypes = {
    showAlert: PropTypes.func.isRequired
}