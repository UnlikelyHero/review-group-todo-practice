import React from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: ['was the dog', 'wash the cat', 'wash the car'],
      numOfTasks: 0,
      value: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      numOfTasks: this.state.todos.length
    })
  }

  componentDidUpdate() {
    // this would be for when state and props have changed and we need to make a new request to an API...
    // possible optional arguments. (props, prevState);
  }

  componentWillUnmount(){
    // This is where you'd save some information before and close the app before you leave
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.value],
      value: ''
    })
  }

  render() { // this is a pure method! Surprise!
    return (
      <div>
        <h2>Don's Todo List</h2>
        <h5>There are {this.state.numOfTasks} todos to do...</h5>
        <ul>
          <li>Wear Pants</li>
        </ul>

        <form onSubmit={this.handleSubmit}>
          <label>What do I need to do today?</label>
          <input
            type='text'
            placeholder='Submit more todos'
            value={this.state.value}
            onChange={()=>{this.handleChange(event)}}
          ></input>
          <input type='submit' value='Submit'></input>
        </form>
      </div>
    )
  }
}