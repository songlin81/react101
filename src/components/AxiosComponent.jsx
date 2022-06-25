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
 
  render() {
    return (
      <div className = 'ArticleContainer'>
         <h1>Simple blog with React</h1>
        <div className='AddArticle'>
          <b>id of article: </b>
          <input type='number' value={this.state.id} onChange={this.handleChange.bind(this)} />
          <form>
          <input type='text' placeholder='Title' value={this.state.title} onChange={this.handleChangeTitle.bind(this)} />
          <textarea placeholder='Enter Body' value={this.state.body} onChange={this.handleChangeBody.bind(this)}>
          </textarea>
          <input type='submit' value='Add/Update Post'/>
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
