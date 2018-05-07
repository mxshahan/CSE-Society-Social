export const loginUser = (user) => ({
    type: 'LOGIN',
    user
});

export const startLogin = (body) => {
    return (dispatch) => {
        dispatch(loginUser(body))
    }
}

export const createUser = (user) => ({
    type: 'CREATE_USER', 
    user
})

export const setUserBlog = (user) => ({
    type: 'SET_USER_BLOG', 
    user
})

export const setUser = (user) => ({
    type: 'SET_USER', 
    user
})

export const startCreateUser = (body) => {
    return (dispatch) => {
        dispatch(createUser(body));
    }
}

export const LogoutUser = () => ({
    type: 'LOGOUT'
})

export const deleteBlog = (id) => ({
    type: 'DELETE_BLOG',
    id
})