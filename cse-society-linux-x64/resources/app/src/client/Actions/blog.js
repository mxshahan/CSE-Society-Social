export const setBlog = (data) => ({
    type: 'SET_BLOG',
    data
});

export const AddBlog = (data) => ({
    type: 'SET_NEW_BLOG',
    data
});

export const getBlog = () => ({
    type: 'GET_BLOG'
});

export const getSingleBlog = (data) => ({
    type: 'SINGLE_BLOG',
    data
})

export const addComment = (data) => ({
    type: 'ADD_COMMENT',
    data
})

export const getSingle = (id) => ({
    type: 'GET_SINGLE',
    id
})


export const deleteBlogFromAll = (id) => ({
    type: 'DEL',
    id
})
