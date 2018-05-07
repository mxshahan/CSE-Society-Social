export default (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
            return state = action.user
        case 'LOGOUT':
            return {};
        case 'CREATE_USER':
            state.token = action.user
        case 'SET_USER':
            return state = {
                user: action.user,
                ...state
            }
        case 'SET_USER_BLOG':
            state.user && state.user.blog.push(action.data);
            return state;

        case 'DELETE_BLOG' : {
            const pos = state.user.blog.map((blg) => {
                return blg._id 
            }).indexOf(action.id);
            console.log(pos)
            const myBlg = state.user.blog.filter((blg, index) => index !== pos);
            // console.log(myBlg);
            state.user.blog = myBlg;
            // return state;
            // return state = {
            //     user: {
            //         blog: myBlg
            //     },
            //     ...state.token
            // }
            // console.log(state)
        }
        default:
            return state;
    }
}