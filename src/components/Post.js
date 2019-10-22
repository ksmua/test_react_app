import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
  render () {
    return (
      <div className="post">
        <User 
          src = "https://img.icons8.com/plasticine/2x/user.png"
          alt = "Scot ava"
          name = "Scot"
          min = {true}
        />
        
        <img src={this.props.src} alt={this.props.alt}></img>
        
        <div className="post__name">
          React (post__name)
        </div>
        
        <div className="post__descr">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptatum consectetur facilis minima iure aliquid, corporis qui corrupti, fugiat, possimus minus perferendis tempore.Doloribus a atque maiores asperiores cupiditate velit vero ?
        </div>
      </div>
    )
  }
}
