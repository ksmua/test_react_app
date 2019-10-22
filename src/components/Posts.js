import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
  render() {
    return(
      <div className="left">
        <Post 
          src = "data:image/png;base64,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"
          alt = "first post"
        />
        <Post 
          src = "data:image/png;base64,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"
          alt = "second post"
        />
      </div>
    )
  }
}