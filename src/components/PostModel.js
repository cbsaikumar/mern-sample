import React from 'react';

const PostModel = (props) => {
  const post = props.post ? 
  (
    <div className="row">
    <div className="s12 m6">
      <div className="card teal lighten-2">
        <div className="card-content white-text">
          <span className="card-title" onClick={props.click}>{props.post.title}</span>
          <p>{props.post.body}</p>
        </div>
      </div>
    </div>
  </div>
  ) : (<p>Loading...</p>)
  return (
    <div className="container">
      {post}
    </div>
  )
  }

export default PostModel;