// import React from 'react'
// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>
// }
// function App() {
//   return (
//     <div>
//       <Welcome name="Geetanjali"/>
//     </div>
//   )
// }
// function Comment(props) {
// return(
  
//     <div className="comment">
//       <UserInfo user={props.author}/>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
// );
// }
// function Avatar(props) {
//   return (
//     <img src={props.author.avatarUrl} alt={props.author.name} className="Avatar" />
//   );
// }



// function UserInfo(props) {
//   return(

//       <div className="UserInfo">
//         <Avatar user={props.author} />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
   
//   );
// }
// export default App
//  class Clock1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//   render() {//render method
//     return (
//       <div>
//         <h1>Hello Geetanjali</h1>
//         <h1>Hello Geetanjali</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}. </h2>
//       </div>
//     );
//   }
//  }


 class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);