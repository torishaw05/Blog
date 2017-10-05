import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    }
  }
 componentDidMount() {
   fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
   .then(results => {
     return results.json();
   }).then(data => {
     this.setState({post: data})
   })
 }

render() {
  let match = this.props.match;
  let postsMade = this.state.post.map(post => {
    return(
      <center>
      <div className='posts' key={post._id}>
      <Link className='bloglink' to={`${match.url}/${post._id}`}>
      <h5 className='blog_title'>{post.blog_title}</h5>
      <h5 className='blog_author'>{post.authorName}</h5>
      </Link>
      </div>
      </center>
    );
})

return (
  <div className='show'>
  {postsMade}
  </div>
    );
  }
}
