import { getPosts } from "../services/postService";

export const GET_POSTS_LOADING = 'GET_POSTS_LOADING';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const getAllPosts = () => (dispatch) => {
    dispatch({type: GET_POSTS_LOADING})

    getPosts()
        .then(res => res.json())
        .then(
            data => dispatch({type: GET_POSTS_SUCCESS, data}), 
            error => dispatch({type: GET_POSTS_FAILURE, error})
        );
}