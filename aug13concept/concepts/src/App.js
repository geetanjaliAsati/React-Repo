import React from 'react';
import axios from 'axios';

class Initialize extends React.Component{

  constructor(props){
    // Calling the constructor of Parent Classs React.Component
    super(props);

    // Initialize state
    this.state = {
      date: new Date(),
      clickedStatus: false
    }
    // this.handleSomething = this.handleSomething.bind(this)
  }

  render(){
    return(
      <div>
        Today's date time is {this.state.date.toLocaleDateString()}
      </div>
    )
  }
}

class RenderExample extends React.Component{
  constructor(props){
    super(props)
    this.state={
      surname:"Dutt"
    }
  }

  render(){
    // Don't do this
    // this.setState({surname:"Something else"})

    if(this.props.name){
      return(
        <div>
          The name is {this.props.name}
        </div>
      )
    }
    return(
      <div>
        The surname is {this.state.surname}
      </div>
    )
  }
}

class WebAPIEx extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      users: {},
      isUsersLoaded: false
    }
    this.removeUser = this.removeUser.bind(this)
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(result=>{
      this.setState({
        users:result.data,
        isUsersLoaded: true
      })
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    const boolShouldComponentUpdate = this.state.users!==nextState.users
    console.log("Should component update",boolShouldComponentUpdate)
    return boolShouldComponentUpdate
  }

  // componentWillUpdate(nextProps, nextState){
  //   console.log("Component will update")
  // }

  componentDidUpdate(prevProps,prevState){
    console.log("Component Did Update")
  }

  removeUser(id){
    this.setState({
      users: this.state.users.filter(user=>user.id!==id)
    })
  }
  render(){
    if(!this.state.isUsersLoaded){
      return <div>Loading...</div>
    }
    return(
      <div>
        <ul>
          {
            this.state.users.map((user,index)=>(
              <li key={index} >{user.name} {' '} <span onClick={()=>this.removeUser(user.id)} style={{cursor:"pointer"}}>x</span></li>
            ))
          }
        </ul>
      </div>
    )
  }
}
class App extends React.Component{

  render(){
    return <div>
      <p>
        Basic App
      </p>
      {/* The lifecycle methods of initialize component will run now(inside the render func of App component) */}
      <Initialize /> 
      <RenderExample name={'Rohan'}/>
      <RenderExample/>
      <WebAPIEx />
    </div>
  }
}


export default App;