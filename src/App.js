

import './App.css';
import React, { Component } from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {mind: {
      mid:0,
      name:'shiv',
      ctc:0
    }, isLoading: true};
   
  }

  // componentDidMount() {
  //   this.setState({isLoading: true});

  //   // fetch('http://localhost:8080/mind/getmind')
  //   //   .then(response => response.json())
  //   //   .then(data => this.setState({mind: data, isLoading: false}))
  //   //   .catch((error) => {
  //   //     console.error(error);
  //   //   });


  //     fetch('http://localhost:8080/mind/getmind')
  //     .then(response => response.json())
  //     .then((jsonData) => {
  //       // jsonData is parsed json object received from url
  //       console.log(jsonData)
  //       this.setState({mind:jsonData,isLoading:false})
       
  //     })
  //     .catch((error) => {
  //       // handle your errors here
  //       console.error(error)
  //     })

  // }

  render(){
    // if(this.state.isLoading===true){
    //   return(
    //   <p>Loading................</p>
    //   )
    // }else{
   
    //   return( <div>
    //     <p>Shiv</p>
    //     <h1 > {this.state.mind.name}</h1>
    //     <p>{this.state.mind.ctc}</p>
    //   </div>)
    // }
   return(
     <div>
       {this.state.isLoading?<p>Loading........</p>:<h1>{this.state.mind.name}</h1>}
     </div>
   )
}}
export default App;
