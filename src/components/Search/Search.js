import React, {useState} from 'react'
import PropTypes from 'prop-types'


const Search = ({showAlert, filterText}) => {
    const [text, setText] = useState({searchText: ''})
    
    const changeHandler = (e) => {
        setText({ ...text, [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (text.searchText.trim() === '') return showAlert("Please enter a search term");
        filterText(text.searchText.trim());
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
    filterText: PropTypes.func.isRequired
}
Search.propTypes = {
    showAlert: PropTypes.func.isRequired
}