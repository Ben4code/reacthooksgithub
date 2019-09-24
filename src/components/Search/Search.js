import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Search extends Component {
    state={
        text: ''
    }

    changeHandler = (e) => {
        const {name, value} = e.target;
        this.setState({ [name]: value })
    }

    submitForm = (e) => {
        e.preventDefault();
        let text = this.state.text.trim();
        if(text === '') return ;
        this.props.filterText(text);
        this.setState({text: ''})
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col m3 offset-m9">
                        <form onSubmit={this.submitForm} className="form">
                            <div className="form-input">
                                <input 
                                    type="text" 
                                    name="text" 
                                    placeholder="Search users..." 
                                    onChange={this.changeHandler} 
                                    value={this.state.text}/>
                            </div>
                            <button className="btn-small red" style={{display: 'block', width: '100%'}} type="submit">Search</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}


Search.propTypes = {
    filterText : PropTypes.func.isRequired
}