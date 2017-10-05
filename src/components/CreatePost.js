import React, {Component} from 'react';

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: '',
      blogPost: '',
      blogTitle: ''
    }
    this.handleNameChange  = this.handleNameChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleEntryChange = this.handleEntryChange.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);
}

handleNameChange(event) {
  this.setState({
    authorName: event.target.value
  })
}

handleTitleChange(event) {
  this.setState({
    blogTitle: event.target.value
  })
}

handleEntryChange(event) {
  this.setState({
    blogEntry: event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault();
  this.setState({
    authorName:event.target.value,
    blogEntry:event.target.value,
    blogTitle:event.target.value,
  });
let listItem = JSON.stringify(this.state);

fetch(' https://tiny-lasagna-server.herokuapp.com/collections/blogger/',
{
  method: 'POST',
  body: listItem,
  headers: {
    "Accept": "application/json",
    "Content-Type": 'application/json'
  }
}
).then(response => {
  this.props.history.push('/postList');
}).catch(err => {

})
this.setState({authorName: '', blogTitle: '', blogEntry: ''});

}

render() {
  return (
  <div className='fill_in'>
  <form onSubmit={this.handleSubmit}>

  <input type = 'text' name='name' placeholder='Enter your name' onChange={this.handleNameChange} value={this.state.authorName} required />
  <br>
  </br>
  <input type= 'text' name='entry' placeholder='Blog Title' onChange={this.handleTitleChange} value={this.state.blogTitle} required />
  <br>
  </br>
  <h5> Create Your Blog ! </h5>
  <br>
  </br>
<textarea type='text' name='title' onChange={this.handleEntryChange} value={this.state.blogEntry} placeholder='Type Your Blog ...' required>
</textarea>
<br>
</br>
<button type ='submit' className='submit_button'> Post Blog </button>
</form>
</div>

    );
  }
}
