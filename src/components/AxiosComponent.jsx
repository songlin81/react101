import React from 'react';
import '../App.css';
import axios from 'axios';
 
class AxiosComponent extends React.Component {
  state = {
    id :  '',
    title : '',
    body : '',
    data : []
  }
  
  componentDidMount() {
    axios.get( 'https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      let newData = res.data.slice( 0 , 5 );
      this.setState({
        id : newData[newData.length - 1].id + 1,
        data : newData
      }, () => console.log(this.state.id))
      console.log(newData);
    })
    .catch(err => console.log("Couldn't fetch data. Error: " + err))
  }

  handleChange(event) {
    this.setState({id: event.target.value});
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  handleChangeBody(event) {
    this.setState({body: event.target.value});
  }
 
  changeId =e => {
    let id = e.target.value;
    this.setState({
      id : id
    })
  }
  
  changeTitle = e => {
    let title = e.target.value;
    this.setState({
      title : title
    })
  }
 
  changeBody = e => {
    let body = e.target.value;
    this.setState({
      body : body
    })
  }
 
  addOrUpdatePost = e => {
    e.preventDefault();
    if ( this.state.title === '' || this.state.body === '' || this.state.id === '' ) {
      alert( 'No field should be empty' );
      return ;
    } else if ( this.state.id > this.state.data.length + 1 ) { 
      alert( 'Please use the next id' );
    } else {
      if ( this.state.data[ this.state.id - 1 ] !== undefined ) {
        // update the post
      } else {
        console.log("start to post");
      axios.post( "https://jsonplaceholder.typicode.com/posts" , {
        id : this.state.id + 1 ,
        title : this.state.title,
        body : this.state.body
      })
      .then( res => {
        console.log(res);
        let newPost = res.data;
        let newData = [...this.state.data, newPost];
        this.setState({
          id : this.state.id + 1 ,
          title : '' ,
          body : '' ,
          data : newData
        });
      })
      .catch( err => console.log(err));
      }
    }
  }

  render() {
    return (
      <div className = 'ArticleContainer'>
        <h1>Simple blog with React</h1>
        {/* <div className='AddArticle'>
          <b>id of article: </b>
          <input type='number' value={this.state.id} onChange={this.handleChange.bind(this)} />
          <form>
          <input type='text' placeholder='Title' value={this.state.title} onChange={this.handleChangeTitle.bind(this)} />
          <textarea placeholder='Enter Body' value={this.state.body} onChange={this.handleChangeBody.bind(this)}>
          </textarea>
          <input type='submit' value='Add/Update Post'/>
          </form>
        </div> */}
        <div className='AddArticle'>
          <b>id of article: </b>
          <input type='number' onChange={this.changeId} value={this.state.id} />
          <form>
          <input onChange={this.changeTitle} type='text' placeholder='Title' value={this.state.title} />
          <textarea onChange={this.changeBody} placeholder='Enter Body' value={this.state.body}>
          </textarea>
          <input onClick={this.addOrUpdatePost} type='submit' value='Add/Update Post'/>
          </form>
        </div>
        {
          this.state.data.length === 0 ?
            <p>Loading Posts...</p>
          :
            this.state.data.map((post, index) => (
              <article key={index}>
                <h2>{index + 1}. {post.title}</h2>
                <p>{post.body.substr(0, 100)}...</p>
                <button className='delete'>Delete</button>
                <button className='edit'>Edit</button>
              </article>
            ))
        }
      </div>
    )
  }
  
}
 
export default AxiosComponent;
