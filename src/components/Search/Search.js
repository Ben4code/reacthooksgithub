import React, {useState} from 'react'
import PropTypes from 'prop-types'


const Search = ({showAlert, filterText}) => {
    const [text, setText] = useState('')
    
    const changeHandler = (e) => {
        const searchVal = e.target.value;
        setText(searchVal)
        // const { name, value } = e.target;
        // setText({ [name]: value })
    }

    const submitForm = (e) => {
        e.preventDefault();
        let textVal = text.trim();
        if (textVal === '') {
            return showAlert("Please enter a search term");
        }
        filterText(textVal);
        setText('');
    }
    return (
        <form onSubmit={submitForm} className="form">
            <div className="form-input">
                <input
                    type="text"
                    name="text"
                    placeholder="Search users..."
                    onChange={changeHandler}
                    value={text}
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