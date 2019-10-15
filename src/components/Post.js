import React from 'react';
import {connect} from 'react-redux';
import PostModel from './PostModel';
import deletePost from '../actions/deletePost';

const Post = (props) => {
    const {id} = props.match.params;
    const handleDelete = () => {
        props.deletePost(id);
        props.history.push('/')
    }
    return (
        <>
            <h1>Post</h1>
            <PostModel post={props.posts.find(post => post.id === Number(id))}/>
            <button className="waves-effect waves-light btn purple lighten-1" onClick={handleDelete}>Delete Post</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost : (id) => {
            dispatch(deletePost(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);