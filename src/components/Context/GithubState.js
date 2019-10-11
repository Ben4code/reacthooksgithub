import React, { useReducer } from 'react'
import axios from 'axios'
import GithubReducer from './GithubReducer'
import GithubContext from './GithubContext'
import { SEARCH_USERS, GET_USER, GET_USERS, SET_LOADING } from './types'

const GithubState = (props) => {
    //Initial State
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Set loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    //Search Users
    const filterText = (text) => {
        setLoading();
        axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secrete=${process.env.REACT_APP_GITHUB_CLIENT_SECRETE}`)
            .then(res => {
                dispatch({ type: SEARCH_USERS, payload: res.data.items })
            })
    };

    //Get users
    const getUsers = () => {
        setLoading();
        axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secrete=${process.env.REACT_APP_GITHUB_CLIENT_SECRETE}`)
            .then(res => {
                dispatch({ type: GET_USERS, payload: res.data })
            })
    }
    //Get User
    const getUser = (username) => {
        setLoading();
        axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secrete=${process.env.REACT_APP_GITHUB_CLIENT_SECRETE}`)
        .then(userRes => {
            axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secrete=${process.env.REACT_APP_GITHUB_CLIENT_SECRETE}`)
            .then(reposRes => {
                dispatch({type: GET_USER, payload: {
                    user: userRes.data,
                    repos: reposRes.data,
                } })
            })
        })
    }

    return (
        <GithubContext.Provider value={
            {
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                setLoading,
                filterText,
                getUsers,
                getUser
            }
        }>
            {props.children}
        </GithubContext.Provider>
    )
}


export default GithubState;
