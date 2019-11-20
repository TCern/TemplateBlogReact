export function addBlog(payload){
    return {type: "ADD_BLOG", payload}
}

export function editBlog(payload){
    return {type: "EDIT_BLOG", payload}
}

export function deleteBlog(payload){
    return {type: "DELETE_BLOG", payload}
}