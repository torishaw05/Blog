import React, {Component} from 'react';

export default class ShowPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post:[]
    }
  }

componentDidMount() {
  const URL =`https://tiny-lasagna-server.herokuapp.com/collections/blogger/${this.props.match.params.id}`;

fetch(URL)
  .then(results => {
    return results.json();

  }).then(data => {
    this.setState({post:data})
  })
}

render() {
  return (
    <div className='done_post'>
    <h5>Title: {this.state.post.blogTitle}</h5>
    <h5>By: {this.state.post.authorName}</h5>
    <h5>Blog : {this.state.post.blogEntry}</h5>
    </div>


  );
}



}
