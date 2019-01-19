import React, { Component } from 'react';
import Axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    const { fetchRepos, username} = this.props;

    Axios.get(`https://api.github.com/users/${username}/repos`)
      .then(res => {
        console.log(res.data)
        fetchRepos(res.data)
      })
      .catch(error => {
        console.log('error')
        fetchRepos([])
      })
  }
  render() {
    const { updateUsername, username } = this.props
    return(
      <div className="Form">
        <input type="text" value={ username } onChange={ (e) => updateUsername(e.target.value) } />
        <input
          type="button"
          value="Fetch" onClick={ this.handleClick } />
      </div>
    )
  }
}

export default Form;
