import React,{Component} from 'react';
import PostModel from './PostModel';
import {connect} from 'react-redux';

class Home extends Component {
    handleClick = (id) => {
        this.props.history.push(`/posts/${id}`)
    }
    render(){
        if(this.props.loading){
            return (
                <div className="main-loader">
                    <div className="preloader-wrapper big active">
                        <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if(this.props.error){
            return (
                <div>
                    <h1>this.props.error</h1>
                </div>
            )
        }
        else{
            return (
                <div className="container">
                    <h1>List of Posts</h1>
                    {this.props.posts.map(post => <PostModel key={post.id} post={post} click={() => this.handleClick(post.id)}/>)}
                    {/* <Post post={props.posts[1]} /> */}
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps)(Home);