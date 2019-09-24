import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Search extends Component {
    state = {
        text: ''
    }

    changeHandler = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    submitForm = (e) => {
        e.preventDefault();
        let text = this.state.text.trim();
        if (text === '') {
            return this.props.showAlert("Please enter a search term");
        }
        this.props.filterText(text);
        this.setState({ text: '' })
    }

    render() {
        return (
            <form onSubmit={this.submitForm} className="form">
                <div className="form-input">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search users..."
                        onChange={this.changeHandler}
                        value={this.state.text} />
                </div>
                <button className="btn-small red" style={{ display: 'block', width: '100%' }} type="submit">Search <i className="fa fa-search"></i></button>
            </form>
        )
    }
}


Search.propTypes = {
    filterText: PropTypes.func.isRequired
}
Search.propTypes = {
    showAlert: PropTypes.func.isRequired
}