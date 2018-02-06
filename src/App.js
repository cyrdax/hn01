import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

/*function isSearched(searchTerm) {
  return function(item) {
    // some condition which returns true or false
    //return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}*/

const isSearched = (searchTerm) => (item) =>
  !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list,
      header: 'Welcome to React',
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.header}</h2>
        <form>
          <input
            type="text"
            onChange={this.onSearchChnage}
          />
        </form>
        {this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>
          <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
            <button
              onClick={() => {
                this.onDismiss(item.objectID);
                console.log(item.objectID);
              }}
              type="button"
            >Dismiss</button>
          </span>
          </div>
          )
        }
      </div>
    );
  }
}

export default App;
